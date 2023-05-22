<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    protected $table = 'quotes';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'konten',
    ];

    // ...
}