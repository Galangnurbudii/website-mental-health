<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use App\Models\Quote;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $articles = Artikel::all()->random(3);
        $quote = Quote::all()->random(1);
        return Inertia::render('Home', ['articles' => $articles, 'quote' => $quote]);
    }
}