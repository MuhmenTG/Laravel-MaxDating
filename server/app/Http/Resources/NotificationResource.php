<?php

namespace App\Http\Resources;

use App\Factories\UserFactory;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if($this->getAdditionalInfo() !== null)
        {
            return [
                "notificationId" => $this->getNotificationId(),
                "notificationLabel" => $this->getLabel(),
                "notificationSentFrom" => UserFactory::getUserFullName($this->getUserWhoFiredEvent()),
                "notificationMessage" => $this->getMsg(),
                "additionalMessage" => UserFactory::findBlogNameById($this->getAdditionalInfo()),
                "IsRead" => $this->getIsViewed(),
                "notificationTime" => UserFactory::unixTimeToHumanReadable($this->getTime()),
            ];
        }
        else{
            return [
                "notificationId" => $this->getNotificationId(),
                "notificationLabel" => $this->getLabel(),
                "notificationSentFrom" => UserFactory::getUserFullName($this->getUserWhoFiredEvent()),
                "notificationMessage" => $this->getMsg(),
                "IsRead" => $this->getIsViewed(),
                "notificationTime" => UserFactory::unixTimeToHumanReadable($this->getTime()),
            ];
        }
      
    }
}
