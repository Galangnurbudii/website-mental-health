<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Artikel extends Model
{
    use HasFactory;

    protected $table = 'artikel';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'judul',
        'tag',
        'detail',
        'id_user',
        'id_psikolog',
        'thumbnail_url',
    ];

    // ...



    public function psikolog()
    {
        return $this->belongsTo(Psikolog::class, 'id_psikolog');
    }
}