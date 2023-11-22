"use client";

import { Lexend } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Particle from '@/components/Particle';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] });

export default function NotFound() {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <Particle />
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
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
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='container mx-auto px-10 text-center'>
                    <h1 className={`font-bold text-2xl sm:text-4xl text-center text-white leading-tight ${lexend.className}`}>
                        ¡Uy! Página no encontrada...
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbbf24" className="my-5 inline-block w-20 h-20">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z" clipRule="evenodd" />
                    </svg>
                    <h2 className={`font-semibold text-base sm:text-xl text-center text-neutral-400 leading-tight ${lexend.className}`}>
                        Parece que la página que buscas no existe
                    </h2>
                </div>
            </div>
        </div>

    );
};
