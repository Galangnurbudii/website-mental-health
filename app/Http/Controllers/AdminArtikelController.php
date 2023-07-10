<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminArtikelController extends Controller
{
    public function index()
    {
        $artikel = Artikel::all();
        return Inertia::render('AdminIndexArtikel', ['artikels' => $artikel]);
    }

    public function create()
    {
        return Inertia::render('AdminCreateArtikel');
    }

    public function destroy($id)
    {
        $artikel = Artikel::find($id);
        // dd($artikel);
        if ($artikel) {
            $artikel->delete();
        }
        return redirect()->route('artikels.index');
    }
}
