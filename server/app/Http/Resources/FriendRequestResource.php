<?php

namespace App\Http\Resources;

use App\Factories\UserFactory;
use App\Models\Friend;
use Illuminate\Http\Resources\Json\JsonResource;

class FriendRequestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function format($Friend, $opts) {
		if (!$Friend || get_class($Friend) !==  Friend::class) return null;
		return [
            "frindIdRequest" => $Friend->getFriendId(),
            "friendReceivingUserId" => $Friend->getRequestFriendSenderId(),
            "friendRequestFromName" => UserFactory::getUserFullName($Friend->getRequestFriendSenderId()),
            "friendShipStatus" => $Friend->getFriendshipStatus(),
            "timeSent" => $Friend->getTime(),
        ];
    }
}
