<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Psikolog>
 */
class PsikologFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = Faker::create('id_ID');
        $password = $faker->password;
        return [
            'nama' => $faker->name,
            'email' => $faker->unique()->safeEmail,
            'password' => bcrypt($password),
            'rating' => $faker->randomFloat(2, 1, 5),
            'bidang_keahlian' => $faker->text(20),
            'tahun_pengalaman' => $faker->numberBetween(1, 15),
            'nomor_str' => $faker-> numberBetween(1000000, 9999999),
            'lokasi_praktik' => $faker->address,
            'lulusan' => $faker->sentence
        ];
    }
}
