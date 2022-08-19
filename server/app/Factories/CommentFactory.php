<?php
declare(strict_types=1);
namespace App\Factories;

use App\Http\Resources\LikeCommentResource;
use App\Models\CommentReply;
use App\Models\LikeComment;
use App\Models\UserInformation;

class CommentFactory{


    public static function getLikesOfSpecificComment(int $commentId, string $typeOfLike, int $blogId, int $userId = null ){
        $likes = LikeComment::ByCommentId($commentId)
        ->where(LikeComment::COL_BLOGID, $blogId)
        ->where(LikeComment::COL_LIKE_TYPE, $typeOfLike )->get();
        
        $likesWithUsers = [];
        foreach($likes as $like){
            $data = array(
                "likeId" => $like->getLikeId(), 
                "likeUserId" => $like->getUserId(),
                'likeUserName' => UserFactory::getUserFullName($like->getUserId()),
            );
            array_push($likesWithUsers,  $data);
        }
        if($likesWithUsers){
            return $likesWithUsers;
        }
        return null;
    }

    public static function getRepliesOfSpecificComment(int $commentId, int $blogId, int $userId = null){
        $replies = CommentReply::ByParentCommentId($commentId)->get();
        $repliesWithUsers = [];
        foreach($replies as $reply){
            $replyLikes = CommentFactory::getLikesOfSpecificReply($reply->getCommentReplieId(), $blogId);
            $data = array(
                "replyId" => $reply->getCommentReplieId(), 
                "reply" => $reply->getReplyMessage(),
                "replyUserId" => $reply->getUserId(),
                "replyUserName" => UserFactory::getUserFullName($reply->getUserId()),
                "replyLikes" => $replyLikes
            );
            array_push($repliesWithUsers,  $data);
        }
        if($repliesWithUsers){
            return $repliesWithUsers;
        }
        return null;
    }

    public static function getLikesOfSpecificReply($CommentRepliyId, $blogId){
        $replyLikes = LikeComment::ByCommentId($CommentRepliyId)
        ->where(LikeComment::COL_BLOGID, $blogId)
        ->where(LikeComment::COL_LIKE_TYPE, LikeComment::LIKED_REPLY)->get();
        $likes = [];
        foreach($replyLikes as $replyLike){
            $data = array(
                "replyLikeId" => $replyLike->getLikeId(), 
                "replyLikeUserId" => $replyLike->getUserId(),
                "replyLikeUserName" => UserFactory::getUserFullName($replyLike->getUserId()),
            );
            array_push($likes,  $data);
        }
        return $likes;
    }
    
    public static function removeLikesOfParticularComment(int $commentId){
        $likes = LikeComment::ByCommentId($commentId)->get();
        foreach ($likes as $like) {
            $like->delete();
        }
        return null;
    }

 
}