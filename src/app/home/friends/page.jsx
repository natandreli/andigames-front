"use client";

import { Lexend } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ActivityCard from '@/components/ActivityCard';
import Particle from '@/components/Particle';

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
            <Particle />
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
            </div>
            <Navbar actualPage='home/friends' />
            <div className="px-10 xl:px-20 flex flex-wrap items-center text-sm lg:text-base">
                <div className="pt-1 sm:pt-2 relative w-full mt-4 sm:mt-0">
                    <button type="submit" className="flex items-center justify-center h-9 sm:h-11 w-11 bg-[#A61145] hover:bg-[#D92B68] hover:bg-opacity-30 bg-opacity-20 cursor-pointer absolute left-0 top-0 pl-1 mt-1 sm:mt-2 rounded-l-md">
                        <svg className="h-4 w-4 fill-[#A61145]" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" viewBox="0 0 56.966 56.966">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                    <input
                        className="pl-14 text-sm sm:text-base border h-9 sm:h-11 border-[#A61145] border-opacity-50 border-2 bg-neutral-900 placeholder-neutral-400 bg-opacity-5 text-neutral-400 px-4 rounded-md focus:outline-none w-full"
                        name="search"
                        placeholder="Buscar amigo"
                        value={searchValue}
                        onChange={handleSearchInputChange}
                    />
                </div>
            </div>
            {!showActivity && (
                <div className="pr-10 pl-11 xl:pl-20 pt-3 text-sm text-neutral-400">
                    Buscar "<span className="font-bold">{searchValue}</span>"
                </div>
            )}
            <div className='px-10 xl:px-20 py-4'>
                {showActivity && (
                    <div>
                        <ActivityCard {...reviewData} />
                    </div>
                )}
            </div>
        </div >
    )
}