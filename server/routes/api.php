<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FriendshipController;
use App\Http\Controllers\NotificationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register-user', [AuthController::class, 'registerUser']);

//User interaction
Route::post('/like-user', [FriendshipController::class, 'createPersonLike']);
Route::get('/fetchOutgoingLikes/{userId}', [FriendshipController::class, 'getOutgoingLikes']);
Route::get('/fetchIncomingLikes/{userId}', [FriendshipController::class, 'getInComingLikes']);

//Comment
Route::post('/create-comment', [CommentController::class, 'writeComment']);
Route::post('/edit-comment', [CommentController::class, 'editComment']);
Route::delete('/remove-comment/{userId}/{commentId}', [CommentController::class, 'removeComment']);
Route::post('/create-CommentLike', [CommentController::class, 'createCommentLike']);
Route::post('/create-CommentReplyLike', [CommentController::class, 'createRepliyLike']);
Route::get('/getAllLikesOfComment/{commentId}/{BlogId}', [CommentController::class, 'getAllLikesOfSpeceficComment']);
Route::get('/getAllLikesOfReply/{commentId}/{blogId}', [CommentController::class, 'getAllLikesOfSpeceficReply']);
Route::post('/create-CommentReply', [CommentController::class, 'writeReply']);
Route::delete('/remove-commentReply/{userId}/{commentReplyId}', [CommentController::class, 'removeReply']);

Route::get('/allBlogs', [CommentController::class, 'retriveAllBlogs']);
Route::get('/getBlog/{blogId}', [CommentController::class, 'retriveSpecificBlog']);


//Notifation
Route::delete('/remove-notifi/{userId}/{notificationId}', [NotificationController::class, 'removeNotification']);
Route::post('/markNotficationStatus', [NotificationController::class, 'markNotficationStatus']);
Route::get('/getAllNotfication/{userId}', [NotificationController::class, 'getAllNotifications']);
Route::get('/getAllReadNotfication/{userId}', [NotificationController::class, 'getReadNotifications']);
Route::get('/getAllUnreadNotfication/{userId}', [NotificationController::class, 'getUnreadNotifications']);

//Friends
Route::post('/sent-friend-request',[FriendshipController::class, 'sendFriendRequest']);
Route::delete('/deleteFriendRequest/{FriendRequestId}/{userId}' ,[FriendshipController::class, 'deleteFriendRequest']);
Route::post('/changeFriendRequestStatus', [FriendshipController::class, 'changeFriendRequestStatus']);
Route::delete('/removeAsFriend/{userId}/{friendId}' ,[FriendshipController::class, 'unFriendUser']);
Route::get('/getAllUsersFriend/{userId}', [FriendshipController::class, 'getAllFriends']);

Route::get('/getPendingReceivedFriendRequests/{userId}', [FriendshipController::class, 'getPendingReceivedFriendRequests']);
Route::get('/getSentFriendRequests/{userId}', [FriendshipController::class, 'getSentFriendRequests']);

Route::get('/getMutalFriends/{userId}/{friendId}' ,[FriendshipController::class, 'returnMutualFrindsList']);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});