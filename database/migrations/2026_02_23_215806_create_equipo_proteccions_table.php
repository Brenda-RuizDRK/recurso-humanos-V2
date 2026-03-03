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
        Schema::create('equipo_proteccions', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->nullable();
             $table->string('descripcion')->nullable();
             $table->string('dias_vida')->nullable();
             $table->string('precio')->nullable();
             $table->string('tipo_producto')->nullable();
             $table->string('stok_actual')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('equipo_proteccions');
    }
};
