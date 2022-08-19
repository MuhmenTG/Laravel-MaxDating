<?php

namespace App\Http\Resources;

use App\Factories\UserFactory;
use Illuminate\Http\Resources\Json\JsonResource;

class UserFriendInfoResource extends JsonResource
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
            "friendId" => $this->getFriendId(),
            "friendUserId" => $this->getRequestFriendReceiverId(),
            "friendName" => UserFactory::getUserFullName($this->getRequestFriendReceiverId()),
            "friendSince" => $this->getTime(),
        ];
    }
}
