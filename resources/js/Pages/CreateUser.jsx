import { useForm } from "@inertiajs/react";

export default function CreateUser() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        no_empleado: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register.store"));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={submit}
                className="bg-white p-6 rounded shadow w-96"
            >
                <h2 className="text-xl font-bold mb-4">Crear Usuario</h2>

                <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full mb-2 p-2 border rounded"
                    value={data.nombre}
                    onChange={(e) => setData("nombre", e.target.value)}
                />
                {errors.nombre && (
                    <div className="text-red-500">{errors.nombre}</div>
                )}

                <input
                    type="text"
                    placeholder="No. Empleado"
                    className="w-full mb-2 p-2 border rounded"
                    value={data.no_empleado}
                    onChange={(e) => setData("no_empleado", e.target.value)}
                />
                {errors.no_empleado && (
                    <div className="text-red-500">{errors.no_empleado}</div>
                )}

                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full mb-2 p-2 border rounded"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    className="w-full mb-2 p-2 border rounded"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                />

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-blue-500 text-white p-2 rounded mt-2"
                >
                    Crear Usuario
                </button>
            </form>
        </div>
    );
}
