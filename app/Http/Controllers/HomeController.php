<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use App\Models\Quote;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {   
        $articles = Artikel::inRandomOrder()->limit(3)->get();
        $quote = Quote::inRandomOrder()->first();
        // dd($quote);
        return Inertia::render('Home', ['articles' => $articles, 'quote' => $quote]);
    }
}