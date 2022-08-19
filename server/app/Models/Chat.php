<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    
    protected $table = 'user_chats';
    protected $primaryKey = 'id';
//      protected $guarded = [];
//      protected $fillable = [];

    const COL_ID = 'id';
    const COL_SENDERID = 'senderId';
    const COL_RECEIVERID = 'receiverId';
    const COL_MESSAGE = 'message';
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

    public function getUserChatId() {
            return $this->id;
    }

    public function getSenderId() {
            return intval($this->senderId);
    }

    public function setSenderId($value) {
            $this->senderId = $value;
    }

    public function getReceiverId() {
            return intval($this->receiverId);
    }

    public function setReceiverId($value) {
            $this->receiverId = $value;
    }

    public function getMessage() {
            return $this->message;
    }

    public function setMessage($value) {
            $this->message = $value;
    }

    public function getCreatedAt() {
            return $this->created_at;
    }

    public function getUpdatedAt() {
            return $this->updated_at;
    }
}
