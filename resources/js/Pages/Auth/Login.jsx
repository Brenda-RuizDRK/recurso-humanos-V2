import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        no_empleado: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), { preserveScroll: true });
    };

    return (
        <GuestLayout fullScreen>
            <Head title="Portal Corporativo | Vitracoat" />

            <div className="min-h-screen flex bg-gradient-to-tr from-[#1F2E63] via-[#3b5998] to-[#F4F6FA]">

                {/* LEFT PANEL */}
                <div className="hidden md:flex w-1/2 bg-[#1F2E63] text-white p-16 flex-col justify-between relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#F2B705]/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#F2B705]/20 rounded-full blur-xl"></div>
                    
                    <div>
                        <h1 className="text-4xl font-bold mb-6 tracking-tight flex items-center gap-3">
                            <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path fill="#F2B705" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.93V20a8 8 0 01-8-8h2.07A6 6 0 0013 18.93zM4.07 13H2a8 8 0 018-8v2.07A6 6 0 004.07 13zm7.93-7.93V4a8 8 0 018 8h-2.07A6 6 0 0012 4.07zm7.93 7.93h2a8 8 0 01-8 8v-2.07A6 6 0 0020.93 12z" /></svg>
                            Portal Corporativo
                        </h1>
                        <div className="h-1 w-20 bg-[#F2B705] mb-8 rounded"></div>
                        <p className="text-lg text-blue-100 leading-relaxed max-w-md">
                            Plataforma institucional para la gestión segura de procesos,
                            información estratégica y herramientas internas.
                        </p>
                    </div>
                    <p className="text-sm text-blue-200 mt-8">
                        © {new Date().getFullYear()} Vitracoat · Uso interno exclusivo
                    </p>
                </div>

                {/* RIGHT PANEL */}
                <div className="w-full md:w-1/2 flex items-center justify-center px-6 bg-[#F4F6FA] relative">
                    {/* Decorative gradient */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#F2B705]/10 via-transparent to-[#1F2E63]/5"></div>
                    <div className="w-full max-w-md z-10">

                        {/* Encabezado */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-[#1F2E63] tracking-tight">
                                Acceso al Sistema
                            </h2>
                            <p className="text-sm text-gray-500 mt-2">
                                Ingrese sus credenciales corporativas
                            </p>
                        </div>

                        {/* Card */}
                        <div className="bg-white/90 p-8 rounded-2xl shadow-xl border border-gray-100 backdrop-blur-md transition-all duration-300 hover:shadow-2xl">

                            <form onSubmit={submit} className="space-y-7">

                                {/* Usuario */}
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                                        Usuario
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2.5 text-gray-400">
                                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#1F2E63" d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z"/></svg>
                                        </span>
                                        <input
                                            type="text"
                                            value={data.no_empleado}
                                            onChange={(e) =>
                                                setData("no_empleado", e.target.value)
                                            }
                                            className={`w-full pl-10 pr-4 py-2 rounded-lg border 
                                            ${
                                                errors.no_empleado
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }
                                            focus:ring-2 focus:ring-[#1F2E63] focus:outline-none transition`}
                                            placeholder="Nombre de usuario"
                                        />
                                    </div>
                                    {errors.no_empleado && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.no_empleado}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                                        Contraseña
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2.5 text-gray-400">
                                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#1F2E63" d="M12 4a7 7 0 00-7 7v3a2 2 0 002 2h1v-2a3 3 0 016 0v2h1a2 2 0 002-2v-3a7 7 0 00-7-7zm1 10v2h-2v-2a1 1 0 012 0z"/></svg>
                                        </span>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={data.password}
                                            onChange={(e) =>
                                                setData("password", e.target.value)
                                            }
                                            className={`w-full pl-10 pr-10 py-2 rounded-lg border 
                                            ${
                                                errors.password
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }
                                            focus:ring-2 focus:ring-[#1F2E63] focus:outline-none transition`}
                                            placeholder="Contraseña"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-3 top-2 text-sm text-gray-500 hover:text-[#1F2E63] transition"
                                            tabIndex={-1}
                                        >
                                            {showPassword ? (
                                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#1F2E63" d="M12 5c-7 0-9 7-9 7s2 7 9 7 9-7 9-7-2-7-9-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z"/></svg>
                                            ) : (
                                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#1F2E63" d="M12 5c-7 0-9 7-9 7s2 7 9 7c1.61 0 3.06-.23 4.32-.62l-1.45-1.45A7.96 7.96 0 0112 19c-5.52 0-8-5-8-5s2.48-5 8-5c1.61 0 3.06.23 4.32.62l1.45-1.45A9.96 9.96 0 0012 5zm7.19 2.81l-1.41 1.41A9.96 9.96 0 0121 12s-2.48 5-8 5c-1.61 0-3.06-.23-4.32-.62l-1.45 1.45A9.96 9.96 0 0012 19c7 0 9-7 9-7s-2-7-9-7c-1.61 0-3.06.23-4.32.62l1.45 1.45A7.96 7.96 0 0112 5c5.52 0 8 5 8 5s-2.48 5-8 5c-1.61 0-3.06-.23-4.32-.62l-1.45 1.45A9.96 9.96 0 0012 19c7 0 9-7 9-7s-2-7-9-7z"/></svg>
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                {/* Opciones */}
                                <div className="flex justify-between items-center text-sm">
                                    <label className="flex items-center gap-2 text-gray-600 cursor-pointer select-none">
                                        <input type="checkbox" className="accent-[#F2B705]" />
                                        Recordar sesión
                                    </label>
                                    <a
                                        href="#"
                                        className="text-[#1F2E63] font-medium hover:underline transition"
                                    >
                                        Recuperar acceso
                                    </a>
                                </div>

                                {/* Botón */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-gradient-to-r from-[#F2B705] to-[#1F2E63] hover:from-[#1F2E63] hover:to-[#F2B705]
                                    text-white font-bold py-2.5 rounded-lg
                                    shadow-lg transition duration-200 disabled:opacity-50 tracking-wide"
                                >
                                    {processing ? "Verificando..." : "Acceder →"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}