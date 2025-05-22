'use client'
import { kyus } from '@/data/codes'
import { CardCategorieMemo } from '@/components/ui/CardCategorie'
import { WrapperCategoriesMemo } from '@/components/wrappers/WrapperCategories'
import { TitleMachineMemo } from '@/components/ui/TitleMachine'

export default function PageCodes() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <div className='text-center glahs px-2 py-4 gap-5 text-white'>
                <TitleMachineMemo title="Katas" />
                <WrapperCategoriesMemo>
                    {kyus.map((cat) => (
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