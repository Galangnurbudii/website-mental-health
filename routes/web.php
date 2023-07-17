<?php

use App\Http\Controllers\AdminController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PsikologController;
use App\Http\Controllers\AdminArtikelController;


// Auth::routes(['verify' => true]);


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
Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/article', [ArtikelController::class, 'index'])->name('article');

Route::get('/article-detail/{id}', [ArtikelController::class, 'detail'])->name('articleDetail');

Route::get('/forum-home', [ForumController::class, 'index'])->name('forumHome');
Route::post('/forum-store', [ForumController::class, 'store'])->name('forumStore');

Route::get('/forum', function () {
    return Inertia::render('Forum');
})->name('forum');

Route::get('/layanan', function () {
    return Inertia::render('Layanan');
})->name('layanan');

Route::get('/konsultasi', function () {
    return Inertia::render('Konsultasi');
})->name('konsultasi');

Route::post('/filter-psikolog', [LayananController::class, 'filter'])->name('filter');

Route::get('/detail-layanan/videocall', function () {
    return Inertia::render('DetailLayanan2');
})->name('detaillayanan2');

Route::get('/detail-layanan', [LayananController::class, 'layanan'])->name('detaillayanan');

Route::get('/payment/videocall', function () {
    return Inertia::render('Payment2');
})->name('payment2');

Route::post('/validasi-layanan', [LayananController::class, 'validasiLayanan'])->name('validasilayanan');
Route::get('/payment/{id}/{tanggal}/{jam}', [LayananController::class, 'detailPayment'])->name('payment');

Route::get('/profil', function () {
    return Inertia::render('Profil');
})->name('profil');

Route::get('/admin-login', function () {
    return Inertia::render('AdminLogin');
})->name('adminlogin');


Route::get('/psikolog-login', function () {
    return Inertia::render('PsikologLogin');
})->name('psikologlogin');

Route::get('/jadwalkonsultasiuser', function () {
    return Inertia::render('JadwalKonsultasiUser');
})->name('jadwalkonsultasiuser');

Route::get('/detailkonsultasi', function () {
    return Inertia::render('DetailKonsultasi');
})->name('detailkonsultasi');

Route::get('/hapusprofil', function () {
    return Inertia::render('HapusProfil');
})->name('hapusprofil');

Route::get('/error', function () {
    return Inertia::render('NotFound');
})->name('notFound');

Route::get('/tentangkami', function () {
    return Inertia::render('TentangKami');
})->name('tentangkami');

Route::get('/syaratketentuan', function () {
    return Inertia::render('SyaratDanKetentuan');
})->name('syaratdanketentuan');


Route::middleware('psikolog')->group(function () {
    Route::get('/dashboardpsikolog', function () {
        return Inertia::render('DashboardPsikolog');
    })->name('dashboardpsikolog');

    Route::get('/jadwalkonsultasi', function () {
        return Inertia::render('JadwalKonsultasi');
    })->name('jadwalkonsultasi');
    
    Route::get('/aturketersediaan', function () {
        return Inertia::render('AturKetersediaan');
    })->name('aturketersediaan');

    Route::resource('psikologs', PsikologController::class);

});

Route::middleware('admin')->group(function () {
    Route::get('/dashboard-admin', [AdminController::class, 'index'])->name('dashboardadmin');
    Route::post('/upload', [AdminArtikelController::class, 'uploadImage']);
    Route::post('artikels/{id}', [AdminArtikelController::class, 'update'])->name('updateArtikel');
    Route::resource('artikels', AdminArtikelController::class);

});

Route::middleware('auth')->group(function () {
    Route::get('/forum-home', [ForumController::class, 'index'])->name('forumHome');

    Route::get('/forum', function () {
        return Inertia::render('Forum');
    })->name('forum');

    Route::get('/layanan', function () {
        return Inertia::render('Layanan');
    })->name('layanan');


    Route::get('/profil', function () {
        return Inertia::render('EditProfile', ['user' => Auth::user()]);
    })->name('profil');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

