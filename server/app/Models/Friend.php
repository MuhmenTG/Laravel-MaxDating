<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Friend extends Model
{
    protected $table = 'friends';
        protected $primaryKey = 'id';
//      protected $guarded = [];
//      protected $fillable = [];

        const COL_ID = 'id';
        const COL_REQUESTFRIENDSENDERID = 'requestFriendSenderId';
        const COL_REQUESTFRIENDRECEIVERID = 'requestFriendReceiverId';
        const COL_FRIENDSHIPSTATUS = 'friendshipStatus';
        const COL_TIME = 'time';
        const COL_CREATED_AT = 'created_at';
        const COL_UPDATED_AT = 'updated_at';
        const FRIEND_STATUS_FRIENDS = 1;
        const FRIEND_STATUS_PENDING = 0;
   
        /*
         * Eloquent Scopes
         */

        public function scopeById($query, $val) {
                $query->where('id', $val);
        }

        public function scopeByUserId($query, $val) {
                $query->where('requestFriendReceiverId', $val);
        }

        public function scopeByUserIdAndFriendUserId($query, $val, $val2) {
                $query->where('requestFriendSenderId', $val)->where('requestFriendReceiverId', $val2);
        }

        
        public function scopeFromTime($query, $val) {
                $query->where('time', '>=', $val);
        }

        public function scopeToTime($query, $val) {
                $query->where('time', '<', $val);
        }

        /*
         * GET / SET
         */

        public function getFriendId() {
                return $this->id;
        }

        public function getRequestFriendSenderId() {
                return intval($this->requestFriendSenderId);
        }

        public function setRequestFriendSenderId($value) {
                $this->requestFriendSenderId = $value;
        }

        public function getRequestFriendReceiverId() {
                return intval($this->requestFriendReceiverId);
        }

        public function setRequestFriendReceiverId($value) {
                $this->requestFriendReceiverId = $value;
        }

        public function getFriendshipStatus() {
                return $this->friendshipStatus;
        }

        public function setFriendshipStatus($value) {
                $this->friendshipStatus = $value;
        }

        public function getTime() {
                return intval($this->time);
        }

        public function setTime($value) {
                $this->time = $value;
        }

        public function getCreatedAt() {
                return $this->created_at;
        }

        public function getUpdatedAt() {
                return $this->updated_at;
        }
}
