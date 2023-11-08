"use client";

import { Lexend, Manrope } from 'next/font/google';
import { useRouter } from 'next/navigation';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Navbar({actualPage}) {

    const router = useRouter();

    return (
        <nav className="flex items-center p-6 pl-10 pr-10 w-full">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className={`font-bold sm:text-lg text-xs tracking-tight ${lexend.className}`}>
                    ANDIGAMES
                </span>
            </div>
            <div className="block text-xs font-semibold">
                <ul className="flex">
                    <li className="mr-6">
                        <a className={actualPage === 'home' ? "text-neutral-600 cursor-not-allowed" : "text-white hover:text-blue-600"} onClick={() => router.push('/home')}>Inicio</a>
                    </li>
                    <li className="mr-6">
                        <a className={actualPage === 'home/friends' ? "text-neutral-600 cursor-not-allowed" : "text-white hover:text-blue-600"} onClick={() => router.push('/home')}>Amigos</a>
                    </li>
                    <li className="mr-6">
                        <a className={actualPage === 'home/recommended' ? "text-neutral-600 cursor-not-allowed" : "text-white hover:text-blue-600"} onClick={() => router.push('/home')}>Recomendado</a>
                    </li>
                    <li className="mr-6">
                        <a className={actualPage === 'home/new' ? "text-neutral-600 cursor-not-allowed" : "text-white hover:text-blue-600"} onClick={() => router.push('/home')}>Nuevo</a>
                    </li>
                    <li className="mr-6">
                        <a className={actualPage === 'home/what-to-play' ? "text-neutral-600 cursor-not-allowed" : "text-white hover:text-blue-600"} onClick={() => router.push('/home')}>¿Qué debería jugar?</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}