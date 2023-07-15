<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AdminArtikelController extends Controller
{
    public function index()
    {
        $artikel = Artikel::all();
        return Inertia::render('AdminIndexArtikel', ['artikels' => $artikel]);
    }

    public function create()
    {
        return Inertia::render('AdminCreateArtikel');
    }

    public function uploadImage(Request $request)
    {
        $fileName = $request->file('file')->getClientOriginalName();
        // error_log($fileName);
        $path = $request->file('file')->storeAs('uploads', $fileName, 'public');
        return response()->json(['location' => "/storage/$path"]);
    }

    // public function store(Request $request)
    // {
    //     Validator::make($request->all(), [
    //         'judul' => 'required|string|max:255',
    //         'tag' => 'required|string|max:255',
    //         'detail' => 'required',
    //         'id_user' => 'required',
    //         'thumbnail_url' => 'required',
    //     ])->validate();

    //     Artikel::create($request->all());

    //     return redirect()->route('artikels.index');
    // }

    public function store(Request $request)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'judul' => 'required',
            'tag' => 'required',
            'detail' => 'required',
            'id_user' => 'required',
            'thumbnail' => 'required|image',
            'thumbnail.*' => 'mimes:jpg, jpeg, png|max:2048'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        } else {
            $thumbnailPath = $request->file('thumbnail')->store('thumbnails', 'public');

            //eloquent insert create
            $mahasiswa = Artikel::create([
                'judul' => $request->judul,
                'tag' => $request->tag,
                'detail' => $request->detail,
                'id_user' => $request->id_user,
                'thumbnail_url' => $thumbnailPath
            ]);

            return redirect()->route('artikels.index')->with('success', 'Artikel berhasil ditambahkan.');
        }
    }

    public function edit($artikels)
    {
        // dd(Artikels::find($artikels));
        return Inertia::render('AdminEditArtikel', [
            'artikels' => Artikel::find($artikels)
        ]);
    }

    public function update(Request $request, $id)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'judul' => 'required',
            'tag' => 'required',
            'detail' => 'required',
            'id_user' => 'required',
            'thumbnail' => 'image',
            'thumbnail.*' => 'mimes:jpg,jpeg,png|max:2048'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        } else {
            // Ambil artikel berdasarkan ID
            $artikel = Artikel::findOrFail($id);

            // Update data artikel
            $artikel->update([
                'judul' => $request->judul,
                'tag' => $request->tag,
                'detail' => $request->detail,
                'id_user' => $request->id_user,
            ]);

            // Periksa apakah ada file thumbnail yang diupload
            if ($request->hasFile('thumbnail')) {
                // Hapus file thumbnail sebelumnya jika ada
                Storage::disk('public')->delete($artikel->thumbnail_url);

                // Upload dan simpan file thumbnail yang baru
                $thumbnailPath = $request->file('thumbnail')->store('thumbnails', 'public');
                $artikel->update([
                    'thumbnail_url' => $thumbnailPath
                ]);
            }

            return redirect()->route('artikels.index')->with('success', 'Artikel berhasil diperbarui.');
        }
    }



    public function destroy($id)
    {
        $artikel = Artikel::find($id);
        if ($artikel) {
            $artikel->delete();
        }
        return redirect()->route('artikels.index');
    }
}
