<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function showLogin()
    {
        // Si ya está logueado, lo manda directo al dashboard
        if (Auth::check()) {
            return redirect()->route('dashboard');
        }

        return Inertia::render('Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'no_empleado' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        // Intenta autenticar
       if (Auth::attempt($credentials)) {
    $request->session()->regenerate();
    return redirect()->intended(route('dashboard'));
}

        return back()->withErrors([
            'no_empleado' => 'Usuario o contraseña incorrectos.',
        ]);
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
    return Inertia::render('CreateUser');
}

   public function storeLogin(Request $request)
    {
        $request->validate([
        'nombre' => ['required', 'string', 'max:255'],
        'no_empleado' => ['required', 'string', 'unique:usuarios,no_empleado'],
        'password' => ['required', 'string', 'min:6', 'confirmed'],
    ]);

    Usuario::create([
        'nombre' => $request->nombre,
        'no_empleado' => $request->no_empleado,
        'password' => Hash::make($request->password),
    ]);

    return redirect()->route('login')->with('success', 'Usuario creado correctamente');
      
    }
}
