"use client";

import { useRouter } from 'next/navigation';
import { Lexend } from 'next/font/google';
import Particle from '@/components/Particle';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

    const router = useRouter();

    const handleLogin = () => {
        router.push('/home');
    }

    return (
        <div className=''>
            <Particle />
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
            </div>
            <nav className="items-center justify-between p-7 pl-10 pr-10 w-full">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className={`font-bold sm:text-lg text-xs tracking-tight pt-1 ${lexend.className}`}>
                        <button
                            onClick={() => router.push('/')}
                        >
                            ANDIGAMES
                        </button>
                    </span>
                </div>
            </nav>
            <div className='flex flex-col items-center justify-center'>
                <div className='container mx-auto px-10 text-center'>
                    <h1 className={`font-bold text-2xl sm:text-4xl text-center text-white leading-tight ${lexend.className}`}>
                        Ups, ¡Vamos a solucionar esto!
                    </h1>
                    <h2 className={`font-semibold text-base sm:text-xl mt-5 text-center text-neutral-400 leading-tight ${lexend.className}`}>
                        Recuperemos tu contraseña
                    </h2>
                </div>
                <div className="w-full max-w-md items-center justify-center m-10 bg-neutral-800 rounded p-10">
                    <div className="mb-4">
                        <h2 className={`font-bold text-lg sm:text-2xl text-center text-white ${lexend.className}`}>
                            Recupera tu contraseña
                        </h2>
                    </div>
                    <div className="mb-4">
                        <label className="block text-neutral-400 text-sm font-bold mb-2">
                            Usuario <span className="text-red-500">*</span>
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ingresa tu nombre de usuario"></input>
                    </div>
                    <div className="mb-9">
                        <label className="block text-neutral-400 text-sm font-bold mb-2">
                            Correo electrónico <span className="text-red-500">*</span>
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Ingresa tu correo electrónico"></input>
                    </div>
                    <div className="mb-4">
                        <button
                            className="w-full bg-blue-800 hover:bg-blue-600 text-white font-base py-2 px-4 rounded"
                            onClick={() =>
                                router.push('/login/forgot-password/enter-code')}
                        >
                            Enviar un código de recuperación
                        </button>
                    </div>
                    <div className="">
                        <button
                            className="w-full hover:text-blue-400 text-blue-600 font-sm px-4 rounded"
                            onClick={() =>
                                router.push('/login')}
                        >
                            ¡Espera! Recuerdo mi contraseña
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}