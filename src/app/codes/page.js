'use client'
import { CardCategorieMemo } from '@/components/ui/CardCategorie'
import { WrapperCategoriesMemo } from '@/components/wrappers/WrapperCategories'
import { TitleMachineMemo } from '@/components/ui/TitleMachine'

const categorias = [
    { nombre: "Kyu 8", slug: "kyu8", descripcion: "Problemas básicos" },
    { nombre: "Kyu 7", slug: "kyu7", descripcion: "Problemas intermedios" },
    { nombre: "Kyu 6", slug: "kyu6", descripcion: "Problemas avanzados" },
    { nombre: "Kyu 5", slug: "kyu5", descripcion: "Problemas expertos" },
    { nombre: "Kyu 4", slug: "kyu4", descripcion: "Problemas maestros" },
    { nombre: "Kyu 3", slug: "kyu3", descripcion: "Problemas legendarios" },
    { nombre: "Kyu 2", slug: "kyu2", descripcion: "Problemas míticos" },
    { nombre: "Kyu 1", slug: "kyu1", descripcion: "Problemas divinos" },
];

export default function PageCodes() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <div className='text-center glahs px-2 py-4 gap-5'>
                <TitleMachineMemo title="Codewars Katas" />
                <WrapperCategoriesMemo>
                    {categorias.map((cat) => (
                        <CardCategorieMemo
                            key={cat.slug}
                            title={cat.nombre}
                            descripcion={cat.descripcion}
                            slug={cat.slug}
                            imagen={`/fondo.jpg`}
                            link={`/codes/${cat.slug}`}
                        />
                    ))}
                </WrapperCategoriesMemo>
            </div>
        </div>
    );
}