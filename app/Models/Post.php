<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $table = 'post';
    
    protected $fillable = ['title', 'desc', 'category', 'cover'];


    protected $hidden = [
        'updated_at',
    ];
}
