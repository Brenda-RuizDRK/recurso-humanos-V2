<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Puesto extends Model
{
    use HasFactory;
    protected $table = 'puestos';
    protected $fillable = ['nombre', 'area_id', 'descriptivo_puesto', 'equipo_proteccion_id'];

    public function area()
    {
        return $this->belongsTo(Area::class);
    }

    public function equipoProteccion()
    {
        return $this->belongsTo(EquipoProteccion::class, 'equipo_proteccion_id');
    }
}
