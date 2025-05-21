'use client'
import Link from "next/link";

const categorias = [
    { nombre: "Katas Básicas", slug: "basicas" },
    { nombre: "Katas Intermedias", slug: "intermedias" },
    { nombre: "Katas Avanzadas", slug: "avanzadas" },
];

export default function PageCodes() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-2xl text-white mb-6">Categorías de Katas</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categorias.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/codes/${cat.slug}`}
                        className="bg-gray-800 text-white rounded-lg p-6 shadow-md hover:bg-gray-700 transition"
                    >
                        {cat.nombre}
                    </Link>
                ))}
            </div>
        </div>
    );
}