<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    //
    public function index()
    {
        $articles = Artikel::inRandomOrder()->get();
        $popular = $articles->random(1);
        $topik_terkini = $articles->flatMap(function ($article) {
            return explode(',', $article->tag);
        })->unique()->take(5);
        return Inertia::render('Article', [
            'popular' => $popular,
            'articles' => $articles,
            'topik_terkini' => $topik_terkini
        ]);
    }

    public function detail($id)
    {
        $article = Artikel::find($id);

        return Inertia::render('ArticleDetail', ['article' => $article]);
    }
}