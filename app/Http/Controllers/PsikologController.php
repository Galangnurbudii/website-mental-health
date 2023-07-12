<?php

namespace App\Http\Controllers;

use App\Models\Psikolog;
use Illuminate\Http\Request;
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

    public function create()
    {
        return Inertia::render('AdminCreatePsikolog');
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . Psikolog::class,
            'password' => ['required', Rules\Password::defaults()],
            'rating' => 'required',
            'bidang_keahlian' => 'required',
            'tahun_pengalaman' => 'required',
            'nomor_str' => 'required',
            'lokasi_praktik' => 'required',
            'lulusan' => 'required'
        ])->validate();

        Psikolog::create($request->all());

        return redirect()->route('psikologs.index');
    }

    public function edit($psikologs)
    {
        // dd(Psikolog::find($psikologs));
        return Inertia::render('AdminEditPsikolog', [
            'psikologs' => Psikolog::find($psikologs)
        ]);
    }

    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'email' => ['required','string','email','max:255', Rule::unique('psikolog')->ignore($id),],
            'password' => ['required', Rules\Password::defaults()],
            'rating' => 'required',
            'bidang_keahlian' => 'required',
            'tahun_pengalaman' => 'required',
            'nomor_str' => 'required',
            'lokasi_praktik' => 'required',
            'lulusan' => 'required'
        ])->validate();

        Psikolog::find($id)->update($request->all());
        return redirect()->route('psikologs.index');
    }

    public function destroy($id)
    {
        $psikolog = Psikolog::find($id);
        // dd($psikolog);
        if ($psikolog) {
            $psikolog->delete();
        }
        return redirect()->route('psikologs.index');
    }
}
