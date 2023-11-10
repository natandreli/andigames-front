"use client";

import { useRouter } from 'next/navigation';
import { Lexend, Manrope } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

  const router = useRouter();

  const handleSignup = () => {
    router.push('/home');
  }

  return (
    <div className=''>
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
            Desbloquea un universo donde los videojuegos son la clave
          </h1>
          <h2 className={`font-semibold text-base sm:text-xl mt-5 text-center text-neutral-400 leading-tight ${lexend.className}`}>
            ¡Regístrate para jugar, calificar y conectar!
          </h2>
        </div>
        <div className="w-full max-w-md items-center justify-center m-10 bg-neutral-800 rounded p-10">
          <div className="mb-4">
            <h2 className={`font-bold text-lg sm:text-2xl text-center text-white ${lexend.className}`}>
              Regístrate
            </h2>
          </div>
          <div className="mb-4">
            <label className="block text-neutral-400 text-sm font-bold mb-2">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="ejemplo@correo.com"></input>
          </div>
          <div className="mb-4">
            <label className="block text-neutral-400 text-sm font-bold mb-2">
              Apodo
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nickname" type="text" placeholder="¿Cómo te gustaría que te llamaramos?"></input>
          </div>
          <div className="mb-4">
            <label className="block text-neutral-400 text-sm font-bold mb-2">
              Usuario <span className="text-red-500">*</span>
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ingresa un nombre de usuario"></input>
          </div>
          <div className="mb-4">
            <label className="block text-neutral-400 text-sm font-bold mb-2">
              Contraseña <span className="text-red-500">*</span>
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Ingresa una contraseña"></input>
          </div>
          <div className="mb-4">
            <label className="block text-neutral-400 text-sm font-bold mb-2">
              Contraseña <span className="text-red-500">*</span>
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password2" type="password" placeholder="Ingresa nuevamente la contraseña"></input>
          </div>
          <div className="mb-4">
            <label className="block text-neutral-400 text-sm font-bold mb-2">
              Fecha de nacimiento <span className="text-red-500">*</span>
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password2" type="birthdate" placeholder="Ingresa tu fecha de nacimiento"></input>
          </div>
          <div className="w-full mb-6">
            <label className="block text-neutral-400 text-sm font-bold mb-2">
              Género <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Femenino</option>
                <option>Masculino</option>
                <option>Otro</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div className="mb-9">
            <label className="block text-neutral-400 text-sm">
              <input className="mr-2 accent-blue-800" type="checkbox"></input>
              <span>
                Estoy de acuerdo con los términos y condiciones <span className="text-red-500">*</span>
              </span>
            </label>
          </div>
          <div className="mb-4">
            <button
              className="w-full bg-blue-800 hover:bg-blue-600 text-white font-base py-2 px-4 rounded"
              onClick={() =>
                handleSignup()}
            >
              Registrarme
            </button>
          </div>
          <div className="">
            <button
              className="w-full hover:text-blue-400 text-blue-600 font-sm px-4 rounded"
              onClick={() =>
                router.push('../login')}
            >
              ¿Ya eres parte de ANDIGAMES? Inicia sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}