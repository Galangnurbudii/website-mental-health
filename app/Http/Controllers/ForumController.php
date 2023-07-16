<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ForumController extends Controller
{
    //
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('ForumHome', ['posts' => $posts]);
    }

    public function store(Request $request)
    {
        $konten = Post::create([
            'konten' => $request->text,
            'id_user' => $request->id_user
        ]);

        return response()->json($request->text);
    }
}
