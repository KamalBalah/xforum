<?php

use Faker\Generator as Faker;

$factory->define(App\Question::class, function (Faker $faker) {
    $title=$faker->sentence;
    return [
        'title' =>$title,
        'slug'=>str_slug($title),
        'body'=>$faker->text,
        'category_id'=>App\Category::all()->random(),
        'user_id'=>App\User::all()->random(),
    ];
});
