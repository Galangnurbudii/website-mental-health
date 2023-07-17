<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HargaLayanan extends Model
{
    use HasFactory;
    protected $table = 'harga_layanan';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'id_psikolog',
        'jenis_layanan',
        'harga',
    ];

    // ...

    public function psikolog()
    {
        return $this->belongsTo(Psikolog::class, 'id_psikolog');    
    }
}