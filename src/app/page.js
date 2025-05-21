'use client'
import Link from "next/link"
export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="text-white glahs w-[20rem] px-5 py-10 text-center
      flex flex-col gap-5">
        <h1 className="fira-sans-bold text-2xl">Ui para Rells <Link href="https://www.instagram.com/programmer.andresrw/">@programmer.andresrw</Link></h1>
        <p>Hace un tiempo he querido mostrar mis avances en diferentes comunidades
          como frontendmentor, Codewars y  HackThebox. Por eso este proyecto
          esta es una ui que grabo para hacer mis shorts o rells.
        </p>
        <div className="flex gap-5 justify-center items-center">
          <Link href="/codes" className="glahs px-5 py-2">Ir a Codes</Link>
          <Link href="/hacking" className="glahs px-5 py-2">Ir a Hacking</Link>
        </div>
      </div>
    </div>
  )
}
