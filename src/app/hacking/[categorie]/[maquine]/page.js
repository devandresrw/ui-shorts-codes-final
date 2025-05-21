'use client'
import { useParams } from "next/navigation";

export default function PageMachine() {
    const { categorie, maquine } = useParams();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-2xl text-white mb-6">
                Detalle de la máquina: {maquine}
            </h1>
            <p className="text-white">Categoría: {categorie}</p>
            {/* Aquí puedes mostrar más info de la máquina */}
        </div>
    );
}