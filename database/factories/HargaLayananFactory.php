<?php

namespace Database\Factories;

use App\Models\Psikolog;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Factory>
 */
class HargaLayananFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'id_psikolog' => Psikolog::inRandomOrder()->first()->id,
            'jenis_layanan' => $this->faker->randomElement(['offline', 'online']),
            'harga' => $this->faker->randomFloat(2, 10, 1000),
        ];
    }
}