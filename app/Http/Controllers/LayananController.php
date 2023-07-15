<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Psikolog;
use Inertia\Inertia;

class LayananController extends Controller
{
    public function layanan()
    {
        $psikologs = Psikolog::all();
        return Inertia::render('DetailLayanan');
    }

    public function search()
    {

    }
}