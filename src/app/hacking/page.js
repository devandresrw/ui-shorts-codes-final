'use client'
import Link from "next/link";

const maquinas = [
    { nombre: "Maquina 1", slug: "maquina1" },
    { nombre: "Maquina 2", slug: "maquina2" },
    { nombre: "Maquina 3", slug: "maquina3" },
];

export default function PageHacking() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-2xl text-white mb-6">Hacking</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {maquinas.map((m) => (
                    <Link
                        key={m.slug}
                        href={`/hacking/${m.slug}`}
                        className="bg-gray-800 text-white rounded-lg p-6 shadow-md hover:bg-gray-700 transition"
                    >
                        {m.nombre}
                    </Link>
                ))}
            </div>
        </div>
    );
}