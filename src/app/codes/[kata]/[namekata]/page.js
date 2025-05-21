'use client'
import { useParams } from "next/navigation";
import { TitleMachineMemo } from "@/components/ui/TitleMachine";

// Base de datos de detalles de problemas (podrías moverla a un archivo separado)
const detallesProblemas = {
    "suma-dos-numeros": {
        titulo: "Suma dos números",
        descripcion: "Escribe una función que sume dos números y devuelva el resultado.",
        ejemplos: [
            { entrada: "1, 2", salida: "3" },
            { entrada: "5, -7", salida: "-2" }
        ],
        dificultad: "Kyu 8",
        codigoInicial: "function sumar(a, b) {\n  // Tu código aquí\n}"
    },
    "invertir-string": {
        titulo: "Invertir String",
        descripcion: "Crea una función que invierta el orden de los caracteres de un string.",
        ejemplos: [
            { entrada: "'hola'", salida: "'aloh'" },
            { entrada: "'javascript'", salida: "'tpircsavaj'" }
        ],
        dificultad: "Kyu 8",
        codigoInicial: "function invertirString(str) {\n  // Tu código aquí\n}"
    },
    // Añade más problemas según necesites
};

export default function PaginaProblema() {
    const { kata, namekata } = useParams();
    const detalles = detallesProblemas[namekata] || {
        titulo: "Problema no encontrado",
        descripcion: "Lo sentimos, este problema no existe o ha sido movido.",
        ejemplos: [],
        dificultad: "N/A",
        codigoInicial: "// No hay código disponible"
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4">
            <div className="w-full max-w-4xl">
                <TitleMachineMemo title={detalles.titulo} />
                <div className="mb-6">
                    <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded">
                        {detalles.dificultad}
                    </span>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                    <h2 className="text-xl text-white mb-4">Descripción</h2>
                    <p className="text-gray-300">{detalles.descripcion}</p>

                    {detalles.ejemplos.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-lg text-white mb-2">Ejemplos</h3>
                            <div className="space-y-3">
                                {detalles.ejemplos.map((ejemplo, idx) => (
                                    <div key={idx} className="bg-gray-700 p-3 rounded">
                                        <div><span className="text-gray-400">Entrada:</span> {ejemplo.entrada}</div>
                                        <div><span className="text-gray-400">Salida esperada:</span> {ejemplo.salida}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-xl text-white mb-4">Tu solución</h2>
                    <div className="bg-gray-900 p-4 rounded-md">
                        <pre className="text-gray-300 font-mono">{detalles.codigoInicial}</pre>
                    </div>

                    {/* Aquí podrías añadir un editor de código real como Monaco Editor */}

                    <div className="mt-6 flex justify-end">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
                            Enviar solución
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}