"use client";

import { Lexend, Manrope } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

    const router = useRouter();

    return (
        <div>
            <nav className="flex items-center justify-between p-6 pl-10 pr-10">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className={`font-bold text-sl tracking-tight ${lexend.className}`}>
                        <button
                            onClick={() => router.push('/')}
                        >
                            ANDIGAMES
                        </button>
                    </span>
                </div>
            </nav>
            <div className='container mx-auto px-10 pt-5 text-center'>
                <h1 className={`font-bold text-5xl text-center text-white leading-tight ${lexend.className}`}>Juega, califica y conecta: Tu plataforma para compartir tu experiencia gamer</h1>
                <h2 className={`text-base mt-5 text-center text-white leading-tight`}>¡Bienvenido a ANDIGAMES! Tu punto de partida para sumergirte en el mundo de los videojuegos, calificar tus experiencias y unirte a una comunidad de jugadores apasionados.</h2>
                <button
                    className="m-auto mt-10 bg-blue-800 hover:bg-blue-600 text-white px-4 py-4 rounded-full"
                    onClick={() => router.push('/signup')}
                >
                    Comenzar en ANDIGAMES
                </button>
            </div>
        </div>
    )
}