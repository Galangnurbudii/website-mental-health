<?php

namespace Database\Seeders;

use App\Models\Psikolog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PsikologSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Psikolog::factory()->count(30)->create();
    }
}
