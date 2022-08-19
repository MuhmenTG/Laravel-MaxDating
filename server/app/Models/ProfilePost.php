<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProfilePost extends Model
{
    
    protected $table = 'profile_posts';
    protected $primaryKey = 'id';
//      protected $guarded = [];
//      protected $fillable = [];

    const COL_ID = 'id';
    const COL_POSTTEXT = 'postText';
    const COL_POSTEDBY = 'postedBy';
    const COL_POSTEDAT = 'postedAt';
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

    public function getProfilePostId() {
            return $this->id;
    }

    public function getPostText() {
            return $this->postText;
    }

    public function setPostText($value) {
            if (is_array($value)) $value = json_encode($value);
            $this->postText = $value;
    }

    public function getPostedBy() {
            return intval($this->postedBy);
    }

    public function setPostedBy($value) {
            $this->postedBy = $value;
    }

    public function getPostedAt() {
            return intval($this->postedAt);
    }

    public function setPostedAt($value) {
            $this->postedAt = $value;
    }

    public function getCreatedAt() {
            return $this->created_at;
    }

    public function getUpdatedAt() {
            return $this->updated_at;
    }
}
