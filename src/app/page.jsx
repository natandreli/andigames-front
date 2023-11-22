"use client";

import { Lexend, Manrope } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Particle from '@/components/Particle';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

  const router = useRouter();

  return (
    <div>
      <Particle />
      <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
      </div>
      <nav className="flex items-center justify-between p-6 pl-10 pr-10 w-full">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className={`font-bold sm:text-lg text-xs tracking-tight ${lexend.className}`}>
            <button
              onClick={() => router.push('/')}
            >
              ANDIGAMES
            </button>
          </span>
        </div>
        <div className="w-full flex items-center">
          <div className={`text-[10px] sm:text-sm ml-auto min-[380px]:text-xs`}>
            <button
              className="text-white hover:text-blue-400 py-2 px-4 rounded-full mr-2"
              onClick={() => router.push('/login')}
            >
              Inicia sesión
            </button>
            <button
              className="bg-white hover:bg-blue-800 text-neutral-700 hover:text-white py-2 px-4 rounded-full"
              onClick={() => router.push('/signup')}
            >
              Regístrate
            </button>
          </div>
        </div>
      </nav>
      <div className='container mt-[100px] mx-auto px-10 pt-5 text-center'>
        <h1 className={`font-bold text-2xl sm:text-4xl text-center text-white sm:leading-tight ${lexend.className}`}>Juega, califica y conecta: Tu plataforma para compartir tu experiencia gamer</h1>
        <h2 className={`font-light text-base sm:text-lg mt-7 px-[100px] text-center text-white sm:leading-tight`}>¡Bienvenido a ANDIGAMES! Tu punto de partida para sumergirte en el mundo de los videojuegos, calificar tus experiencias y unirte a una comunidad de jugadores apasionados.</h2>
        <button
          className="m-auto mt-10 bg-blue-800 hover:bg-blue-600 text-white px-10 py-3 rounded-full"
          onClick={() => router.push('/signup')}
        >
          Comenzar
        </button>
      </div>
    </div>
  )
}
