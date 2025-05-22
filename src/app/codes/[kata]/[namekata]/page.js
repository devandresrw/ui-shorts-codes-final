'use client'
import { useParams } from "next/navigation";
import { TitleMachineMemo } from "@/components/ui/TitleMachine";
import { getKataProblemById } from "@/data/codes"; // Importamos la función para obtener el problema por ID

export default function PaginaProblema() {
    const { kata, namekata } = useParams();

    // Obtenemos los detalles del problema usando la función auxiliar
    const problema = getKataProblemById(namekata);

    // Si no se encuentra el problema, mostramos un fallback
    const detalles = problema || {
        titulo: "Problema no encontrado",
        instrucciones: "Lo sentimos, este problema no existe o ha sido movido.",
        ejemplos: [],
        dificultad: "N/A",
        solucion: "// No hay código disponible"
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4">
            <div className="glahs w-[23rem] p-5 flex flex-col gap-3">
                <TitleMachineMemo title={detalles.titulo} />
                <div className="glahs">
                    <h2 className="text-xl text-white text-center">Descripción</h2>
                    <p className="text-gray-300 text-center">{detalles.instrucciones}</p>
                </div>
                <div className="glahs">
                    <pre className="text-gray-300 font-mono">
                        {/* Usamos la solución como código inicial o un espacio en blanco si no hay */}
                        {detalles.solucion}
                    </pre>
                </div>
            </div>
        </div>
    );
}