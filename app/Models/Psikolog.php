<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Psikolog extends Model
{
    use HasFactory;

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
        'negara',
        'provinsi',
        'kota',
        'lulusan',
        'foto_profil',
    ];

    // ...

    // Jika Anda membutuhkan metode khusus atau relasi, tambahkan di sini
    public function hargaLayanan()
    {
        return $this->hasOne('App\Models\HargaLayanan', 'id_psikolog', 'id');
    }

    public function janji()
    {
        return $this->hasMany('App\Models\Janji', 'id_psikolog', 'id');
    }

    public function tanggalTidakTersedia()
    {
        return $this->hasMany('App\Models\TanggalTidakTersedia', 'id_psikolog', 'id');
    }
}