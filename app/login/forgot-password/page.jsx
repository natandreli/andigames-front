"use client";

import { useRouter } from 'next/navigation';
import { Lexend, Manrope } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

    const router = useRouter();

    const handleLogin = () => {
        router.push('/home');
    }

    return (
        <div className='h-screen bg-neutral-900 bg-opacity-70'>
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
                    <h1 className={`font-bold text-3xl sm:text-5xl text-center text-white leading-tight ${lexend.className}`}>
                        ¡Qué bueno volver a verte!
                    </h1>
                    <h2 className={`font-semibold text-lg sm:text-2xl mt-5 text-center text-neutral-400 leading-tight ${lexend.className}`}>
                        ¡Ingresa para jugar, calificar y conectar!
                    </h2>
                </div>
                <div className="w-full max-w-md items-center justify-center m-10 bg-neutral-800 rounded p-10">
                    <form className="">
                        <div className="mb-4">
                            <h2 className={`font-bold text-xl sm:text-3xl text-center text-white ${lexend.className}`}>
                                Inicia sesión
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
                                Contraseña <span className="text-red-500">*</span>
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Ingresa tu contraseña"></input>
                        </div>
                        <div className="mb-4">
                            <button
                                className="w-full bg-blue-800 hover:bg-blue-600 text-white font-base py-2 px-4 rounded"
                                onClick={() =>
                                    handleLogin()}
                            >
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                    <div className="">
                        <button
                            className="w-full hover:text-blue-400 text-blue-600 font-sm px-4 rounded"
                            onClick={() =>
                                router.push('/forgot-password')}
                        >
                            ¿Olvidaste tu contraseña?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}