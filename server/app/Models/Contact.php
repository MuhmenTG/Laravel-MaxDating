<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    
        protected $table = 'contact';
        protected $primaryKey = 'id';
//      protected $guarded = [];
//      protected $fillable = [];

        const COL_ID = 'id';
        const COL_FIRSTNAME = 'firstName';
        const COL_EMAIL = 'email';
        const COL_SUBJECT = 'subject';
        const COL_PHONE = 'phone';
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

        public function getContactId() {
                return $this->id;
        }

        public function getFirstName() {
                return $this->firstName;
        }

        public function setFirstName($value) {
                $this->firstName = $value;
        }

        public function getEmail() {
                return $this->email;
        }

        public function setEmail($value) {
                $this->email = $value;
        }

        public function getSubject() {
                return $this->subject;
        }

        public function setSubject($value) {
                $this->subject = $value;
        }

        public function getPhone() {
                return $this->phone;
        }

        public function setPhone($value) {
                $this->phone = $value;
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
