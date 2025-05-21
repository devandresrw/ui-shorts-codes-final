'use client'
import { CardCategorieMemo } from '@/components/ui/CardCategorie'
import { WrapperCategoriesMemo } from '@/components/wrappers/WrapperCategories'

const categorias = [
    { nombre: "Linux", slug: "linux" },
    { nombre: "Windows", slug: "windows" },
    { nombre: "Web", slug: "web" },
];

export default function PageHacking() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <div className=' text-center glahs px-2 py-4 gap-5'>
                <h1 className=" text-white  fira-sans-bold text-2xl">Solved Routes Hacking</h1>
                <WrapperCategoriesMemo>
                    {categorias.map((cat) => (
                        <CardCategorieMemo
                            key={cat.slug}
                            title={cat.nombre}
                            descripcion={`Descripción de ${cat.nombre}`}
                            slug={cat.slug}
                            imagen={`/fondo.jpg`}
                            link={`/hacking/${cat.slug}`}
                        />
                    ))}
                </WrapperCategoriesMemo>
            </div>
        </div>
    );
}