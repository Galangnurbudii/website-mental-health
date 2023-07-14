<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Psikolog;
use Inertia\Inertia;

class LayananController extends Controller
{   
    public function index(){
        $psikologs = Psikolog::paginate(3);
        return Inertia::render('DetailLayanan', ['psikologs' => $psikologs]);
    }
    
    public function layanan($id){
        $psikolog = Psikolog::find($id);
        return Inertia::render('Payment', ['psikolog' => $psikolog]);
    }
}
