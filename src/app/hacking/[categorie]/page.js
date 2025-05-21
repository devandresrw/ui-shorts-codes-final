'use client'
import { useParams } from "next/navigation";
import { CardCategorieMemo } from '@/components/ui/CardCategorie'
import { WrapperCategoriesMemo } from "@/components/wrappers/WrapperCategories";
import Link from "next/link";

const data = {
    linux: [
        { nombre: "Maquina Linux 1", slug: "linux1" },
        { nombre: "Maquina Linux 2", slug: "linux2" },
    ],
    windows: [
        { nombre: "Maquina Windows 1", slug: "windows1" },
        { nombre: "Maquina Windows 1", slug: "windows2" },
        { nombre: "Maquina Windows 1", slug: "windows3" },
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
            <div className=' text-center glahs px-2 py-4 gap-5'>
                <h1 className="text-2xl text-white mb-6">Categoría: {categorie}</h1>
                <WrapperCategoriesMemo>
                    {maquinas.map((m) => (
                        <CardCategorieMemo
                            key={m.slug}
                            title={m.nombre}
                            descripcion={`Descripción de ${m.nombre}`}
                            slug={m.slug}
                            imagen={`/fondo.jpg`}
                            link={`/hacking/${categorie}/${m.slug}`}
                        />
                    ))}
                </WrapperCategoriesMemo>
            </div>
        </div>
    );
}