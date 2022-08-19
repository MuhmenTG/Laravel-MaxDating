<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LikeMatch extends Model
{
    
    protected $table = 'like_matchs';
    protected $primaryKey = 'id';
//      protected $guarded = [];
//      protected $fillable = [];

    const COL_ID = 'id';
    const COL_LIKEDBY = 'likedBy'; //2
    const COL_LIKED = 'liked'; //1
    const COL_TIME = 'time';
    const COL_CREATED_AT = 'created_at';
    const COL_UPDATED_AT = 'updated_at';

    /*
     * Eloquent Scopes
     */

    public function scopeById($query, $val) {
            $query->where('id', $val);
    }

    public function scopeBylikedByUserId($query, $val) {
        $query->where('likedBy', $val);
}

        public function scopeByliked($query, $val) {
                $query->where('liked', $val);
        }


    public function scopeFromTime($query, $val) {
            $query->where('time', '>=', $val);
    }

    public function scopeToTime($query, $val) {
            $query->where('time', '<', $val);
    }

    public function scopeBylikedByIdAndLikeId($query, $val1, $val2) {
        $query->where('likedBy', $val1)->where('liked', $val2);
        }



    /*
     * GET / SET
     */

    public function getLikeMatchId() {
            return $this->id;
    }

    public function getLikedBy() {
            return intval($this->likedBy);
    }

    public function setLikedBy($value) {
            $this->likedBy = $value;
    }

    public function getLiked() {
            return intval($this->liked);
    }

    public function setLiked($value) {
            $this->liked = $value;
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
