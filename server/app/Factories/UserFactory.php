<?php
declare(strict_types=1);
namespace App\Factories;

use App\Http\Resources\LikeCommentResource;
use App\Models\Blog;
use App\Models\LikeComment;
use App\Models\UserInformation;
use Illuminate\Support\Arr;

class UserFactory{


    public static function getUserById(int $userId){
        $userData = UserInformation::byUserId($userId)->get([UserInformation::COL_ID, UserInformation::COL_FIRSTNAME, UserInformation::COL_LASTNAME]);
        if($userData){
            return $userData;
        }
        return null;
    }

    public static function getUserFullName(int $userId){
        $user = UserInformation::byUserId($userId)->get([UserInformation::COL_ID, UserInformation::COL_FIRSTNAME, UserInformation::COL_LASTNAME]);
        if($user){
            return $user[0][UserInformation::COL_FIRSTNAME]." ".$user[0][UserInformation::COL_LASTNAME];
        }
        return null;
    }

    public static function unixTimeToHumanReadable(int $stamp){
        $date = date("d F Y H:i:s", $stamp);
        return $date;
    }
    public static function findBlogNameById(int $blogId){
      $blog = Blog::byId($blogId)->first();
      if($blog){
        return $blog->getHeading();
      }
      
    }

    

    


}

