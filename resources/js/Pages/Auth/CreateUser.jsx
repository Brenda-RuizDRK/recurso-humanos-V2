import { useForm, usePage } from "@inertiajs/react";

export default function CreateUser() {
    const { puestos = [], roles = [] } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        nombre: "",
        no_empleado: "",
        fecha_nacimiento: "",
        fecha_ingreso: "",
        sexo: "",
        telefono: "",
        correo: "",
        contacto_emergencia: "",
        tipo_empleado: "",
        puesto_id: "",
        rol_id: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("store.usuario"));
    };

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">Crear Usuario</h2>

            <form onSubmit={submit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={data.nombre}
                    onChange={(e) => setData("nombre", e.target.value)}
                    className="w-full border p-2 rounded"
                />
                {errors.nombre && (
                    <div className="text-red-500">{errors.nombre}</div>
                )}

                <input
                    type="text"
                    placeholder="No. Empleado"
                    value={data.no_empleado}
                    onChange={(e) => setData("no_empleado", e.target.value)}
                    className="w-full border p-2 rounded"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    className="w-full border p-2 rounded"
                />

                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    className="w-full border p-2 rounded"
                />
                <select
                    value={data.puesto_id}
                    onChange={(e) => setData("puesto_id", e.target.value)}
                >
                    <option value="">Seleccione un puesto</option>
                    {puestos?.map((puesto) => (
                        <option key={puesto.id} value={puesto.id}>
                            {puesto.nombre}
                        </option>
                    ))}
                </select>
                <select
                    value={data.rol_id}
                    onChange={(e) => setData("rol_id", e.target.value)}
                >
                    <option value="">Seleccione un rol</option>
                    {roles?.map((rol) => (
                        <option key={rol.id} value={rol.id}>
                            {rol.nombre}
                        </option>
                    ))}
                </select>

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Crear Usuario
                </button>
            </form>
        </div>
    );
}
