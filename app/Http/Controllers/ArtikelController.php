<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    //

    public function index()
    {
        $articles = Artikel::inRandomOrder()->get();
        $popular = $articles->random(1)->first();
        $topik_terkini = $articles->flatMap(function ($article) {
            return explode(',', $article->tag);
        })->unique()->take(5);
        // dd($topik_terkini);
        return Inertia::render('Article', [
            'popular' => $popular,
            'articles' => $articles,
            'topik_terkini' => $topik_terkini
        ]);
    }



    public function detail($id)
    {
        $article = Artikel::find($id);
        $topik_terkini = Artikel::all()->flatMap(function ($article) {
            return explode(',', $article->tag);
        })->unique()->take(5);

        $other_article = Artikel::inRandomOrder()
            ->limit(3)
            ->get();

        return Inertia::render('ArticleDetail', ['article' => $article, 'topik_terkini' => $topik_terkini, 'other_article' => $other_article]);
    }
}