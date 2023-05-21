<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TanggalTidakTersedia extends Model
{
    protected $table = 'tanggal_tidak_tersedia';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'id_psikolog',
        'tanggal_mulai',
        'jam_mulai',
        'tanggal_selesai',
        'jam_selesai',
    ];

    // ...

    public function psikolog()
    {
        return $this->belongsTo(Psikolog::class, 'id_psikolog');
    }
}