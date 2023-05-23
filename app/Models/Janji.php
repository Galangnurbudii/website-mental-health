<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Janji extends Model
{
    protected $table = 'janji';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'id_psikolog',
        'id_pengguna',
        'tanggal',
        'jam',
    ];

    // ...

    public function psikolog()
    {
        return $this->belongsTo(Psikolog::class, 'id_psikolog');
    }

    public function pengguna()
    {
        return $this->belongsTo(Pengguna::class, 'id_pengguna');
    }
}