<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PsikologController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LayananController;
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


Route::get('/detaillayanan', [LayananController::class, 'index'])->name('detaillayanan');



// Route::get('/payment', function () {
//     return Inertia::render('Payment');
// })->name('payment');

Route::get('/payment/{id?}', [LayananController::class, 'layanan'])->name('payment');

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

Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('users.edit');
Route::put('/users/{id}', [UserController::class, 'update'])->name('users.update');

// Route::get('/profil', function () {
//     return Inertia::render('EditProfile');
// })->name('profil');

Route::get('/error', function () {
    return Inertia::render('NotFound');
})->name('notFound');

Route::get('/jadwalPsikolog', function () {
    return Inertia::render('SchedulePage');
})->name('jadwalPsikolog');

Route::get('/avaibility', function () {
    return Inertia::render('Avaibility');
})->name('avaibility');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
