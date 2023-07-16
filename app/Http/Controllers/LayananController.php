<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Psikolog;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class LayananController extends Controller
{
    public function layanan()
    {
        $psikologs = Psikolog::all();
        return Inertia::render('DetailLayanan');
    }

    public function filter(Request $request)
    {

        if ($request->type == 'offline') {
            $validator = Validator::make($request->all(), [
                'provinsi' => 'required',
                'kabupaten' => 'required',
                'jam' => 'required',
                'tanggal' => 'required',

            ]);
            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            } else {
                $provinsi = $request->provinsi;
                $kabupaten = $request->kabupaten;
                $jam = $request->jam;
                $tanggal = $request->tanggal;
                $available_psikolog = Psikolog::select('psikolog.id', 'psikolog.nama', 'psikolog.foto_profil', 'psikolog.bidang_keahlian', 'psikolog.tahun_pengalaman', 'psikolog.rating', 'h.harga', 'h.jenis_layanan', 'psikolog.nomor_str', 'psikolog.kota', 'psikolog.provinsi', 'psikolog.lulusan')
                    ->join('harga_layanan as h', 'psikolog.id', '=', 'h.id_psikolog')
                    ->whereNotIn('psikolog.id', function ($query) use ($tanggal, $jam) {
                        $query->select('j.id_psikolog')
                            ->from('janji as j')
                            ->where('j.tanggal', $tanggal)
                            ->where('j.jam', $jam)
                            ->union(function ($query) use ($tanggal) {
                                $query->select('t.id_psikolog')
                                    ->from('tanggal_tidak_tersedia as t')
                                    ->whereDate('t.tanggal_mulai', '<=', $tanggal)
                                    ->whereDate('t.tanggal_selesai', '>=', $tanggal);
                            });
                    })
                    ->where('psikolog.provinsi', $provinsi)
                    ->where('psikolog.kota', $kabupaten)
                    ->where('h.jenis_layanan', 'offline')
                    ->get();
                return response()->json($available_psikolog);
            }
        }
        if ($request->type == 'online') {
            $validator = Validator::make($request->all(), [
                'jam' => 'required',
                'tanggal' => 'required',

            ]);
            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            } else {
                $jam = $request->jam;
                $tanggal = $request->tanggal;
                $available_psikolog = Psikolog::select('psikolog.id', 'psikolog.nama', 'psikolog.foto_profil', 'psikolog.bidang_keahlian', 'psikolog.tahun_pengalaman', 'psikolog.rating', 'h.harga', 'h.jenis_layanan', 'psikolog.nomor_str', 'psikolog.kota', 'psikolog.provinsi', 'psikolog.lulusan')
                    ->join('harga_layanan as h', 'psikolog.id', '=', 'h.id_psikolog')
                    ->whereNotIn('psikolog.id', function ($query) use ($tanggal, $jam) {
                        $query->select('j.id_psikolog')
                            ->from('janji as j')
                            ->where('j.tanggal', $tanggal)
                            ->where('j.jam', $jam)
                            ->union(function ($query) use ($tanggal) {
                                $query->select('t.id_psikolog')
                                    ->from('tanggal_tidak_tersedia as t')
                                    ->whereDate('t.tanggal_mulai', '<=', $tanggal)
                                    ->whereDate('t.tanggal_selesai', '>=', $tanggal);
                            });
                    })
                    ->where('h.jenis_layanan', 'online')
                    ->get();
                return response()->json($available_psikolog);
            }
        }
    }

    public function detailPayment($id)
    {
        $detailPsikolog = Psikolog::join('harga_layanan as h', 'psikolog.id', '=', 'h.id_psikolog')
            ->where('psikolog.id', $id)
            ->first();

        return Inertia::render('Payment', [
            'psikolog' => $detailPsikolog,
        ]);
    }
}
