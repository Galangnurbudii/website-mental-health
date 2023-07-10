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
            'jam_mulai' => $this->faker->randomElement(['10:00', '12:00', '14:00', '16:00']),
            'tanggal_selesai' => $this->faker->date(),
            'jam_selesai' => $this->faker->randomElement(['12:00', '14:00', '16:00', '18:00']),
        ];
    }
}