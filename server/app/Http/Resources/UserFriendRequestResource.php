<?php

namespace App\Http\Resources;

use App\Factories\UserFactory;
use Illuminate\Http\Resources\Json\JsonResource;

class UserFriendRequestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "frindIdRequest" => $this->getFriendId(),
            "friendReceivingUserId" => $this->getRequestFriendSenderId(),
            "friendRequestFromName" => UserFactory::getUserFullName($this->getRequestFriendSenderId()),
            "friendShipStatus" => $this->getFriendshipStatus(),
            "timeSent" => $this->getTime(),
        ];
    }
}
