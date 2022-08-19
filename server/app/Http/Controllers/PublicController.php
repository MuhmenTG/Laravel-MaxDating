<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PublicController extends Controller
{
    public function contactTable(Request $request){
        $validator = Validator::make($request->all(), [
            'name'                => 'required|string',
            'email'               => 'required|string',
            'subject'             => 'required|string',
            'telephone'           => 'required|string',
            'message'             => 'required|string',

        ]);

        if($validator->fails()) {
            return $this->sendError("Validation failed", $validator->errors());
        }

        $name = $request->input('name');
        $email = $request->input('email');
        $subject = $request->input('subject');
        $telephone = $request->input('telephone');
        $message = $request->input('message');

        $contact = new Contact();
        $contact->setFirstName($name);
        $contact->setEmail($email);
        $contact->setSubject($subject);
        $contact->setPhone($telephone);
        $contact->setMessage($message);
        $contact->save();
    }
}
