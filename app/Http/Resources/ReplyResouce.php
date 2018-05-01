<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReplyResouce extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'reply'=>$this->body,
            'question'=>$this->question->title,
            'user'=>$this->user->name,
            'likes'=>[
              'feed'=>$this->like,
              'rows'=>$this->like->count(),
            ],
            'created_at'=>$this->created_at->diffForHumans()
        ];
    }
}
