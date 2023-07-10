<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('EditProfile', ['users' => $users]);
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', Rules\Password::defaults()],
            'rating' => 'required',
            'bidang_keahlian' => 'required',
            'tahun_pengalaman' => 'required',
            'nomor_str' => 'required',
            'lokasi_praktik' => 'required',
            'lulusan' => 'required'
        ])->validate();

        User::create($request->all());

        return redirect()->route('users.index');
    }

    public function edit($users)
    {
        // dd(User::find($users));
        return Inertia::render('AdminEditUser', [
            'users' => User::find($users)
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

        User::find($id)->update($request->all());
        return redirect()->route('users.index');
    }

    public function destroy($id)
    {
        $psikolog = User::find($id);
        // dd($psikolog);
        if ($psikolog) {
            $psikolog->delete();
        }
        return redirect()->route('users.index');
    }
}
