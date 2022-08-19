<?php
declare(strict_types=1);
namespace App\Factories;

use App\Models\UserInformation;

class AuthFactory{


    public static function registerUser(string $firstName
    /*string $lastName, string $emailaddress, string $password, string $gender, string $verificationToken*/){
        $userInfo = new UserInformation();
        $userInfo->setFirstName($firstName);
        // $userInfo->setLastName($lastName);
        // $userInfo->setEmail($emailaddress);
        // $userInfo->setPassword($password);
        // $userInfo->setGender($gender);
        // $userInfo->setRegisteredAt(time());
        // $userInfo->setVerifyToken($verificationToken);
        if($userInfo->save()){
            return $userInfo;
        }
        return null;

    }
}




?>