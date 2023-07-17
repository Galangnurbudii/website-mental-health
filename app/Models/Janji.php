<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;

class Janji extends Model
{
    use HasFactory;
    protected $table = 'janji';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'id_user',
        'tanggal',
        'jam',
        'id_layanan',
        'payment_status',
        'payment_link'
    ];

    // ...
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function layanan()
    {
        return $this->belongsTo(HargaLayanan::class, 'id_layanan');
    }
}