<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/article', function () {
    return Inertia::render('Article');
})->name('article');

Route::get('/articleDetail', function () {
    return Inertia::render('ArticleDetail');
})->name('articleDetail');

Route::get('/forumHome', function () {
    return Inertia::render('ForumHome');
})->name('forumHome');

Route::get('/forum', function () {
    return Inertia::render('Forum');
})->name('forum');

Route::get('/layanan', function () {
    return Inertia::render('Layanan');
})->name('layanan');

Route::get('/konsultasi', function () {
    return Inertia::render('Konsultasi');
})->name('konsultasi');

Route::get('/detaillayanan', function () {
    return Inertia::render('DetailLayanan');
})->name('detaillayanan');

Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/coba', function () {
    return Inertia::render('Coba');
})->name('coba');

Route::get('/profil', function () {
    return Inertia::render('Profil');
})->name('profil');

Route::get('/adminlogin', function () {
    return Inertia::render('AdminLogin');
})->name('adminlogin');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
