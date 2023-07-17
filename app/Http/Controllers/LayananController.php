<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Janji;
use App\Models\Psikolog;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class LayananController extends Controller
{
    public function layanan()
    {
        $psikologs = Psikolog::all();
        return Inertia::render('DetailLayanan');
    }

    public function makePayment(Request $request)
    {


        $secret_key = 'Basic ' . config('xendit.key_auth');
        $external_id = Str::random(10);
        $data_request = Http::withHeaders([
            'Authorization' => $secret_key
        ])->post('https://api.xendit.co/v2/invoices', [
                    'external_id' => $external_id,
                    'amount' => $request->harga
                ]);


        $data = json_decode($data_request);

        Janji::create([
            'id_user' => Auth::user()->id,
            'id_layanan' => $request->id_layanan,
            'tanggal' => $request->tanggal,
            'jam' => $request->jam,
            'harga' => $request->harga,
            'payment_status' => $data->data->payment_status,
            'payment_link' => $data->data->invoice_url,
        ]);

        return response($data_request);

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
                $available_psikolog = DB::select("
            SELECT  p.*,h.id AS id_layanan, h.harga as harga
            FROM psikolog p
            JOIN harga_layanan h ON p.id = h.id_psikolog
            WHERE p.id NOT IN (
                SELECT h.id_psikolog
                FROM janji j
                JOIN harga_layanan h ON j.id_layanan = h.id
                WHERE j.tanggal = ? AND j.jam = ?
                UNION
                SELECT p.id
                FROM psikolog p
                JOIN tanggal_tidak_tersedia t ON p.id = t.id_psikolog
                WHERE ? BETWEEN t.tanggal_mulai AND t.tanggal_selesai
            )
            AND p.provinsi = ?
            AND p.kota = ?
            AND h.jenis_layanan = ?
        ", [$tanggal, $jam, $tanggal, $provinsi, $kabupaten, 'offline']);
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
                $available_psikolog = DB::select("
            SELECT  p.*,h.id AS id_layanan,h.harga as harga
            FROM psikolog p
            JOIN harga_layanan h ON p.id = h.id_psikolog
            WHERE p.id NOT IN (
                SELECT h.id_psikolog
                FROM janji j
                JOIN harga_layanan h ON j.id_layanan = h.id
                WHERE j.tanggal = ? AND j.jam = ?
                UNION
                SELECT p.id
                FROM psikolog p
                JOIN tanggal_tidak_tersedia t ON p.id = t.id_psikolog
                WHERE ? BETWEEN t.tanggal_mulai AND t.tanggal_selesai
            )
            AND h.jenis_layanan = ?
        ", [$tanggal, $jam, $tanggal, 'online']);
                return response()->json($available_psikolog);
            }
        }
    }


    public function detailPayment($id, $tanggal, $jam)
    {
        // dd($id, $jam, $tanggal);
        $detailPsikolog = Psikolog::join('harga_layanan as h', 'psikolog.id', '=', 'h.id_psikolog')
            ->where('psikolog.id', $id)
            ->first();

        return Inertia::render('Payment', [
            'psikolog' => $detailPsikolog,
            'tanggal' => $tanggal,
            'jam' => $jam,
        ]);
    }

    public function validasiLayanan(Request $request)
    {
        $janji = Janji::create([
            'id_psikolog' => $request->id_psikolog,
            'id_user' => $request->id_user,
            'jam' => $request->jam,
            'tanggal' => $request->tanggal
        ]);

        return response()->json($request->all());
    }
}