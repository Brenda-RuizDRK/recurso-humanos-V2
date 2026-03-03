<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Rol extends Model
{
    use HasFactory;
    protected $table = 'rols';
    protected $fillable = ['nombre', 'permissions'];

        protected $casts = [
        'permissions' => 'array', // Asegura que se maneje como un array
    ];

     public function usuarios()
    {
        return $this->hasMany(Usuario::class);
    }

}
