<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PsikologController;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/article', [ArtikelController::class, 'index'])->name('article');

Route::get('/articleDetail/{id}', [ArtikelController::class, 'detail'])->name('articleDetail');

Route::get('/forumHome', [ForumController::class, 'index'])->name('forumHome');

Route::get('/forum', function () {
    return Inertia::render('Forum');
})->name('forum');

Route::get('/layanan', function () {
    return Inertia::render('Layanan');
})->name('layanan');

Route::get('/konsultasi', function () {
    return Inertia::render('Konsultasi');
})->name('konsultasi');

Route::get('/detaillayanan/videocall', function () {
    return Inertia::render('DetailLayanan2');
})->name('detaillayanan2');

Route::get('/detaillayanan', function () {
    return Inertia::render('DetailLayanan');
})->name('detaillayanan');

Route::get('/payment/videocall', function () {
    return Inertia::render('Payment2');
})->name('payment2');

Route::get('/payment', function () {
    return Inertia::render('Payment');
})->name('payment');


Route::get('/', [HomeController::class, 'index'])->name('home');


Route::get('/coba', function () {
    return Inertia::render('Coba');
})->name('coba');

Route::get('/profil', function () {
    return Inertia::render('Profil');
})->name('profil');

Route::get('/adminlogin', function () {
    return Inertia::render('AdminLogin');
})->name('adminlogin');


Route::get('/psikologlogin', function () {
    return Inertia::render('PsikologLogin');
})->name('psikologlogin');

Route::get('/dashboardadmin', function () {
    return Inertia::render('DashboardAdmin');
})->name('dashboardadmin');


Route::resource('psikologs', PsikologController::class);

Route::get('/profil', function () {
    return Inertia::render('EditProfile');
})->name('profil');

Route::get('/hapusprofil', function () {
    return Inertia::render('HapusProfil');
})->name('hapusprofil');

Route::get('/error', function () {
    return Inertia::render('NotFound');
})->name('notFound');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';