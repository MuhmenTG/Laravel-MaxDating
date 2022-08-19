<?php

namespace App\Http\Resources;

use App\Models\LikeComment;
use App\Models\UserInformation;
use Illuminate\Http\Resources\Json\JsonResource;

class LikeCommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function format($UserInformation, $opts) {
		if (!$UserInformation || get_class($UserInformation) !==  UserInformation::class) return null;
		return [
            'id' => $UserInformation->getUserInformationId(),
			'firstName' => $UserInformation->getFirstName(),
			'lastName' => $UserInformation->getLastName(),
        ];
    }
}
