<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
              $table->string('nombre');
            $table->string('no_empleado')->unique();
            $table->string('fecha_nacimiento');
            $table->string('fecha_ingreso');
            $table->string('sexo');
            $table->string('telefono');
            $table->string('correo');
            $table->string('contacto_emergencia');
            $table->string('tipo_empleado');
            $table->foreignId('puesto_id')->nullable()->constrained('puestos')->nullOnDelete();
            $table->foreignId('rol_id')->nullable()->constrained('rols')->nullOnDelete();
            $table->string('status');
            $table->string('password');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
