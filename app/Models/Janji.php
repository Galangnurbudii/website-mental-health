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
        'id_psikolog',
        'id_user',
        'tanggal',
        'jam',
    ];

    // ...

    public function psikolog()
    {
        return $this->belongsTo(Psikolog::class, 'id_psikolog');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}