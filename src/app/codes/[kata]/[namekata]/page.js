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
            <div className="w-full max-w-4xl">
                <TitleMachineMemo title={detalles.titulo} />

                <div className="mb-6 flex gap-2 flex-wrap">
                    <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded">
                        {detalles.dificultad}
                    </span>

                    {detalles.tags && detalles.tags.map((tag, idx) => (
                        <span key={idx} className="inline-block bg-gray-600 text-white px-3 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                    <h2 className="text-xl text-white mb-4">Descripción</h2>
                    <p className="text-gray-300">{detalles.instrucciones}</p>

                    {detalles.ejemplos && detalles.ejemplos.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-lg text-white mb-2">Ejemplos</h3>
                            <div className="space-y-3">
                                {detalles.ejemplos.map((ejemplo, idx) => (
                                    <div key={idx} className="bg-gray-700 p-3 rounded">
                                        <div><span className="text-gray-400">Entrada:</span> {ejemplo.entrada}</div>
                                        <div><span className="text-gray-400">Salida esperada:</span> {ejemplo.salida}</div>
                                        {ejemplo.explicacion && (
                                            <div><span className="text-gray-400">Explicación:</span> {ejemplo.explicacion}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-xl text-white mb-4">Tu solución</h2>
                    <div className="bg-gray-900 p-4 rounded-md">
                        <pre className="text-gray-300 font-mono">
                            {/* Usamos la solución como código inicial o un espacio en blanco si no hay */}
                            {detalles.solucion ? detalles.solucion.replace(/return .+;/, "// Tu código aquí") : "// Escribe tu solución aquí"}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}