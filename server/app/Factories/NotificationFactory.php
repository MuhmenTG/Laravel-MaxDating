<?php
declare(strict_types=1);
namespace App\Factories;


use App\Models\Notification;
class NotificationFactory{


    public static function createNotification(string $typeOfNotification, string $notificationMessage, int $receiverUserId, int $userId, int $additionalInfo = null, string $additionalAction = null){
        $notification = New Notification();
        if($additionalInfo){
            $notification->setAdditionalInfo($additionalInfo);
        }
        if($additionalAction){
            $notification->setAdditionalAction($additionalAction);
        }
        $notification->setLabel($typeOfNotification);
        $notification->setUserWhoFiredEvent($userId);
        $notification->setMsg($notificationMessage);
        $notification->setUserToNotify($receiverUserId);
        $notification->setTime(time());
        $notification->save();
    }

    public function setNotificationToShowed(int $notficationId) 
    {
        $userNotification = Notification::ById($notficationId)->first();
        $userNotification->setIsShowned(1);
        if( $userNotification->save()){
            return $userNotification;
        }
    }

}

