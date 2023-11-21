"use client";

import { Lexend } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ActivityCard from '@/components/ActivityCard';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

    const [showActivity, setShowActivity] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        setShowActivity(value === '');
    };

    const reviewData = {
        gameTitle: 'Nombre del Juego',
        content: 'Esta es una reseña sobre el juego. Me gustó mucho...',
        rating: 4, // La calificación del juego
      };

    return (
        <div className=''>
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
            </div>
            <Navbar actualPage='home/friends' />
            <div className="px-10 flex flex-wrap items-center text-sm lg:text-base">
                <div className="pt-1 sm:pt-2 relative w-full mt-4 sm:mt-0">
                    <div className="absolute left-0 top-0 mt-4 sm:mt-5 ml-4">
                        <svg className="h-3 w-3 sm:h-5 sm::w-5 fill-neutral-400" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" viewBox="0 0 56.966 56.966">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </div>
                    <input
                        className="border h-9 sm:h-11 pl-10 border-neutral-500 bg-neutral-900 bg-opacity-70 text-neutral-400 px-4 rounded-md focus:outline-none w-full"
                        name="search"
                        placeholder="Buscar amigo"
                        value={searchValue}
                        onChange={handleSearchInputChange}
                    />
                </div>
            </div>
            {!showActivity && (
                <div className="pr-10 pl-11 pt-3 text-sm text-neutral-400">
                    Buscar "<span className="font-bold">{searchValue}</span>"
                </div>
            )}
            <div className='px-10 py-4'>
                {showActivity && (
                    <div>
                        <ActivityCard {...reviewData} />
                    </div>
                )}
            </div>
        </div >
    )
}