"use client";

import { Lexend } from 'next/font/google';
import Particle from '@/components/Particle';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] });

export default function Loading() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
            </div>
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
                <nav className="items-center justify-between p-7 pl-10 pr-10 w-full">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className={`font-bold sm:text-lg text-xs tracking-tight pt-1 ${lexend.className}`}>
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
                </nav>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='container mx-auto px-10 text-center'>
                    <h1 className={`font-bold text-2xl sm:text-4xl text-center text-white leading-tight ${lexend.className}`}>
                        Cargando...
                    </h1>
                    <img src='/AndiGamesLogo-disk.png'
                        alt='AndiGames Logo'
                        className={`my-5 inline-block w-[100px] h-auto animate-spin`}
                    />
                </div>
            </div>
        </div>
    );
}