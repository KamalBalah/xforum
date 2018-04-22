<?php

namespace App\Http\Controllers;

use App\Like;
use App\Reply;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('JWT');
    }

    public function like(Reply $reply)
    {


        if (Like::where([
            'reply_id'=>$reply->id,
            'user_id'=>1
        ])->count()>0)
        {
            $reply->like()->delete();
        }
        else
        {
            $reply->like()->create(['user_id'=>1]);
        }
        return response('Done',Response::HTTP_ACCEPTED);

    }





}
