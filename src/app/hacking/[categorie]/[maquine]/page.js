'use client'
import { useParams } from "next/navigation";
import { TitleMachineMemo } from "@/components/ui/TitleMachine";
import Terminal from "@/components/ui/AscciVideo";

export default function PageMachine() {
    const { categorie, maquine } = useParams();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6
        text-white ">
            <div className="glahs w-[24rem] p-5">
                <TitleMachineMemo title={`${maquine}`} />
                <p className="text-white fira-sans-bold text-2xl">Categoría: {categorie}</p>
                {/* Aquí puedes mostrar más info de la máquina */}
                <Terminal src="/machines/prueba.cast" />
            </div>
        </div>
    );
}

/*
<AsciiVideoMemo src={`/videos/${categorie}/${maquine}.mp4`} />
*/