<?php

namespace App\Http\Controllers;

use App\Factories\CommentFactory;
use App\Factories\NotificationFactory;
use App\Factories\UserFactory;
use App\Models\Blog;
use App\Models\Comment;
use App\Models\CommentReply;
use App\Models\LikeComment;
use App\Models\Notification;
use App\Models\UserInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    //

    public function writeComment(Request $request){
        $validator = Validator::make($request->all(), [
            'userId'           => 'required|int',
            'blogId'           => 'required|int',
            'commentMessage'   => 'required|string',
        ]);

        if($validator->fails()) {
            return $this->sendError("Validation failed", $validator->errors());
        }

        $userId = intval($request->input('userId'));
        $user = UserInformation::ByUserId($userId)->first();

        if(!$user){
            return $this->sendError($user, "User not found");
        }

        $blogId = intval($request->input('blogId'));
        $blog = Blog::byId($blogId)->first();

        if(!$blog){
            return $this->sendError($blog, "Blog not found");
        }

        $commentMessage = $request->input('commentMessage');

        $comment = new Comment();
        $comment->setUserId($userId);
        $comment->setBlogId($blogId);
        $comment->setDate(time());
        $comment->setCommentMessage($commentMessage);

        if($comment->save()){
            return $this->sendSuccessResponse($comment, "comment added", 200);
        }
    }

    public function writeReply(Request $request){
        $validator = Validator::make($request->all(), [
            'userId'           => 'required|int',
            'parentCommentId'  => 'required|int',
            'blogId'           => 'required|int',
            'commentMessage'   => 'required|string',
        ]);

        if($validator->fails()) {
            return $this->sendError("Validation failed", $validator->errors());
        }

        $userId = intval($request->input('userId'));
        $parentCommentId = intval($request->input('parentCommentId'));
        $blogId = intval($request->input('blogId'));
        $commentMessage = $request->input('commentMessage');
 
        $comment = Comment::byId($parentCommentId)->where(Comment::COL_BLOGID, $blogId)->first();
        if(!$comment){
            return $this->sendError($comment, "Comment to reply not found");
        }

        $CommentReply = new CommentReply();
        $CommentReply->setUserId($userId);
        $CommentReply->setParentCommentId($parentCommentId);
        $CommentReply->setBlogId($blogId);
        $CommentReply->setCommentMessage($commentMessage);

        if($CommentReply->save()){
            NotificationFactory::createNotification(Notification::NOTIFICATION_TYPE_REPLY_COMMENT, Notification::REPLIED_COMMENT, $comment->getUserId(), $userId, $blogId);
            return $this->sendSuccessResponse($CommentReply, "Reply added", 200);
        }

      
    }

    public function removeReply($userId, $commentReplyId)
    {
        $userId = intval($userId);
        $commentReplyId = intval($commentReplyId);

        $CommentReply = CommentReply::ByCommentIdAndUserId($commentReplyId, $userId)->first();
        if($CommentReply){
            $CommentReply->delete();
        }

        CommentFactory::removeLikesOfParticularComment($commentReplyId);

        return $this->sendSuccessResponse($CommentReply, "comment deleted", 200);
    }

    public function editComment(Request $request){
        $validator = Validator::make($request->all(), [
            'userId'           => 'required|int',
            'commentId'        => 'required|int',
            'commentMessage'   => 'required|string',
        ]);

        if($validator->fails()) {
            return $this->sendError("Validation failed", $validator->errors());
        }

        $userId = intval($request->input('userId'));
        $commentMessage = $request->input('commentMessage');
        $commentId = intval($request->input('commentId'));

        $comment = Comment::ByCommentIdAndUserId($commentId, $userId)->first();
        if($comment){
            $comment->setCommentMessage($commentMessage);
            $comment->save();
        }

        return $this->sendSuccessResponse($comment, "comment edited", 200);
    }

    public function removeComment($userId, $commentId){
        $userId = intval($userId);
        $commentId = intval($commentId);

        $comment = Comment::ByCommentIdAndUserId($commentId, $userId)->first();
        if($comment){
            $comment->delete();
        }

        CommentFactory::removeLikesOfParticularComment($commentId);

        return $this->sendSuccessResponse($comment, "comment deleted", 200);
    }

    public function createCommentLike(Request $request){
        $validator = Validator::make($request->all(), [
            'userId'           => 'required|int',
            'commentId'        => 'required|int',
            'blogId'           => 'required|int'
        ]);

        if($validator->fails()) {
            return $this->sendError("Validation failed", $validator->errors());
        }

        $userId = intval($request->input('userId'));
        $commentId = intval($request->input('commentId'));
        $blogId = intval($request->input('blogId'));

        $comment = Comment::ById($commentId)->first();
        if(!$comment){
            return $this->sendError("Comment to like not found");
        }

        $alreadyLiked = LikeComment::ByUserLikerIdAndCommentIdAndBlogId($userId, $commentId, $blogId)->where(LikeComment::COL_LIKE_TYPE, LikeComment::LIKED_COMMENT)->first();

        if($alreadyLiked){
            $alreadyLiked->delete();
            return $this->sendSuccessResponse($alreadyLiked, "unliked", 200);
        }

        $alreadyLiked = new LikeComment();
        $alreadyLiked->setCommentId($commentId);
        $alreadyLiked->setBlogId($blogId);
        $alreadyLiked->setUserId($userId);
        $alreadyLiked->setLikeType(LikeComment::LIKED_COMMENT);
        $alreadyLiked->save();

        NotificationFactory::createNotification(Notification::NOTIFICATION_TYPE_LIKE_COMMENT, Notification::LIKE_COMMENT, $comment->getUserId(), $userId, $blogId);


        return $this->sendSuccessResponse($alreadyLiked, "liked", 200);
    }

    public function createRepliyLike(Request $request){
        $validator = Validator::make($request->all(), [
            'userId'           => 'required|int',
            'replyCommentId'   => 'required|int',
            'blogId'           => 'required|int'
        ]);

        if($validator->fails()) {
            return $this->sendError("Validation failed", $validator->errors());
        }

        $userId = intval($request->input('userId'));
        $commentId = intval($request->input('replyCommentId'));
        $blogId = intval($request->input('blogId'));

        $comment = CommentReply::ById($commentId)->first();
        if(!$comment){
            return $this->sendError("Reply to like not found");
        }

        $alreadyLiked = LikeComment::ByUserLikerIdAndCommentIdAndBlogId($userId, $commentId, $blogId)->where(LikeComment::COL_LIKE_TYPE, LikeComment::LIKED_COMMENT)->first();

        if($alreadyLiked){
            $alreadyLiked->delete();
            return $this->sendSuccessResponse($alreadyLiked, "unliked", 200);
        }

        $alreadyLiked = new LikeComment();
        $alreadyLiked->setCommentId($commentId);
        $alreadyLiked->setBlogId($blogId);
        $alreadyLiked->setUserId($userId);
        $alreadyLiked->setLikeType(LikeComment::LIKED_REPLY);
        $alreadyLiked->save();

        NotificationFactory::createNotification(Notification::NOTIFICATION_TYPE_LIKE_REPLY, Notification::LIKE_REPLY, $userId, $comment->getUserId(), $blogId);


        return $this->sendSuccessResponse($alreadyLiked, "liked", 200);
    }

    public function getAllLikesOfSpeceficComment($commentId, $blogId){
        $likesOfComment = CommentFactory::getLikesOfSpecificComment($commentId, LikeComment::LIKED_COMMENT, $blogId);
        if($likesOfComment){
            return $this->sendSuccessResponse($likesOfComment, "likes of comment", 200);
        }
        return null;
    }

    public function getAllLikesOfSpeceficReply($commentId, $blogId){
        $likesOfComment = CommentFactory::getLikesOfSpecificComment($commentId, LikeComment::LIKED_REPLY, $blogId);
        if($likesOfComment){
            return $this->sendSuccessResponse($likesOfComment, "likes of repliy" , 200);
        }
        return null;
    }

    public function retriveAllBlogs()
    {
        $allblogs = Blog::all();
        $blogs = [];
        foreach ($allblogs as $blog) {
            $users = UserFactory::getUserById($blog->getUserId()); 
            foreach ($users as $user) {
                $data = array(
                "blog" => $blog,
                "author" => array(
                    "authorId" => $blog->getUserId(), 
                    "firstName" => $user->getFirstName(), 
                    "lastName" => $user->getLastName()
                )
                );
                array_push($blogs, $data);
            }
            
        }
        return $this->sendSuccessResponse($blogs, "blogs", 200);
    }
    
    public function retriveSpecificBlog($blogId)
    {
        $blog = Blog::ById($blogId)->first();
        $data = array(
            "blogId" => $blog->getBlogId(), 
            "blogUserId" => $blog->getUserId(), 
            "blogHeading" => $blog->getHeading(), 
            "blogShortDescription" => $blog->getShortDescription(),
            "blogLongDescription" => $blog->getLongDescription(),
            'blogAuthorName' => UserFactory::getUserFullName($blog->getUserId()),
            "comments" => $this->retriveSpecificBlogComments($blog->getBlogId()));
        return $this->sendSuccessResponse($data, "blog", 200);

    }

    public function retriveSpecificBlogComments(int $blogId){
        $comments = Comment::ByBlogId($blogId)->get();
        $commentsData = [];
        foreach($comments as $comment)
        { 
            array_push($commentsData, $this->retriveSpecificBlogComment($comment->getCommentId(), $blogId));  
        }
        return $commentsData;
    }

    public function retriveSpecificBlogComment(int $commentId, int $blogId){
        $comment = Comment::ById($commentId)->get();
        return array(
            "commentId" => $commentId,
            "commment" => $comment[0][Comment::COL_COMMENTMESSAGE],
            "commentDate" =>  $comment[0][Comment::COL_DATE],
            "commentAuthorId" => $comment[0][Comment::COL_USERID],
            "commentAuthorName" =>  UserFactory::getUserFullName($comment[0][Comment::COL_USERID]),
            "commentLikes" => CommentFactory::getLikesOfSpecificComment($commentId, LikeComment::LIKED_COMMENT, $blogId),
            "commentReplies" =>  CommentFactory::getRepliesOfSpecificComment($commentId, $blogId),
        );
       
    }




}
