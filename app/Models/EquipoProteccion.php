<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class EquipoProteccion extends Model
{
    use HasFactory;
    protected $table = 'equipo_proteccions';
    protected $fillable = ['nombre', 'descripcion', 'dias_vida', 'precio', 'tipo_producto', 'stok_actual'];

    
}
