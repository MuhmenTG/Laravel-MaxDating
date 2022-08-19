<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class UserInformation extends Model
{
    protected $table = 'user_information';
    protected $primaryKey = 'id';
//      protected $guarded = [];
//      protected $fillable = [];

    const COL_ID = 'id';
    const COL_FIRSTNAME = 'firstName';
    const COL_LASTNAME = 'lastName';
    const COL_EMAIL = 'email';
    const COL_PASSWORD = 'password';
    const COL_GENDER = 'gender';
    const COL_REGISTEREDAT = 'registeredAt';
    const COL_USERLOCATION = 'userLocation';
    const COL_USERAGE = 'userAge';
    const COL_USERHEIGHT = 'userHeight';
    const COL_USERWEIGHT = 'userWeight';
    const COL_USERMAXIMUMEDUCATION = 'userMaximumEducation';
    const COL_USERRELIGION = 'userReligion';
    const COL_USERMARITALSTATUS = 'userMaritalStatus';
    const COL_USERSMOKINGSTAUS = 'userSmokingStaus';
    const COL_USERDRINKINGSTATUS = 'userDrinkingStatus';
    const COL_USERPARENTSTATUS = 'userParentStatus';
    const COL_USEREYECOLOR = 'userEyeColor';
    const COL_USERHAIRCOLOR = 'userHairColor';
    const COL_USERCLOTHINGSTYLE = 'userClothingStyle';
    const COL_USERLIVINGSTYLE = 'userLivingStyle';
    const COL_ISLOGGEDIN = 'isLoggedIn';
    const COL_ISVERIFIED = 'isVerified';
    const COL_VERIFYTOKEN = 'verifyToken';
    const COL_CREATED_AT = 'created_at';
    const COL_UPDATED_AT = 'updated_at';

    /*
     * Eloquent Scopes
     */

    public function scopeByUserId($query, $val) {
            $query->where('id', $val);
    }

    public function scopeByEmail($query, $val) {
        $query->where('email', $val);
        }
    /*
     * GET / SET
     */

    public function getUserInformationId() {
            return $this->id;
    }

    public function getFirstName() {
            return $this->firstName;
    }

    public function setFirstName($value) {
            $this->firstName = $value;
    }

    public function getLastName() {
            return $this->lastName;
    }

    public function setLastName($value) {
            $this->lastName = $value;
    }

    public function getEmail() {
            return $this->email;
    }

    public function setEmail($value) {
            $this->email = $value;
    }

    public function getPassword() {
            return $this->password;
    }

    public function setPassword($value) {
            $this->password = Hash::make($value);
    }

    public function getGender() {
            return $this->gender;
    }

    public function setGender($value) {
            $this->gender = $value;
    }

    public function getRegisteredAt() {
            return intval($this->registeredAt);
    }

    public function setRegisteredAt($value) {
            $this->registeredAt = $value;
    }

    public function getUserLocation() {
            return $this->userLocation;
    }

    public function setUserLocation($value) {
            $this->userLocation = $value;
    }

    public function getUserAge() {
            return $this->userAge;
    }

    public function setUserAge($value) {
            $this->userAge = $value;
    }

    public function getUserHeight() {
            return $this->userHeight;
    }

    public function setUserHeight($value) {
            $this->userHeight = $value;
    }

    public function getUserWeight() {
            return $this->userWeight;
    }

    public function setUserWeight($value) {
            $this->userWeight = $value;
    }

    public function getUserMaximumEducation() {
            return $this->userMaximumEducation;
    }

    public function setUserMaximumEducation($value) {
            $this->userMaximumEducation = $value;
    }

    public function getUserReligion() {
            return $this->userReligion;
    }

    public function setUserReligion($value) {
            $this->userReligion = $value;
    }

    public function getUserMaritalStatus() {
            return $this->userMaritalStatus;
    }

    public function setUserMaritalStatus($value) {
            $this->userMaritalStatus = $value;
    }

    public function getUserSmokingStaus() {
            return $this->userSmokingStaus;
    }

    public function setUserSmokingStaus($value) {
            $this->userSmokingStaus = $value;
    }

    public function getUserDrinkingStatus() {
            return $this->userDrinkingStatus;
    }

    public function setUserDrinkingStatus($value) {
            $this->userDrinkingStatus = $value;
    }

    public function getUserParentStatus() {
            return $this->userParentStatus;
    }

    public function setUserParentStatus($value) {
            $this->userParentStatus = $value;
    }

    public function getUserEyeColor() {
            return $this->userEyeColor;
    }

    public function setUserEyeColor($value) {
            $this->userEyeColor = $value;
    }

    public function getUserHairColor() {
            return $this->userHairColor;
    }

    public function setUserHairColor($value) {
            $this->userHairColor = $value;
    }

    public function getUserClothingStyle() {
            return $this->userClothingStyle;
    }

    public function setUserClothingStyle($value) {
            $this->userClothingStyle = $value;
    }

    public function getUserLivingStyle() {
            return $this->userLivingStyle;
    }

    public function setUserLivingStyle($value) {
            $this->userLivingStyle = $value;
    }

    public function getIsLoggedIn() {
            return intval($this->isLoggedIn);
    }

    public function setIsLoggedIn($value) {
            $this->isLoggedIn = $value;
    }

    public function getIsVerified() {
            return intval($this->isVerified);
    }

    public function setIsVerified($value) {
            $this->isVerified = $value;
    }

    public function getVerifyToken() {
            return $this->verifyToken;
    }

    public function setVerifyToken($value) {
            $this->verifyToken = $value;
    }

    public function getCreatedAt() {
            return $this->created_at;
    }

    public function getUpdatedAt() {
            return $this->updated_at;
    }

}
