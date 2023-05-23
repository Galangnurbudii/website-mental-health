<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Psikolog extends Model
{
    protected $table = 'psikolog';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'nama',
        'email',
        'password',
        'rating',
        'bidang_keahlian',
        'tahun_pengalaman',
        'nomor_str',
        'lokasi_praktik',
        'lulusan',
    ];

    // ...

    // Jika Anda membutuhkan metode khusus atau relasi, tambahkan di sini
}