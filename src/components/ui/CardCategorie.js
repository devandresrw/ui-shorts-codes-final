import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const CardCategorie = ({ title, descripcion, slug, imagen, link }) => {
    return (
        <div className='glahs'>
            <div className=''>
                <Image
                    src={imagen}
                    alt={title}
                    width={300}
                    height={200}
                    className='rounded-lg'
                />
            </div>
            <div className=''>
                <h2 className='text-xl font-bold text-white'>{title}</h2>
                <p className='text-gray-400'>{descripcion}</p>
                <Link href={link} className='text-blue-500 hover:underline'>
                    Ver más
                </Link>
            </div>
        </div>
    );
};

export const CardCategorieMemo = memo(CardCategorie);
CardCategorieMemo.displayName = 'CardCategorieMemo';