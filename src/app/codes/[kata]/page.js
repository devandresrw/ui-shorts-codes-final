'use client'
import { useParams } from "next/navigation";
import { CardCategorieMemo } from '@/components/ui/CardCategorie'
import { WrapperCategoriesMemo } from "@/components/wrappers/WrapperCategories";
import { TitleMachineMemo } from "@/components/ui/TitleMachine";

// Base de datos de problemas organizados por categoría
const problemasPorCategoria = {
    kyu8: [
        { nombre: "Suma dos números", slug: "suma-dos-numeros", dificultad: "Kyu 8" },
        { nombre: "Invertir string", slug: "invertir-string", dificultad: "Kyu 8" },
        { nombre: "Par o impar", slug: "par-impar", dificultad: "Kyu 8" },
        { nombre: "Contar positivos", slug: "contar-positivos", dificultad: "Kyu 8" },
    ],
    kyu7: [
        { nombre: "Validar PIN", slug: "validar-pin", dificultad: "Kyu 7" },
        { nombre: "Suma dígitos", slug: "suma-digitos", dificultad: "Kyu 7" },
        { nombre: "Encontrar outlier", slug: "encontrar-outlier", dificultad: "Kyu 7" },
    ],
    kyu6: [
        { nombre: "Contar duplicados", slug: "contar-duplicados", dificultad: "Kyu 6" },
        { nombre: "Crear número de teléfono", slug: "crear-telefono", dificultad: "Kyu 6" },
    ],
    kyu5: [
        { nombre: "Validador RGB Hex", slug: "validador-rgb-hex", dificultad: "Kyu 5" },
        { nombre: "Direcciones IP", slug: "direcciones-ip", dificultad: "Kyu 5" },
    ],
    kyu4: [
        { nombre: "Evaluador de expresiones", slug: "evaluador-expresiones", dificultad: "Kyu 4" },
    ],
    kyu3: [
        { nombre: "Puzzle numérico", slug: "puzzle-numerico", dificultad: "Kyu 3" },
    ],
    kyu2: [
        { nombre: "Validador de sudoku", slug: "validador-sudoku", dificultad: "Kyu 2" },
    ],
    kyu1: [
        { nombre: "Recorrido binario", slug: "recorrido-binario", dificultad: "Kyu 1" },
    ],
};

// Mapeo de slugs a nombres bonitos para mostrar
const nombresCategorias = {
    kyu8: "Kyu 8",
    kyu7: "Kyu 7",
    kyu6: "Kyu 6",
    kyu5: "Kyu 5",
    kyu4: "Kyu 4",
    kyu3: "Kyu 3",
    kyu2: "Kyu 2",
    kyu1: "Kyu 1"
};

export default function PageKataCategoria() {
    const { kata } = useParams();
    const problemas = problemasPorCategoria[kata] || [];
    const nombreCategoria = nombresCategorias[kata] || kata;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <div className='text-center glahs px-2 py-4 gap-5'>
                <TitleMachineMemo title={nombreCategoria} />
                <p className="text-gray-300 mb-8">Selecciona un problema para resolver</p>

                <WrapperCategoriesMemo>
                    {problemas.map((problema) => (
                        <CardCategorieMemo
                            key={problema.slug}
                            title={problema.nombre}
                            descripcion={`Dificultad: ${problema.dificultad}`}
                            slug={problema.slug}
                            imagen={`/fondo.jpg`}
                            link={`/codes/${kata}/${problema.slug}`}
                        />
                    ))}
                    {problemas.length === 0 && (
                        <div className="text-center p-8 text-gray-400">
                            No hay problemas disponibles en esta categoría
                        </div>
                    )}
                </WrapperCategoriesMemo>
            </div>
        </div>
    );
}