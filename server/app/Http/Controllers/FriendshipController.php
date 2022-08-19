<?php

namespace App\Http\Controllers;

use App\Factories\NotificationFactory;
use App\Factories\UserFactory;
use App\Http\Resources\UserFriendRequestResource;
use App\Http\Resources\UserSentFriendRequestResource;
use App\Models\Friend;
use App\Models\LikeMatch;
use App\Models\Notification;
use App\Models\UserInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class FriendshipController extends Controller
{
    public function createPersonLike(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'likedById' => 'required|int',
            'likedId' => 'required|int',
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation failed", $validator->errors());
        }

        $likeByUserId = intval($request->input('likedById'));
        $likedUserId = intval($request->input('likedId'));

        $likingPerson = UserInformation::ByUserId($likedUserId)->first();
        if (!$likingPerson) {
            return $this->sendError("User to like not found");
        }

        $likedPair = LikeMatch::BylikedByUserId($likeByUserId)->where(LikeMatch::COL_LIKED, $likedUserId)->first();

        if ($likedPair) {
            $likedPair->delete();
            return $this->sendSuccessResponse($likedPair, "unliked", 200);
        }

        $likedPair = new LikeMatch();
        $likedPair->setLikedBy($likeByUserId);
        $likedPair->setLiked($likedUserId);
        $likedPair->setTime(time());
        $likedPair->save();

        NotificationFactory::createNotification(Notification::NOTIFICATION_TYPE_LIKE, Notification::SEND_LIKE, $likedUserId, $likeByUserId);

        return $this->sendSuccessResponse($likedPair, "liked", 200);
    }

    public function getOutgoingLikes($userId)
    {
        $outGoingLikes = LikeMatch::BylikedByUserId($userId)->get();
        $outGoingLikesArray = [];
        foreach ($outGoingLikes as $outGoingLike) {
            $likesInfo = array(
                "likeId" => $outGoingLike->getLikeMatchId(),
                "userLikedUserId" => $outGoingLike->getLiked(),
                "userLiked" => UserFactory::getUserFullName($outGoingLike->getLiked()),
            );
            array_push($outGoingLikesArray, $likesInfo);
        }
        if ($outGoingLikesArray) {
            return $this->sendSuccessResponse($outGoingLikesArray, "You have liked these users", 200);
        }
        return $this->sendError($outGoingLikesArray, "You have not liked any users", 200);
    }

    public function getInComingLikes($userId)
    {
        $InComingLikes = LikeMatch::Byliked($userId)->get();
        $inComingLikesArray = [];
        foreach ($InComingLikes as $InComingLike) {
            $likesInfo = array(
                "likeId" => $InComingLike->getLikeMatchId(),
                "likedByUserId" => $InComingLike->getLikedBy(),
                "likedByUser" => UserFactory::getUserFullName($InComingLike->getLikedBy()),
            );
            array_push($inComingLikesArray, $likesInfo);
        }
        if ($inComingLikesArray) {
            return $this->sendSuccessResponse($inComingLikesArray, "These users have liked you", 200);
        }
        return $this->sendError($inComingLikesArray, "No one have liked you", 200);
    }

    public function sendFriendRequest(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'userId' => 'required|int',
            'friendId' => 'required|int',
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation failed", $validator->errors());
        }

        $userId = intval($request->input('userId'));
        $friendId = intval($request->input('friendId'));

        $friend = UserInformation::ByUserId($friendId)->first();
        if (!$friend) {
            return $this->sendError("User to send friend request not found");
        }

        $pendingRequestFromFriendId = Friend::ByUserIdAndFriendUserId($friendId, $userId)->where(Friend::COL_FRIENDSHIPSTATUS, Friend::FRIEND_STATUS_PENDING)->first();

        if ($pendingRequestFromFriendId) {
            return $this->sendError("This user has already sent you a friend request. Check your request");
        }

        $friend = Friend::ByUserIdAndFriendUserId($userId, $friendId)->first();
        if (!$friend) {
            $friend = new Friend();
            $friend->setRequestFriendSenderId($userId);
            $friend->setRequestFriendReceiverId($friendId);
            $friend->setFriendshipStatus(Friend::FRIEND_STATUS_PENDING);
            $friend->setTime(time());
            if ($friend->save()) {
                NotificationFactory::createNotification(Notification::NOTIFICATION_TYPE_FRIEND_REQUEST, Notification::SENT_FRIEND_REQ, $friendId, $userId);
                return $this->sendSuccessResponse($friend, "friend request sent", 200);
            }
        } elseif ($friend->getFriendshipStatus() === Friend::FRIEND_STATUS_PENDING) {
            return $this->sendError("Already sent friend request");
        } elseif ($friend->getFriendshipStatus() === Friend::FRIEND_STATUS_FRIENDS) {
            return $this->sendError("Already friends");
        }
    }

    public function getPendingReceivedFriendRequests($userId)
    {
        $receivedFriendRequests = Friend::where(Friend::COL_REQUESTFRIENDRECEIVERID, $userId)
            ->where(Friend::COL_FRIENDSHIPSTATUS, Friend::FRIEND_STATUS_PENDING)->get();
        $requests = [];
        if ($receivedFriendRequests) {
            foreach ($receivedFriendRequests as $receivedFriendRequest) {
                array_push($requests, UserFriendRequestResource::make($receivedFriendRequest));
            }
        }
        if ($requests) {
            return $this->sendSuccessResponse($requests, "Pending received friend request", 200);
        }
        return $this->sendError($requests, "No pending received friend request", 200);
    }

    public function getSentFriendRequests(int $userId)
    {
        $sentFriendRequests = Friend::where(Friend::COL_REQUESTFRIENDSENDERID, $userId)
            ->where(Friend::COL_FRIENDSHIPSTATUS, Friend::FRIEND_STATUS_PENDING)->get();
        $requests = [];
        if ($sentFriendRequests) {
            foreach ($sentFriendRequests as $sentFriendRequest) {
                array_push($requests, UserSentFriendRequestResource::make($sentFriendRequest));
            }
        }
        if ($requests) {
            return $this->sendSuccessResponse($requests, "Sent friend request", 200);
        }
        return $this->sendError($requests, "No sent friend request", 200);
    }

    public function changeFriendRequestStatus(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'userId' => 'required|int',
            'friendId' => 'required|int',
            'status' => 'required|int',
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation failed", $validator->errors());
        }

        $userId = intval($request->input('userId'));
        $friendId = intval($request->input('friendId'));
        $status = intval($request->input('status'));

        $friend = Friend::ByUserIdAndFriendUserId($friendId, $userId)->where(Friend::COL_FRIENDSHIPSTATUS, Friend::FRIEND_STATUS_PENDING)->first();

        if ($status === Friend::FRIEND_STATUS_FRIENDS) {
            $friend->setFriendshipStatus(Friend::FRIEND_STATUS_FRIENDS);
            $friend->setTime(time());
            $friend->save();
        }

        return $this->sendSuccessResponse($friend, "friend request accepted", 200);

    }

    public function deleteFriendRequest(int $FriendRequestId, int $userId)
    {
        $friendRequest = Friend::ById($FriendRequestId)
        ->where(Friend::COL_REQUESTFRIENDRECEIVERID, $userId)
        ->orWhere(Friend::COL_REQUESTFRIENDSENDERID, $userId)
        ->where(Friend::COL_FRIENDSHIPSTATUS, Friend::FRIEND_STATUS_PENDING)->first();
        if ($friendRequest) {
            $friendRequest->delete();
            return $this->sendSuccessResponse($friendRequest, "friend request deleted", 200);
        }
        return null;
    }

    public function getAllFriends($userId)
    {
        $requests = $this->returnFrindsList($userId);

        if ($requests) {
            return $this->sendSuccessResponse($requests, "Get friends", 200);
        }
        return $this->sendError($requests, "You have no friends", 200);
    }

    public function returnFrindsList(int $userId)
    {
        $friends = Friend::where(Friend::COL_FRIENDSHIPSTATUS, Friend::FRIEND_STATUS_FRIENDS)
            ->orWhere(Friend::COL_REQUESTFRIENDSENDERID, $userId)
            ->orWhere(Friend::COL_REQUESTFRIENDRECEIVERID, $userId)->get();
        $requests = [];
        foreach ($friends as $friend) {
            if ($friend) {
                $friendInfo = [];
                if ($friend->getRequestFriendSenderId() == $userId) {
                    $friendInfo = array(
                        "friendId" => $friend->getFriendId(),
                        "friendUserId" => $friend->getRequestFriendReceiverId(),
                        "friendName" => UserFactory::getUserFullName($friend->getRequestFriendReceiverId()),
                        "friendSince" => $friend->getTime(),
                    );
                } else if ($friend->getRequestFriendReceiverId() == $userId) {
                    $friendInfo = array(
                        "friendId" => $friend->getFriendId(),
                        "friendUserId" => $friend->getRequestFriendSenderId(),
                        "friendName" => UserFactory::getUserFullName($friend->getRequestFriendSenderId()),
                        "friendSince" => $friend->getTime(),
                    );
                }
                array_push($requests, $friendInfo);
            }
        }
        return $requests;
    }

    public function returnMutualFrindsList(int $userId, int $friendId)
    {
        $firstUsersFriendLists = Friend::where(Friend::COL_REQUESTFRIENDSENDERID, $userId)
            ->where(Friend::COL_REQUESTFRIENDRECEIVERID, "!=", $friendId)
            ->orWhere(Friend::COL_REQUESTFRIENDRECEIVERID, $userId)
            ->where(Friend::COL_REQUESTFRIENDSENDERID, "!=", $friendId)
            ->where(Friend::COL_FRIENDSHIPSTATUS, Friend::FRIEND_STATUS_FRIENDS)
            ->get();

        $secondUsersFriendLists = Friend::where(Friend::COL_REQUESTFRIENDSENDERID, $friendId)
        ->where(Friend::COL_REQUESTFRIENDRECEIVERID, "!=", $userId)
            ->orWhere(Friend::COL_REQUESTFRIENDRECEIVERID, $friendId)
            ->where(Friend::COL_REQUESTFRIENDSENDERID, "!=", $userId)
            ->where(Friend::COL_FRIENDSHIPSTATUS, Friend::FRIEND_STATUS_FRIENDS)
            ->get();

        $mutualFriends = [];

        foreach ($firstUsersFriendLists as $firstUsersFriendList) {
            foreach ($secondUsersFriendLists as $secondUsersFriendList) {
                    if ($firstUsersFriendList->getRequestFriendReceiverId() == $secondUsersFriendList->getRequestFriendReceiverId()) {
                        $mutualFriendInfo = array(
                            "friendUserId" => $firstUsersFriendList->getRequestFriendReceiverId(),
                            "friendName" => UserFactory::getUserFullName($firstUsersFriendList->getRequestFriendReceiverId()),
                        );
                        array_push($mutualFriends, $mutualFriendInfo);
                    } else if ($firstUsersFriendList->getRequestFriendSenderId() == $secondUsersFriendList->getRequestFriendSenderId()) {
                        $mutualFriendInfo = array(
                            "friendUserId" => $firstUsersFriendList->getRequestFriendSenderId(),
                            "friendName" => UserFactory::getUserFullName($firstUsersFriendList->getRequestFriendSenderId()),
                        );
                        array_push($mutualFriends, $mutualFriendInfo);
                    } else if ($firstUsersFriendList->getRequestFriendReceiverId() == $secondUsersFriendList->getRequestFriendSenderId()) {
                        $mutualFriendInfo = array(
                            "friendUserId" => $firstUsersFriendList->getRequestFriendReceiverId(),
                            "friendName" => UserFactory::getUserFullName($firstUsersFriendList->getRequestFriendReceiverId())
                        );
                        array_push($mutualFriends, $mutualFriendInfo );
                    } else if ($firstUsersFriendList->getRequestFriendSenderId() == $secondUsersFriendList->getRequestFriendReceiverId()) {
                        $mutualFriendInfo = array(
                            "friendUserId" => $$firstUsersFriendList->getRequestFriendSenderId(),
                            "friendName" => UserFactory::getUserFullName($firstUsersFriendList->getRequestFriendSenderId())
                        );
                        array_push($mutualFriends, $mutualFriendInfo );
                    }
                
            }
        }
        return $mutualFriends;
    }

    public function unFriendUser(int $userId, int $friendId)
    {
        $userId = intval($userId);
        $friendId = intval($friendId);
        $friend = Friend::ByUserIdAndFriendUserId($userId, $friendId)->where(Friend::COL_FRIENDSHIPSTATUS, Friend::FRIEND_STATUS_FRIENDS)->first();
        if ($friend) {
            $friend->delete();
            return $this->sendSuccessResponse($friend, "User deleted as friend", 200);
        }
    }

}
