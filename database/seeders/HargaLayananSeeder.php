<?php

namespace Database\Seeders;

use App\Models\HargaLayanan;
use App\Models\Psikolog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
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

        $datas = [];
        $jenis = ['offline', 'online'];

        $psikologs = Psikolog::all();
        foreach ($psikologs as $psikolog) {
            foreach ($jenis as $type) {
                $data = [
                    'id_psikolog' => $psikolog->id,
                    'jenis_layanan' => $type,
                    'harga' => mt_rand(100000 * 10, 1000000 * 10) / 10
                ];
                array_push($datas, $data);
            }
        }

        HargaLayanan::factory()->count(count($datas))->state(new Sequence(...$datas))->create();
    }
}