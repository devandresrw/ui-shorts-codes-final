'use client'
import { useParams } from "next/navigation";
import { CardCategorieMemo } from '@/components/ui/CardCategorie'
import { WrapperCategoriesMemo } from "@/components/wrappers/WrapperCategories";
import { TitleMachineMemo } from "@/components/ui/TitleMachine";
import { allKataProblems } from "@/data/codes"; // Importamos los problemas por categoría
import { kyus } from "@/data/codes/categories"; // Importamos el array de categorías

export default function PageKataCategoria() {
    // Obtenemos el parámetro de la URL
    const { kata } = useParams();

    // Obtenemos los problemas de esta categoría
    const problemas = allKataProblems[kata] || [];

    // Buscamos el nombre bonito de la categoría
    const categoriaInfo = kyus.find(cat => cat.slug === kata) || { nombre: kata };
    const nombreCategoria = categoriaInfo.nombre;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <div className='text-center glahs px-2 py-4 gap-5'>
                <TitleMachineMemo title={nombreCategoria} />
                <p className="text-gray-300 mb-8">Selecciona un problema para resolver</p>

                <WrapperCategoriesMemo>
                    {problemas.length > 0 ? problemas.map((problema) => (
                        <CardCategorieMemo
                            key={problema.id}
                            title={problema.titulo || 'Sin título'}
                            descripcion={problema.instrucciones
                                ? (problema.instrucciones.length > 80
                                    ? problema.instrucciones.substring(0, 80) + '...'
                                    : problema.instrucciones)
                                : 'No hay descripción disponible'}
                            slug={problema.id}
                            imagen={`/fondo.jpg`}
                            link={`/codes/${kata}/${problema.id}`}
                        />
                    )) : (
                        <div className="text-center p-8 text-gray-400">
                            No hay problemas disponibles en esta categoría
                        </div>
                    )}
                </WrapperCategoriesMemo>
            </div>
        </div>
    );
}