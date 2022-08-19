<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    
    protected $table = 'comments';
    protected $primaryKey = 'id';
//      protected $guarded = [];
//      protected $fillable = [];

    const COL_ID = 'id';
    const COL_USERID = 'userId';
    const COL_BLOGID = 'blogId';
    const COL_DATE = 'date';
    const COL_COMMENTMESSAGE = 'commentMessage';
    const COL_CREATED_AT = 'created_at';
    const COL_UPDATED_AT = 'updated_at';

    /*
     * Eloquent Scopes
     */

    public function scopeById($query, $val) {
            $query->where('id', $val);
    }

    public function scopeByBlogId($query, $val) {
        $query->where('blogId', $val);
}

    public function scopeByCommentIdAndUserId($query, $val, $val2) {
        $query->where('id', $val)->where('userId', $val2);
}

    /*
     * GET / SET
     */

    public function getCommentId() {
            return $this->id;
    }
    



    public function getUserId() {
            return intval($this->userId);
    }

    public function setUserId($value) {
            $this->userId = $value;
    }

    public function getBlogId() {
            return intval($this->blogId);
    }

    public function setBlogId($value) {
            $this->blogId = $value;
    }

    public function getDate() {
            return intval($this->date);
    }

    public function setDate($value) {
            $this->date = $value;
    }

    public function getCommentMessage() {
            return $this->commentMessage;
    }

    public function setCommentMessage($value) {
            $this->commentMessage = $value;
    }

    public function getCreatedAt() {
            return $this->created_at;
    }

    public function getUpdatedAt() {
            return $this->updated_at;
    }

}
