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
            $table->string('fecha_nacimiento')->nullable();
            $table->string('fecha_ingreso')->nullable();
            $table->string('sexo')->nullable();
            $table->string('telefono')->nullable();
            $table->string('correo')->nullable();
            $table->string('contacto_emergencia')->nullable();
            $table->string('tipo_empleado')->nullable();
            $table->foreignId('puesto_id')->nullable()->constrained('puestos')->nullOnDelete();
            $table->foreignId('rol_id')->nullable()->constrained('rols')->nullOnDelete();
            $table->string('status')->nullable();
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
