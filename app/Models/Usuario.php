<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable; // Cambio aquí
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class Usuario extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    
    protected $table = 'usuarios';
    protected $fillable = [
    'nombre',
    'no_empleado',
    'fecha_nacimiento',
    'fecha_ingreso',
    'sexo',
    'telefono',
    'correo',
    'contacto_emergencia',
    'tipo_empleado',
    'puesto_id',
    'rol_id',
    'status',
    'password'
];

       protected $hidden = [
        'password',
        'remember_token',
    ];

    public function puesto()
    {
        return $this->belongsTo(Puesto::class);
    }

    public function rol()
    {
        return $this->belongsTo(Rol::class);
    }



    public function hasPermission(string $permission): bool
{
    $permissions = $this->rol->permissions ?? [];
    return in_array($permission, $permissions);
}

    public function getAuthIdentifierName()
{
    return 'no_empleado';
}
}
