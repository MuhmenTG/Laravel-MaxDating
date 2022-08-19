<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PassswordReset extends Model
{
    const COL_ID = 'id';
    const COL_USERID = 'userId';
    const COL_RESETDATE = 'resetDate';
    const COL_EXPIRYDATE = 'expiryDate';
    const COL_VALID = 'valid';
    const COL_RESETTOKEN = 'resetToken';
    const COL_CREATED_AT = 'created_at';

    /*
     * Eloquent Scopes
     */

    public function scopeById($query, $val) {
            $query->where('id', $val);
    }

    /*
     * GET / SET
     */

    public function getPasswordResetId() {
            return $this->id;
    }

    public function getUserId() {
            return $this->userId;
    }

    public function setUserId($value) {
            $this->userId = $value;
    }

    public function getResetDate() {
            return intval($this->resetDate);
    }

    public function setResetDate($value) {
            $this->resetDate = $value;
    }

    public function getExpiryDate() {
            return intval($this->expiryDate);
    }

    public function setExpiryDate($value) {
            $this->expiryDate = $value;
    }

    public function getValid() {
            return intval($this->valid);
    }

    public function setValid($value) {
            $this->valid = $value;
    }

    public function getResetToken() {
            return $this->resetToken;
    }

    public function setResetToken($value) {
            $this->resetToken = $value;
    }

    public function getCreatedAt() {
            return $this->created_at;
    }
}
