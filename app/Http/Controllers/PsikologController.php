<?php

namespace App\Http\Controllers;

use App\Models\Psikolog;
use App\Models\TanggalTidakTersedia;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class PsikologController extends Controller
{
    public function index()
    {
        $psikologs = Psikolog::all();
        return Inertia::render('AdminIndexPsikolog', ['psikologs' => $psikologs]);
    }

    public function jadwalKonsultasi()
    {

        $id_psikolog = Psikolog::where('id_user', '=', Auth::user()->id)->get()->first()->id;


        $list_janji = DB::table('janji')
            ->join('harga_layanan', 'janji.id_layanan', '=', 'harga_layanan.id')
            ->join('psikolog', 'harga_layanan.id_psikolog', '=', 'psikolog.id')
            ->where('janji.id_user', '=', $id_psikolog)
            ->select('janji.*', 'harga_layanan.*', 'psikolog.*')
            ->get();
        return Inertia::render('JadwalKonsultasi', ['list_janji' => $list_janji]);

    }

    public function dashboardPsikolog()
    {
        $id_psikolog = Psikolog::where('id_user', '=', Auth::user()->id)->get()->first()->id;
        $list_janji = DB::table('janji')
            ->join('harga_layanan', 'janji.id_layanan', '=', 'harga_layanan.id')
            ->join('psikolog', 'harga_layanan.id_psikolog', '=', 'psikolog.id')
            ->where('harga_layanan.id_psikolog', '=', $id_psikolog)
            ->select('janji.*', 'harga_layanan.*', 'psikolog.*')
            ->get();

        // dd($list_janji);
        return Inertia::render('DashboardPsikolog', ['list_janji' => $list_janji]);
    }

    public function create()
    {
        return Inertia::render('AdminCreatePsikolog');
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'rating' => 'required',
            'bidang_keahlian' => 'required',
            'tahun_pengalaman' => 'required',
            'nomor_str' => 'required',
            'negara' => 'required',
            'provinsi' => 'required',
            'kota' => 'required',
            'lulusan' => 'required'
        ])->validate();

        $user = User::where('email', $request->email)->first();
        // dd($user->id);

        if ($user) {
            $psikolog = Psikolog::create([
                'nama' => $request->nama,
                'rating' => $request->rating,
                'bidang_keahlian' => $request->bidang_keahlian,
                'tahun_pengalaman' => $request->tahun_pengalaman,
                'nomor_str' => $request->nomor_str,
                'negara' => $request->negara,
                'provinsi' => $request->provinsi,
                'kota' => $request->kota,
                'lulusan' => $request->lulusan,
                'foto_profil' => '/images/detailPsikolog.jpg',
                'id_user' => $user->id
            ]);

            $user->role = 'psikolog';
            $user->update();
        } else {
            return response()->json(['error' => 'Pengguna dengan email yang cocok tidak ditemukan']);
        }

        // Psikolog::create($request->all());
        return redirect()->route('psikologs.index');
    }

    public function edit($psikologs)
    {
        $psikolog = Psikolog::find($psikologs);
        $user = User::where('id', $psikolog->id_user)->first();
        return Inertia::render('AdminEditPsikolog', [
            'psikologs' => $psikolog,
            'email' => $user->email
        ]);
    }

    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'rating' => 'required',
            'bidang_keahlian' => 'required',
            'tahun_pengalaman' => 'required',
            'nomor_str' => 'required',
            'negara' => 'required',
            'provinsi' => 'required',
            'kota' => 'required',
            'lulusan' => 'required'
        ])->validate();

        $psikolog = Psikolog::find($id);
        $user = User::where('email', $request->email)->first();

        if ($user) {
            $psikolog->update([
                'nama' => $request->nama,
                'rating' => $request->rating,
                'bidang_keahlian' => $request->bidang_keahlian,
                'tahun_pengalaman' => $request->tahun_pengalaman,
                'nomor_str' => $request->nomor_str,
                'negara' => $request->negara,
                'provinsi' => $request->provinsi,
                'kota' => $request->kota,
                'lulusan' => $request->lulusan,
                'foto_profil' => '/images/detailPsikolog.jpg',
                'id_user' => $user->id
            ]);
        } else {
            return response()->json(['error' => 'Pengguna dengan email yang cocok tidak ditemukan']);
        }

        return redirect()->back();
    }

    public function destroy($id)
    {
        $psikolog = Psikolog::find($id);

        // dd($user);
        if ($psikolog) {
            $user = User::where('id', $psikolog->id_user)->first();
            if ($user) {
                $user->role = 'user';
                $user->update();
            }
            $psikolog->delete();
        }
        return redirect()->route('psikologs.index');
    }

    public function getDataFromPsikolog()
    {
        $id = Auth::user()->id;

        $psikolog = Psikolog::where('id_user', $id)->first();
        // dd($psikolog);

        if ($psikolog) {
            return Inertia::render('AturKetersediaan', ['psikolog' => $psikolog]);
        } else {
            return response()->json(['error' => 'Psikolog tidak ditemukan']);
        }
    }

    public function tanggalTakTersedia(Request $request)
    {
        // dd($request);
        $tanggaltidaktersedia = TanggalTidakTersedia::create([
            'id_psikolog' => $request->id_psikolog,
            'tanggal_mulai' => $request->tanggal_mulai,
            'tanggal_selesai' => $request->tanggal_selesai
        ]);

        return redirect()->route('dashboardpsikolog');
    }
}