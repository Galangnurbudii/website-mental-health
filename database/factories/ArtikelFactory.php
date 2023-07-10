<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;
use GuzzleHttp\Client;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Artikel>
 */
class ArtikelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = Faker::create('id_ID');


        return [
            'judul' => '',
            'tag' => $faker->text(10),
            'detail' => $faker->paragraphs(10, true),
            'id_user' => User::where('role', 'admin')->inRandomOrder()->first()->id,
            'thumbnail_url' => '',

        ];
    }
}