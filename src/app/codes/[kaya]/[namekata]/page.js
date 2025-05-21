'use client'
import { useParams } from "next/navigation";

export default function PageSingleKata() {
    const { kaya, namekata } = useParams();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-2xl text-white mb-6">
                Kata: {namekata}
            </h1>
            <p className="text-white">Categoría: {kaya}</p>
            {/* Aquí puedes mostrar más información sobre la kata */}
        </div>
    );
}