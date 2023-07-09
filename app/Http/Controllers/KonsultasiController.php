<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class KonsultasiController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Konsultasi');
    }

    public function layanan()
    {
        return Inertia::render('Layanan');
    }

    public function detailLayanan()
    {
        return Inertia::render('DetailLayanan');
    }

    public function payment()
    {
        return Inertia::render('Payment');
    }
}