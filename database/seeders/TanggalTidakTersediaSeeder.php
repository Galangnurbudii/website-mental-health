<?php

namespace Database\Seeders;

use App\Models\TanggalTidakTersedia;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TanggalTidakTersediaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        TanggalTidakTersedia::factory()->count(5)->create();
    }
}