<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function edit($id)
    {
        $user = User::findOrFail($id);

        return Inertia::render('EditProfile', [
            'user' => $user
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,'.$user->id,
            // Tambahkan validasi untuk atribut lainnya
        ]);

        $user->update($validatedData);

        return redirect()->route('users.edit', $user->id);
    }
}
