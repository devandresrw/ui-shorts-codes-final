'use client'
import { useParams } from "next/navigation";
import { TitleMachineMemo } from "@/components/ui/TitleMachine";
import { AsciiVideoMemo } from "@/components/ui/AscciVideo";

export default function PageMachine() {
    const { categorie, maquine } = useParams();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6
        text-white ">
            <TitleMachineMemo title={`Detalle de la máquina: ${maquine}`} />
            <p className="text-white">Categoría: {categorie}</p>
            {/* Aquí puedes mostrar más info de la máquina */}
            <AsciiVideoMemo asciinemaUrl="https://asciinema.org/a/Gtcu0GiYRqiuVfB6wTZ7cn8Yn" />
        </div>
    );
}

/*
<AsciiVideoMemo src={`/videos/${categorie}/${maquine}.mp4`} />
*/