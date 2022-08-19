<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = 'blogs';
    protected $primaryKey = 'id';
//      protected $guarded = [];
//      protected $fillable = [];

    const COL_ID = 'id';
    const COL_USERID = 'userId';
    const COL_HEADING = 'heading';
    const COL_CREATEDDATE = 'createdDate';
    const COL_SHORTDESCRIPTION = 'shortDescription';
    const COL_LONGDESCRIPTION = 'longDescription';
    const COL_SHOWBLOG = 'showBlog';
    const COL_CREATED_AT = 'created_at';
    const COL_UPDATED_AT = 'updated_at';

    /*
     * Eloquent Scopes
     */
    
    public function user()
    {
        return $this->belongsTo(User::class)->withDefault();

    }

    public function scopeById($query, $val) {
            $query->where('id', $val);
    }

    /*
     * GET / SET
     */

    public function getBlogId() {
            return $this->id;
    }

    public function getUserId() {
            return intval($this->userId);
    }

    public function setUserId($value) {
            $this->userId = $value;
    }

    public function getHeading() {
            return $this->heading;
    }

    public function setHeading($value) {
            $this->heading = $value;
    }

    public function getCreatedDate() {
            return intval($this->createdDate);
    }

    public function setCreatedDate($value) {
            $this->createdDate = $value;
    }

    public function getShortDescription() {
            return $this->shortDescription;
    }

    public function setShortDescription($value) {
            $this->shortDescription = $value;
    }

    public function getLongDescription() {
            return $this->longDescription;
    }

    public function setLongDescription($value) {
            $this->longDescription = $value;
    }

    public function getShowBlog() {
            return intval($this->showBlog);
    }

    public function setShowBlog($value) {
            $this->showBlog = $value;
    }

    public function getCreatedAt() {
            return $this->created_at;
    }

    public function getUpdatedAt() {
            return $this->updated_at;
    }
}
