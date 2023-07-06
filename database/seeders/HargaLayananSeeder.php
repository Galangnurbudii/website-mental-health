<?php

namespace Database\Seeders;

use App\Models\HargaLayanan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HargaLayananSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        HargaLayanan::factory()->count(30)->create();
    }
}