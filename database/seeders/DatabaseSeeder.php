<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(PsikologSeeder::class);
        $this->call(ArtikelSeeder::class);
        $this->call(QuoteSeeder::class);
        $this->call(PostSeeder::class);
        $this->call(TanggalTidakTersediaSeeder::class);
        $this->call(HargaLayananSeeder::class);
        // $this->call(JanjiSeeder::class);

    }
}