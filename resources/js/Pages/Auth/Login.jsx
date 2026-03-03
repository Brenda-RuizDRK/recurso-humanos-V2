import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        no_empleado: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        console.log("🔹 Enviando credenciales:", data);
        post(route("login"), {
            onError: (errors) => console.log("❌ Errores:", errors),
            onSuccess: () => console.log("✅ Login correcto"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Iniciar Sesión" />

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label className="block text-sm mb-1">Usuario</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none"
                        value={data.no_empleado}
                        onChange={(e) => setData("no_empleado", e.target.value)}
                    />
                    {errors.no_empleado && (
                        <p className="text-red-800 text-sm">
                            {errors.no_empleado}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm mb-1">Contraseña</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    {errors.password && (
                        <p className="text-red-400 text-sm">
                            {errors.password}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-[#ffa901] hover:bg-[#bb5802] text-white font-semibold py-2 rounded-md transition"
                >
                    Iniciar sesión
                </button>
            </form>
        </GuestLayout>
    );
}
