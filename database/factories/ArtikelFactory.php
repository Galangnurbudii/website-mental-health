<?php

namespace Database\Factories;

use App\Models\Admin;
use App\Models\Psikolog;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;

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
            'judul' => $faker->sentence,
            'tag' => $faker->text(10),
            'detail' => $faker->paragraphs(5, true),
            'id_admin' => Admin::inRandomOrder()->first()->id,
            'id_psikolog' => Psikolog::inRandomOrder()->first()->id
        ];
    }
}
