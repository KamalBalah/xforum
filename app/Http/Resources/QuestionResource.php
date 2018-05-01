<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'path'=>$this->path,
            'body'=>$this->body,
            'created_at'=>$this->created_at->diffForHumans(),
            'category'=>\App\Category::find($this->category_id)->name,
            'user'=>$this->user->name,
            'replies'=>[
              'feed'=>ReplyResouce::collection($this->replies),
              'rows'=>$this->replies->count(),
            ],

        ];
    }
}
