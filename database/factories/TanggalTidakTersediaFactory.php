<?php

namespace Database\Factories;

use App\Models\Psikolog;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TanggalTidakTersedia>
 */
class TanggalTidakTersediaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition()
    {
        $faker = Faker::create();
        return [
            'id_psikolog' => Psikolog::inRandomOrder()->first()->id,
            'tanggal_mulai' => $this->faker->date(),
            'tanggal_selesai' => $this->faker->date(),
        ];
    }
}