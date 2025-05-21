'use client'
import { useParams } from "next/navigation";
import Link from "next/link";

const data = {
    linux: [
        { nombre: "Maquina Linux 1", slug: "linux1" },
        { nombre: "Maquina Linux 2", slug: "linux2" },
    ],
    windows: [
        { nombre: "Maquina Windows 1", slug: "windows1" },
    ],
    web: [
        { nombre: "Maquina Web 1", slug: "web1" },
    ],
};

export default function PageCategorie() {
    const { categorie } = useParams();
    const maquinas = data[categorie] || [];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-2xl text-white mb-6">Categoría: {categorie}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {maquinas.map((m) => (
                    <Link
                        key={m.slug}
                        href={`/hacking/${categorie}/${m.slug}`}
                        className="bg-gray-800 text-white rounded-lg p-6 shadow-md hover:bg-gray-700 transition"
                    >
                        {m.nombre}
                    </Link>
                ))}
            </div>
        </div>
    );
}