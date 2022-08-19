<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CandidatePreferences extends Model
{
    
    protected $table = 'candidate_preferences';
    protected $primaryKey = 'id';
//      protected $guarded = [];
//      protected $fillable = [];

    const COL_ID = 'id';
    const COL_SEXOFPOTENTIALCANDIDATE = 'sexOfPotentialCandidate';
    const COL_MINAGEOFPOTENTIALCANDIDATE = 'minAgeOfPotentialCandidate';
    const COL_MAXAGEOFPOTENTIALCANDIDATE = 'maxAgeOfPotentialCandidate';
    const COL_MINHEIGHTOFPOTENTIALCANDIDATE = 'minHeightOfPotentialCandidate';
    const COL_MAXHEIGHTOFPOTENTIALCANDIDATE = 'maxHeightOfPotentialCandidate';
    const COL_MINWEIGHTOFPOTENTIALCANDIDATE = 'minWeightOfPotentialCandidate';
    const COL_MAXWEIGHTOFPOTENTIALCANDIDATE = 'maxWeightOfPotentialCandidate';
    const COL_CITYOFPOTENTIALCANDIDATE = 'cityOfPotentialCandidate';
    const COL_WISHEDSTATUSPOTENTIALCANDIDATE = 'wishedStatusPotentialCandidate';
    const COL_RELIGIONOFPOTENTIALCANDIDATE = 'religionOfPotentialCandidate';
    const COL_SMOKINGSTATUSOFPOTENTIALCANDIDATE = 'smokingStatusOfPotentialCandidate';
    const COL_EYECOLOROFPOTENTIALCANDIDATE = 'eyeColorOfPotentialCandidate';
    const COL_HAIRCOLOROFPOTENTIALCANDIDATE = 'hairColorOfPotentialCandidate';
    const COL_BODYOFPOTENTIALCANDIDATE = 'bodyOfPotentialCandidate';
    const COL_APPERANCEOFPOTENTIALCANDIDATE = 'apperanceOfPotentialCandidate';
    const COL_CLOTHINGOFPOTENTIALCANDIDATE = 'clothingOfPotentialCandidate';
    const COL_BODYARTOFPOTENTIALCANDIDATE = 'BodyArtOfPotentialCandidate';
    const COL_JOBOFPOTENTIALCANDIDATE = 'jobOfPotentialCandidate';
    const COL_LIVINGSTYLEOFPOTENTIALCANDIDATE = 'livingStyleOfPotentialCandidate';
    const COL_VEHICLEOFPOTENTIALCANDIDATE = 'vehicleOfPotentialCandidate';
    const COL_NUMOFCHILDRENOFPOTENTIALCANDIDATE = 'numOfChildrenOfPotentialCandidate';
    const COL_MONTHLYINCOMEOFPOTENTIALCANDIDATE = 'monthlyIncomeOfPotentialCandidate';
    const COL_USERID = 'userId';
    const COL_CREATED_AT = 'created_at';
    const COL_UPDATED_AT = 'updated_at';

    /*
     * Eloquent Scopes
     */

    public function scopeById($query, $val) {
            $query->where('id', $val);
    }

    /*
     * GET / SET
     */

    public function getCandidatePreferenceId() {
            return $this->id;
    }

    public function getSexOfPotentialCandidate() {
            return $this->sexOfPotentialCandidate;
    }

    public function setSexOfPotentialCandidate($value) {
            $this->sexOfPotentialCandidate = $value;
    }

    public function getMinAgeOfPotentialCandidate() {
            return $this->minAgeOfPotentialCandidate;
    }

    public function setMinAgeOfPotentialCandidate($value) {
            $this->minAgeOfPotentialCandidate = $value;
    }

    public function getMaxAgeOfPotentialCandidate() {
            return $this->maxAgeOfPotentialCandidate;
    }

    public function setMaxAgeOfPotentialCandidate($value) {
            $this->maxAgeOfPotentialCandidate = $value;
    }

    public function getMinHeightOfPotentialCandidate() {
            return $this->minHeightOfPotentialCandidate;
    }

    public function setMinHeightOfPotentialCandidate($value) {
            $this->minHeightOfPotentialCandidate = $value;
    }

    public function getMaxHeightOfPotentialCandidate() {
            return $this->maxHeightOfPotentialCandidate;
    }

    public function setMaxHeightOfPotentialCandidate($value) {
            $this->maxHeightOfPotentialCandidate = $value;
    }

    public function getMinWeightOfPotentialCandidate() {
            return $this->minWeightOfPotentialCandidate;
    }

    public function setMinWeightOfPotentialCandidate($value) {
            $this->minWeightOfPotentialCandidate = $value;
    }

    public function getMaxWeightOfPotentialCandidate() {
            return $this->maxWeightOfPotentialCandidate;
    }

    public function setMaxWeightOfPotentialCandidate($value) {
            $this->maxWeightOfPotentialCandidate = $value;
    }

    public function getCityOfPotentialCandidate() {
            return $this->cityOfPotentialCandidate;
    }

    public function setCityOfPotentialCandidate($value) {
            $this->cityOfPotentialCandidate = $value;
    }

    public function getWishedStatusPotentialCandidate() {
            return $this->wishedStatusPotentialCandidate;
    }

    public function setWishedStatusPotentialCandidate($value) {
            $this->wishedStatusPotentialCandidate = $value;
    }

    public function getReligionOfPotentialCandidate() {
            return $this->religionOfPotentialCandidate;
    }

    public function setReligionOfPotentialCandidate($value) {
            $this->religionOfPotentialCandidate = $value;
    }

    public function getSmokingStatusOfPotentialCandidate() {
            return $this->smokingStatusOfPotentialCandidate;
    }

    public function setSmokingStatusOfPotentialCandidate($value) {
            $this->smokingStatusOfPotentialCandidate = $value;
    }

    public function getEyeColorOfPotentialCandidate() {
            return $this->eyeColorOfPotentialCandidate;
    }

    public function setEyeColorOfPotentialCandidate($value) {
            $this->eyeColorOfPotentialCandidate = $value;
    }

    public function getHairColorOfPotentialCandidate() {
            return $this->hairColorOfPotentialCandidate;
    }

    public function setHairColorOfPotentialCandidate($value) {
            $this->hairColorOfPotentialCandidate = $value;
    }

    public function getBodyOfPotentialCandidate() {
            return $this->bodyOfPotentialCandidate;
    }

    public function setBodyOfPotentialCandidate($value) {
            $this->bodyOfPotentialCandidate = $value;
    }

    public function getApperanceOfPotentialCandidate() {
            return $this->apperanceOfPotentialCandidate;
    }

    public function setApperanceOfPotentialCandidate($value) {
            $this->apperanceOfPotentialCandidate = $value;
    }

    public function getClothingOfPotentialCandidate() {
            return $this->clothingOfPotentialCandidate;
    }

    public function setClothingOfPotentialCandidate($value) {
            $this->clothingOfPotentialCandidate = $value;
    }

    public function getBodyArtOfPotentialCandidate() {
            return $this->BodyArtOfPotentialCandidate;
    }

    public function setBodyArtOfPotentialCandidate($value) {
            $this->BodyArtOfPotentialCandidate = $value;
    }

    public function getJobOfPotentialCandidate() {
            return $this->jobOfPotentialCandidate;
    }

    public function setJobOfPotentialCandidate($value) {
            $this->jobOfPotentialCandidate = $value;
    }

    public function getLivingStyleOfPotentialCandidate() {
            return $this->livingStyleOfPotentialCandidate;
    }

    public function setLivingStyleOfPotentialCandidate($value) {
            $this->livingStyleOfPotentialCandidate = $value;
    }

    public function getVehicleOfPotentialCandidate() {
            return $this->vehicleOfPotentialCandidate;
    }

    public function setVehicleOfPotentialCandidate($value) {
            $this->vehicleOfPotentialCandidate = $value;
    }

    public function getNumOfChildrenOfPotentialCandidate() {
            return $this->numOfChildrenOfPotentialCandidate;
    }

    public function setNumOfChildrenOfPotentialCandidate($value) {
            $this->numOfChildrenOfPotentialCandidate = $value;
    }

    public function getMonthlyIncomeOfPotentialCandidate() {
            return $this->monthlyIncomeOfPotentialCandidate;
    }

    public function setMonthlyIncomeOfPotentialCandidate($value) {
            $this->monthlyIncomeOfPotentialCandidate = $value;
    }

    public function getUserId() {
            return $this->userId;
    }

    public function setUserId($value) {
            $this->userId = $value;
    }

    public function getCreatedAt() {
            return $this->created_at;
    }

    public function getUpdatedAt() {
            return $this->updated_at;
    }

}
