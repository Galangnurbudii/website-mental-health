<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    use HasFactory;
    protected $table = 'quotes';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'konten',
    ];

    // ...
}