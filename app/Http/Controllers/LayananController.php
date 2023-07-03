<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Psikolog;
use Inertia\Inertia;

class LayananController extends Controller
{
    public function layanan($id){
        $psikolog = Psikolog::find($id);
        return Inertia::render('DetailLayanan', ['psikolog' => $psikolog]);
    }
}
