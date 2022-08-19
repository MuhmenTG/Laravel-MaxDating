<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LikeComment extends Model
{
    
    protected $table = 'like_comments';
    protected $primaryKey = 'id';
//      protected $guarded = [];
//      protected $fillable = [];

    const COL_ID = 'id';
    const COL_USERID = 'userId';
    const COL_BLOGID = 'blogId';
    const COL_LIKE_TYPE = 'like_type';
    const COL_COMMENTID = 'commentId';
    const COL_CREATED_AT = 'created_at';
    const COL_UPDATED_AT = 'updated_at';
    const LIKED_COMMENT = 'comment';
    const LIKED_REPLY = 'reply';
    
    /*
     * Eloquent Scopes
     */

    public function scopeById($query, $val) {
            $query->where('id', $val);
    }

    public function scopeByCommentId($query, $val) {
        $query->where('commentId', $val);
        }

    public function scopeByUserLikerIdAndCommentIdAndBlogId($query, $val, $val1, $val2) {
        $query->where('userId', $val)->where('commentId', $val1)->where('blogId',  $val);
}


    /*
     * GET / SET
     */



    public function getLikeId() {
        return intval($this->id);
}

    public function getUserId() {
            return intval($this->userId);
    }

    public function setUserId($value) {
            $this->userId = $value;
    }

    public function getCommentId() {
            return intval($this->commentId);
    }

    public function setCommentId($value) {
            $this->commentId = $value;
    }

    public function setBlogId($value) {
        $this->blogId = $value;
    }

        public function getBlogId() {
                return intval($this->blogId);
        }

        public function getLikeType() {
                return $this->like_type;
        }

        public function setLikeType($value) {
                $this->like_type = $value;
        }

    public function getCreatedAt() {
            return $this->created_at;
    }

    public function getUpdatedAt() {
            return $this->updated_at;
    }

}
