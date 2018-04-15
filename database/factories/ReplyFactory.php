<?php

use Faker\Generator as Faker;

$factory->define(App\Reply::class, function (Faker $faker) {
    return [
        'body'=>$faker->text,
        'question_id'=>App\Question::all()->random(),
        'user_id'=>App\User::all()->random(),
    ];
});
