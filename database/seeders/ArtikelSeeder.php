<?php

namespace Database\Seeders;

use App\Models\Artikel;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class ArtikelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $topics = [
            'Stres',
            'Bunuh Diri',
            'Kesehatan Mental',
            'Kecemasan',
            'Depresi'
        ];
        $nextPage = '';

        $datas = [];

        for ($i = 0; $i < 3; $i++) {
            $content = file_get_contents('https://newsdata.io/api/1/news?country=gb&category=health&apikey=pub_25785f51de4dcbbd8890a3def7d71a23c617a&page=' . $nextPage);
            $content = json_decode($content);
            $results = $content->results;
            $nextPage = $content->nextPage;
            foreach ($results as $result) {
                $data = [
                    'judul' => $result->title,
                    'tag' => $topics[array_rand($topics)],
                    'detail' => $result->content ?? 'Empty',
                    'id_user' => User::inRandomOrder()->first()->id,
                    'thumbnail_url' => $result->image_url ?? 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
                ];
                array_push($datas, $data);
            }

        }

        Artikel::factory()->count(30)->state(new Sequence(...$datas))->create();
    }
}