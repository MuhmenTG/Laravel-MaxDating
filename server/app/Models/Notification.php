<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    
    protected $table = 'notifications';
    protected $primaryKey = 'id';
//      protected $guarded = [];
//      protected $fillable = [];

    const COL_ID = 'id';
    const COL_LABEL = 'label';
    const COL_ADDITIONALINFO = 'additionalInfo';
    const COL_ADDITIONALACTION = 'additionalAction';
    const COL_MSG = 'msg';
    const COL_USERTONOTIFY = 'userToNotify';
    const COL_USERWHOFIREDEVENT = 'userWhoFiredEvent';
    const COL_ISVIEWED = 'isViewed';
    const COL_ISSHOWNED = 'isShowned';
    const COL_TIME = 'time';
    const COL_CREATED_AT = 'created_at';
    const COL_UPDATED_AT = 'updated_at';
    
    
    const SEND_LIKE = 'liked you';
    const LIKE_COMMENT = 'liked your comment on';
    const LIKE_REPLY = 'liked your reply on';
    const REPLIED_COMMENT = 'replied on your comment on';
    const SENT_FRIEND_REQ = 'sent you a friend request';
 
    const NOTIFICATION_TYPE_LIKE = 'Like';
    const NOTIFICATION_TYPE_LIKE_COMMENT = 'Liked Comment on blog';
    const NOTIFICATION_TYPE_LIKE_REPLY = 'Liked Reply';
    const NOTIFICATION_TYPE_REPLY_COMMENT = 'Replied Comment on blog';
    const NOTIFICATION_TYPE_FRIEND_REQUEST = 'Friend';


    const SET_TO_UNREAD = 0;
    const SET_TO_READ = 1;

    /*
     * Eloquent Scopes
     */

    public function scopeById($query, $val) {
            $query->where('id', $val);
    }


    public function scopeByNotificationIdAndUserId($query, $val, $val2) {
        $query->where('id', $val)->where('userToNotify', $val2);
}

        public function scopeByUserId($query, $val) {
                $query->where('userToNotify', $val);
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

    public function getAdditionalInfo() {
        return $this->additionalInfo;
        }

        public function setAdditionalInfo($value) {
                $this->additionalInfo = $value;
        }

        public function getAdditionalAction() {
                return $this->additionalAction;
        }

        public function setAdditionalAction($value) {
                $this->additionalAction = $value;
        }
    public function getNotificationId() {
            return $this->id;
    }

    public function getMsg() {
            return $this->msg;
    }

    public function setMsg($value) {
            $this->msg = $value;
    }
    
    public function getLabel() {
            return $this->label;
        }

        public function setLabel($value) {
                $this->label = $value;
        }



    public function getUserToNotify() {
            return $this->userToNotify;
    }

    public function setUserToNotify($value) {
            $this->userToNotify = $value;
    }

    public function getUserWhoFiredEvent() {
            return $this->userWhoFiredEvent;
    }

    public function setUserWhoFiredEvent($value) {
            $this->userWhoFiredEvent = $value;
    }

    public function getIsViewed() {
            return intval($this->isViewed);
    }

    public function setIsViewed($value) {
            $this->isViewed = $value;
    }

    public function getIsShowned() {
            return intval($this->isShowned);
    }

    public function setIsShowned($value) {
            $this->isShowned = $value;
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
