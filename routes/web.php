<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;



/* Route::get('/', function () {
    return redirect()->route('login');
}); */

Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/usuarios/crear', [AuthController::class, 'createUser'])->name('usuarios.create');
Route::post('/usuarios', [AuthController::class, 'storeUser'])->name('usuarios.store');
require __DIR__.'/auth.php';
