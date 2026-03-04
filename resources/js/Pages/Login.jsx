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
        <GuestLayout>
            <Head title="Portal Corporativo | Vitracoat" />

            <div className="min-h-screen flex">

                {/* ================= LEFT PANEL ================= */}
                <div className="hidden md:flex w-1/2 bg-[#1F2E63] text-white p-16 flex-col justify-between">
                    
                    <div>
                        <h1 className="text-4xl font-semibold mb-6">
                            Portal Corporativo
                        </h1>

                        <div className="h-1 w-16 bg-[#F2B705] mb-8"></div>

                        <p className="text-lg text-blue-100 leading-relaxed max-w-md">
                            Plataforma institucional para la gestión segura de procesos,
                            información estratégica y herramientas internas.
                        </p>
                    </div>

                    <p className="text-sm text-blue-200">
                        © {new Date().getFullYear()} Vitracoat · Uso interno exclusivo
                    </p>
                </div>

                {/* ================= RIGHT PANEL ================= */}
                <div className="w-full md:w-1/2 bg-[#F4F6FA] flex items-center justify-center px-6">

                    <div className="w-full max-w-md">

                        {/* Logo / Encabezado */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-semibold text-[#1F2E63]">
                                Acceso al Sistema
                            </h2>
                            <p className="text-sm text-gray-500 mt-2">
                                Ingrese sus credenciales corporativas
                            </p>
                        </div>

                        {/* Card ligera */}
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">

                            <form onSubmit={submit} className="space-y-6">

                                {/* Usuario */}
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">
                                        Usuario
                                    </label>

                                    <input
                                        type="text"
                                        value={data.no_empleado}
                                        onChange={(e) =>
                                            setData("no_empleado", e.target.value)
                                        }
                                        className={`w-full px-4 py-2 rounded-lg border 
                                        ${
                                            errors.no_empleado
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        }
                                        focus:ring-2 focus:ring-[#1F2E63] focus:outline-none`}
                                        placeholder="Nombre de usuario"
                                    />

                                    {errors.no_empleado && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.no_empleado}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">
                                        Contraseña
                                    </label>

                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={data.password}
                                            onChange={(e) =>
                                                setData("password", e.target.value)
                                            }
                                            className={`w-full px-4 py-2 rounded-lg border 
                                            ${
                                                errors.password
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }
                                            focus:ring-2 focus:ring-[#1F2E63] focus:outline-none`}
                                            placeholder="Contraseña"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-3 top-2 text-sm text-gray-500"
                                        >
                                            {showPassword ? "Ocultar" : "Ver"}
                                        </button>
                                    </div>

                                    {errors.password && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                {/* Opciones */}
                                <div className="flex justify-between items-center text-sm">
                                    <label className="flex items-center gap-2 text-gray-600">
                                        <input type="checkbox" />
                                        Recordar sesión
                                    </label>

                                    <a
                                        href="#"
                                        className="text-[#1F2E63] font-medium hover:underline"
                                    >
                                        Recuperar acceso
                                    </a>
                                </div>

                                {/* Botón */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-[#1F2E63] hover:bg-[#16224d]
                                    text-white font-semibold py-2.5 rounded-lg
                                    transition duration-200 disabled:opacity-50"
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