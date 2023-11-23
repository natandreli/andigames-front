"use client";

import { Lexend } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Particle from '@/components/Particle';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

  const router = useRouter();

  const [openModalLogin, setOpenModalLogin] = useState(false)
  const [openModalSingup, setOpenModalSingup] = useState(false)

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  function handleLogin() {
    router.push('/home');
  }

  function handleSignup() {
    router.push('/home');
  }

  return (
    <div>
      <Particle />
      <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
      </div>
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 w-full">
        <div className="flex items-center flex-shrink-0 text-white">
          <span className={`font-bold sm:text-lg text-xs tracking-tight ${lexend.className}`}>
            <button
              onClick={() => router.push('/')}
            >
              <img src='/AndiGamesLogo-white-big-letters.png'
                alt='AndiGames Logo'
                className={`mt-1 w-[120px] sm:w-[160px] md:w-[200px] min-w-[50px] h-auto`}>
              </img>
            </button>
          </span>
        </div>
        <div className="w-full flex items-center">
          <div className={`text-[10px] sm:text-sm ml-auto min-[380px]:text-xs`}>
            <button
              className="text-white hover:text-[#FF5B94] py-2 px-4 rounded-full mr-2"
              onClick={() => setOpenModalLogin(true)}
            >
              Inicia sesión
            </button>
            <button
              className="bg-white hover:bg-[#A61145] text-neutral-700 hover:text-white py-2 px-4 rounded-full"
              onClick={() => setOpenModalSingup(true)}
            >
              Regístrate
            </button>
          </div>
        </div>
      </nav>
      <div className='container mt-[100px] mx-auto px-10 pt-5 text-center'>
        <h1 className={`font-bold text-2xl sm:text-4xl text-center text-white sm:leading-tight ${lexend.className}`}>Juega, califica y conecta: Tu plataforma para compartir tu experiencia gamer</h1>
        <h2 className={`font-light text-base sm:text-lg mt-7 sm:px-[100px] text-center text-white sm:leading-tight`}>¡Bienvenido a ANDIGAMES! Tu punto de partida para sumergirte en el mundo de los videojuegos, calificar tus experiencias y unirte a una comunidad de jugadores apasionados.</h2>
        <button
          className="m-auto mt-10 bg-[#6500E1] hover:bg-[#751DE2] text-white px-10 py-3 rounded-full"
          onClick={() => setOpenModalSingup(true)}
        >
          Comenzar
        </button>
      </div>

      <Transition.Root show={openModalLogin} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenModalLogin}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-900 bg-opacity-70 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="pt-4 pb-8 sm:py-4 px-4 relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl transition-all sm:m-8 w-xl sm:w-full sm:max-w-[725px]">
                  <button className="absolute top-4 right-4" onClick={() => setOpenModalLogin(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#737373" className="w-5 h-5 hover:fill-neutral-400">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                  <div className="bg-neutral-800 sm:p-6">
                    <div className="mt-5 sm:mt-0">
                      <div className="text-left text-neutral-400 text-sm sm:text-base pt-10">
                        <div className='flex flex-col items-center justify-center'>
                          <div className='container mx-auto text-center'>
                            <h1 className={`font-bold text-xl md:text-3xl text-center text-white leading-tight ${lexend.className}`}>
                              ¡Qué bueno volver a verte!
                            </h1>
                            <h2 className={`font-semibold px-6 sm:px-0 text-sm md:text-lg mt-5 text-center text-neutral-400 leading-tight ${lexend.className}`}>
                              ¡Ingresa para jugar, calificar y conectar!
                            </h2>
                          </div>
                          <div className="w-full max-w-md text-xs sm:text-sm items-center justify-center bg-neutral-800 rounded px-6 md:px-8 lg:px-10 py-10">
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
                              <div className="relative">
                                <input
                                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  id="password"
                                  type={showPassword ? 'text' : 'password'}
                                  placeholder="Ingresa una contraseña"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                  type="button"
                                  className="absolute inset-y-0 right-0 px-3 py-2 bg-transparent"
                                  onClick={handleTogglePassword}
                                >
                                  {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5 fill-neutral-500">
                                      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                      <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                  ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5 fill-neutral-500">
                                      <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
                                      <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                                    </svg>
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className="mb-4">
                              <button
                                className="w-full bg-[#6500E1] hover:bg-opacity-80 text-white font-base py-2 px-4 rounded"
                                onClick={() =>
                                  handleLogin()}
                              >
                                Iniciar sesión
                              </button>
                            </div>
                            <div className="">
                              <button
                                className="w-full text-xs sm:text-sm hover:text-[#FF5B94] text-neutral-400 rounded"
                                onClick={() => {
                                  setOpenModalSingup(true)
                                  setOpenModalLogin(false)
                                }}
                              >
                                ¿Nuevo en ANDIGAMES? Regístrate ahora
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openModalSingup} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenModalSingup}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-900 bg-opacity-70 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="pt-4 sm:py-4 px-4 relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl transition-all sm:m-8 w-xl sm:w-full sm:max-w-[725px]">
                  <button className="absolute top-4 right-4" onClick={() => setOpenModalSingup(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#737373" className="w-5 h-5 hover:fill-neutral-400">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                  <div className="bg-neutral-800 sm:p-6">
                    <div className="mt-5 sm:mt-0">
                      <div className="text-left text-neutral-400 text-sm sm:text-base pt-10">
                        <div className='flex flex-col items-center justify-center'>
                          <div className='container mx-auto text-center'>
                            <h1 className={`font-bold text-xl md:text-3xl text-center text-white leading-tight ${lexend.className}`}>
                              Desbloquea un universo donde los videojuegos son la clave
                            </h1>
                            <h2 className={`font-semibold px-6 sm:px-0 text-sm md:text-lg mt-5 text-center text-neutral-400 leading-tight ${lexend.className}`}>
                              ¡Regístrate para jugar, calificar y conectar!
                            </h2>
                          </div>
                          <div className="w-full max-w-md items-center text-xs sm:text-sm justify-center bg-neutral-800 rounded px-6 md:px-8 lg:px-10 py-10">
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
                              <div className="relative">
                                <input
                                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  id="password"
                                  type={showPassword ? 'text' : 'password'}
                                  placeholder="Ingresa una contraseña"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                  type="button"
                                  className="absolute inset-y-0 right-0 px-3 py-2 bg-transparent"
                                  onClick={handleTogglePassword}
                                >
                                  {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5 fill-neutral-500">
                                      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                      <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                  ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5 fill-neutral-500">
                                      <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
                                      <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                                    </svg>
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className="mb-4">
                              <label className="block text-neutral-400 text-sm font-bold mb-2">
                                Fecha de nacimiento <span className="text-red-500">*</span>
                              </label>
                              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password2" type="birthdate" placeholder="Ingresa tu fecha de nacimiento"></input>
                            </div>
                            <div className="w-full mb-9">
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
                            {/* <div className="mb-9">
                              <label className="block text-neutral-400 text-sm">
                                <input className="mr-2 accent-blue-800" type="checkbox"></input>
                                <span>
                                  Estoy de acuerdo con los términos y condiciones <span className="text-red-500">*</span>
                                </span>
                              </label>
                            </div> */}
                            <div className="mb-4">
                              <button
                                className="w-full bg-[#6500E1] hover:bg-opacity-80 text-white font-base py-2 px-4 rounded"
                                onClick={() =>
                                  handleSignup()}
                              >
                                Registrarme
                              </button>
                            </div>
                            <div className="">
                              <button
                                className="w-full text-xs sm:text-sm hover:text-[#FF5B94] text-neutral-400 rounded"
                                onClick={() => {
                                  setOpenModalLogin(true)
                                  setOpenModalSingup(false)
                                }}
                              >
                                ¿Ya eres parte de ANDIGAMES? Inicia sesión
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div >
  )
}
