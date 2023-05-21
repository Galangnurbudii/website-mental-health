<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    protected $table = 'artikel';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'judul',
        'tag',
        'detail',
        'id_admin',
        'id_psikolog',
    ];

    // ...

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'id_admin');
    }

    public function psikolog()
    {
        return $this->belongsTo(Psikolog::class, 'id_psikolog');
    }
}