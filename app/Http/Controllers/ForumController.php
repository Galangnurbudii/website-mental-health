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

}