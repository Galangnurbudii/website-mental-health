<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Psikolog;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Janji>
 */
class JanjiFactory extends Factory
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
            'id_user' => User::inRandomOrder()->first()->id,
            'tanggal' => $this->faker->date(),
            'jam' => $this->faker->randomElement(['10:00', '12:00', '14:00', '16:00']),
        ];
    }
}