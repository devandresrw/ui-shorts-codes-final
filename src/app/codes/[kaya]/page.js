'use client'
import { useParams } from "next/navigation";
import Link from "next/link";

const data = {
    basicas: [
        { nombre: "Suma Simple", slug: "suma-simple" },
        { nombre: "Resta Simple", slug: "resta-simple" },
    ],
    intermedias: [
        { nombre: "Palíndromo", slug: "palindromo" },
    ],
    avanzadas: [
        { nombre: "Árbol Binario", slug: "arbol-binario" },
    ],
};

export default function PageKaya() {
    const { kaya } = useParams();
    const katas = data[kaya] || [];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-2xl text-white mb-6">Categoría: {kaya}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {katas.map((kata) => (
                    <Link
                        key={kata.slug}
                        href={`/codes/${kaya}/${kata.slug}`}
                        className="bg-gray-800 text-white rounded-lg p-6 shadow-md hover:bg-gray-700 transition"
                    >
                        {kata.nombre}
                    </Link>
                ))}
            </div>
        </div>
    );
}