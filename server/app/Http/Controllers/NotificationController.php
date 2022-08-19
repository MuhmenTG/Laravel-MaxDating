<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use App\Models\Notification;
use App\Models\UserInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NotificationController extends Controller
{
    public function removeNotification($userId, $notificationId){
        $userId = intval($userId);
        $notificationId = intval($notificationId);

        $notification = Notification::ByNotificationIdAndUserId($notificationId, $userId)->first();
        if($notification){
            $notification->delete();
        }

        return $this->sendSuccessResponse($notification, "notification deleted", 200);
    }

    public function markNotficationStatus(Request $request){
        $validator = Validator::make($request->all(), [
            'userId'                => 'required|int',
            'notificationId'        => 'required|int',
            'markingType'           => 'required|int',
        ]);

        $userId = intval($request->input('userId'));
        $notificationId = intval($request->input('notificationId'));

        if($validator->fails()) {
            return $this->sendError("Validation failed", $validator->errors());
        }

        $notification = Notification::ByNotificationIdAndUserId($notificationId, $userId)->first();
        
        if($notification->getIsViewed() == Notification::SET_TO_UNREAD){
            $notification->setIsViewed(Notification::SET_TO_READ);
        }
        else{
            $notification->setIsViewed(Notification::SET_TO_UNREAD);
        }
        $notification->save();
        return $this->sendSuccessResponse($notification, "Notify marked", 200);
    }

    public function getAllNotifications(int $userId){
        $userId = intval($userId);
        if(!UserInformation::ByUserId($userId)){
            return $this->sendError($userId, "User could not be found", 200); 
        }
        $notifications = Notification::ByUserId($userId)->get();
        $notificationList = [];
        if($notifications){
            foreach ($notifications as $notification) { 
                array_push($notificationList, NotificationResource::make($notification));
            }
        }
        if($notificationList){
            return $this->sendSuccessResponse($notificationList, "Get Notifications", 200);
        }
        return $this->sendError($notificationList, "You have no Notifications", 200);   

    }

    public function getUnreadNotifications(int $userId){
        $userId = intval($userId);
        if(!UserInformation::ByUserId($userId)){
            return $this->sendError($userId, "User could not be found", 200); 
        }
        $notifications = Notification::ByUserId($userId)->where(Notification::COL_ISVIEWED, Notification::SET_TO_UNREAD)->get();
        $notificationList = [];
        if($notifications){
            foreach ($notifications as $notification) { 
                array_push($notificationList, NotificationResource::make($notification));
            }
        }
        if($notificationList){
            return $this->sendSuccessResponse($notificationList, "All unread notifications", 200);
        }
        return $this->sendError($notificationList, "You have no unread notifications", 200);   
    }

    public function getReadNotifications(int $userId){
        $userId = intval($userId);
        if(!$userId){
            return $this->sendError($userId, "User could not be found", 200); 
        }

        $notifications = Notification::ByUserId($userId)->where(Notification::COL_ISVIEWED, Notification::SET_TO_READ)->get();

        $notificationList = [];
        if($notifications){
            foreach ($notifications as $notification) { 
                array_push($notificationList, NotificationResource::make($notification));
            }
        }
        if($notificationList){
            return $this->sendSuccessResponse($notificationList, "Get read Notifications", 200);
        }
        return $this->sendError($notificationList, "You have no read Notifications", 200);   
    }


   
}
