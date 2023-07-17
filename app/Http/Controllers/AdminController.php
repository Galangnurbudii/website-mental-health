<?php

namespace App\Http\Controllers;

use App\Models\Janji;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    //
    public function index()
    {
        $list_janji = Janji::select('janji.id', 'users.name', 'janji.tanggal', 'janji.jam', 'psikolog.nama', 'harga_layanan.jenis_layanan', 'janji.payment_status', 'janji.payment_link')
            ->join('users', 'janji.id_user', '=', 'users.id')
            ->join('harga_layanan', 'janji.id_layanan', '=', 'harga_layanan.id')
            ->join('psikolog', 'harga_layanan.id_psikolog', '=', 'psikolog.id')
            ->get();

        // dd($list_janji);

        return Inertia::render('DashboardAdmin', [
            'list_janji' => $list_janji,
        ]);

    }
}