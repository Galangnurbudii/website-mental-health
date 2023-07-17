<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Janji;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profil');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::route('home');
    }

    public function jadwalKonsultasi()
    {
        // carilah Janji yang id usernya sama dengan Auth::->user()
        $list_janji = DB::table('janji')
            ->join('harga_layanan', 'janji.id_layanan', '=', 'harga_layanan.id')
            ->join('psikolog', 'harga_layanan.id_psikolog', '=', 'psikolog.id')
            ->where('janji.id_user', '=', Auth::user()->id)
            ->select('janji.*', 'harga_layanan.*', 'psikolog.*')
            ->get();
        // dd($list_janji);
        return Inertia::render('JadwalKonsultasiUser', ['list_janji' => $list_janji]);

    }
    public function detailKonsultasi($id)
    {
        $janji = Janji::find($id);
        // dd($janji);
        return Inertia::render('DetailKonsultasi', $janji);
    }
}