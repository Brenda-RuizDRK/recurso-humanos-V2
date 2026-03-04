<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use App\Models\Puesto;
use App\Models\Rol;

class AuthController extends Controller
{
    public function showLogin()
    {
        // Si ya está logueado, lo manda directo al dashboard
        if (Auth::check()) {
            return redirect()->route('dashboard');
        }

        return Inertia::render('Auth/Login');
    }

   public function login(Request $request)
{
    $request->validate([
        'no_empleado' => ['required', 'string'],
        'password' => ['required', 'string'],
    ]);

    $usuario = Usuario::where('no_empleado', $request->no_empleado)->first();

    // 🔎 Verifica si existe
    if (!$usuario) {
        return back()->withErrors([
            'no_empleado' => 'El número de empleado no existe.',
        ]);
    }

    // 🔒 Verifica contraseña
    if (!Hash::check($request->password, $usuario->password)) {
        return back()->withErrors([
            'password' => 'La contraseña es incorrecta.',
        ]);
    }

    // 🚫 Verifica status
    if ($usuario->status !== 'Activo') {
        return back()->withErrors([
            'no_empleado' => 'El usuario está inactivo.',
        ]);
    }

    // ✅ Inicia sesión manualmente
    Auth::login($usuario);
    $request->session()->regenerate();

    return redirect()->route('dashboard');
}
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('login');
    }

public function createUser()
{
    $puestos = Puesto::select('id', 'nombre')->orderBy('nombre')->get();
    $roles = Rol::select('id', 'nombre')->orderBy('nombre')->get();

    return Inertia::render('Auth/CreateUser', [
        'puestos' => $puestos,
        'roles' => $roles,
    ]);
}

public function storeLogin(Request $request)
{
    $request->validate([
        'nombre' => ['required', 'string', 'max:255'],
        'no_empleado' => ['required', 'string', 'unique:usuarios,no_empleado'],
        'puesto_id' => ['required', 'exists:puestos,id'],
        'rol_id' => ['required', 'exists:rols,id'],
        'password' => ['required', 'string', 'min:6', 'confirmed'],
    ]);

    // Crear usuario
    $usuario = Usuario::create([
        'nombre' => $request->nombre,
        'no_empleado' => $request->no_empleado,
        'fecha_nacimiento' => $request->fecha_nacimiento,
        'fecha_ingreso' => $request->fecha_ingreso,
        'sexo' => $request->sexo,
        'telefono' => $request->telefono,
        'correo' => $request->correo,
        'contacto_emergencia' => $request->contacto_emergencia,
        'tipo_empleado' => $request->tipo_empleado,
        'puesto_id' => $request->puesto_id,
        'rol_id' => $request->rol_id,
        'status' => 'Activo',
        'password' => Hash::make($request->password),
    ]);

    // 🔑 Inicia sesión automáticamente
    Auth::login($usuario);
    $request->session()->regenerate();

    // 🔄 Redirige al Dashboard
    return redirect()->route('dashboard');
}


}
