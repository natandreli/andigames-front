"use client";

import { Lexend } from 'next/font/google';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';
import Awards from '@/components/Awards';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

    const [isButtonGamesDisabled, setButtonGamesDisabled] = useState(true);
    const [isButtonWishListDisabled, setButtonWishListDisabled] = useState(false);
  
    const handleButtonGamesClick = () => {
      setButtonGamesDisabled(true);
      setButtonWishListDisabled(false);
    };
  
    const handleButtonWishListClick = () => {
      setButtonGamesDisabled(false);
      setButtonWishListDisabled(true);
    };

    const [isButtonAllDisabled, setButtonAllDisabled] = useState(true);
    const [isButtonLoveDisabled, setButtonLoveDisabled] = useState(false);
    const [isButtonLikeDisabled, setButtonLikeDisabled] = useState(false);
    const [isButtonMehDisabled, setButtonMehDisabled] = useState(false);
    const [isButtonDislikeDisabled, setButtonDislikeDisabled] = useState(false);
    const [isButtonHateDisabled, setButtonHateDisabled] = useState(false);

    const handleButtonAllClick = () => {
        setButtonAllDisabled(true);
        setButtonLoveDisabled(false);
        setButtonLikeDisabled(false);
        setButtonMehDisabled(false);
        setButtonDislikeDisabled(false);
        setButtonHateDisabled(false);
    };

    const handleButtonLoveClick = () => {
        setButtonAllDisabled(false);
        setButtonLoveDisabled(true);
        setButtonLikeDisabled(false);
        setButtonMehDisabled(false);
        setButtonDislikeDisabled(false);
        setButtonHateDisabled(false);
    };
    const handleButtonLikeClick = () => {
        setButtonAllDisabled(false);
        setButtonLoveDisabled(false);
        setButtonLikeDisabled(true);
        setButtonMehDisabled(false);
        setButtonDislikeDisabled(false);
        setButtonHateDisabled(false);
    };
    const handleButtonMehClick = () => {
        setButtonAllDisabled(false);
        setButtonLoveDisabled(false);
        setButtonLikeDisabled(false);
        setButtonMehDisabled(true);
        setButtonDislikeDisabled(false);
        setButtonHateDisabled(false);
    };
    const handleButtonDislikeClick = () => {
        setButtonAllDisabled(false);
        setButtonLoveDisabled(false);
        setButtonLikeDisabled(false);
        setButtonMehDisabled(false);
        setButtonDislikeDisabled(true);
        setButtonHateDisabled(false);
    };
    const handleButtonHateClick = () => {
        setButtonAllDisabled(false);
        setButtonLoveDisabled(false);
        setButtonLikeDisabled(false);
        setButtonMehDisabled(false);
        setButtonDislikeDisabled(false);
        setButtonHateDisabled(true);
    };

    return (
        <div className='h-full w-screen bg-center bg-neutral-900 bg-opacity-70'>
            <Navbar actualPage='home' />
            <div className={`grid grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 w-screen justify-center items-center py-2 px-10`}>
                <ProfileCard
                    games={'100'}
                    following={'50'}
                    followers={'150'}
                    nickname={'natibara la capibara'}
                    username={'natandreli'}
                    description={'Estoy sufriendo un poco con el desarrollo de esta página, pero me alegro de haber logrado llegar a este punto.'}
                />
                <Awards />
            </div>
            <div className={``}>
                <nav className="flex items-center sm:py-6 px-10 w-full">
                    <div className="block text-[10px] lg:text-sm">
                        <ul className="flex">
                            <li className="mr-4 mb-2">
                                <button
                                    className={`${isButtonGamesDisabled
                                            ? 'text-neutral-400 cursor-not-allowed border-neutral-400 font-bold'
                                            : 'text-white border-transparent hover:text-blue-600 hover:border-blue-600'
                                        }  p-2 border-b-4`}
                                    onClick={handleButtonGamesClick}
                                    disabled={isButtonGamesDisabled}
                                >
                                    Juegos
                                </button>
                            </li>
                            <li className="mb-2">
                                <button
                                    className={`${isButtonWishListDisabled
                                            ? 'text-neutral-400 cursor-not-allowed border-neutral-400 font-bold'
                                            : 'text-white border-transparent hover:text-blue-600 hover:border-blue-600'
                                        }  p-2 border-b-4`}
                                    onClick={handleButtonWishListClick}
                                    disabled={isButtonWishListDisabled}
                                >
                                    Lista de deseos
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={``}>
                <nav className="flex items-center sm:py-2 px-10 w-full">
                    <div className="block text-[8px] lg:text-xs text-neutral-400">
                        <ul className="flex">
                            <li className="mr-4 mb-2">
                                <button
                                    className={`${isButtonAllDisabled
                                            ? 'cursor-not-allowed bg-white font-bold text-neutral-700'
                                            : 'hover:text-white hover:bg-blue-800'
                                        }  px-2 py-3 rounded-lg`}
                                    onClick={handleButtonAllClick}
                                    disabled={isButtonAllDisabled}
                                >
                                    Todos
                                </button>
                            </li>
                            <li className="mr-4 mb-2">
                                <button
                                    className={`${isButtonLoveDisabled
                                            ? 'cursor-not-allowed bg-white font-bold text-neutral-700'
                                            : 'hover:text-white hover:bg-blue-800'
                                        }  px-2 py-3 rounded-lg`}
                                    onClick={handleButtonLoveClick}
                                    disabled={isButtonLoveDisabled}
                                >
                                    Me encantaron
                                </button>
                            </li>
                            <li className="mr-4 mb-2">
                                <button
                                    className={`${isButtonLikeDisabled
                                            ? 'cursor-not-allowed bg-white font-bold text-neutral-700'
                                            : 'hover:text-white hover:bg-blue-800'
                                        }  px-2 py-3 rounded-lg`}
                                    onClick={handleButtonLikeClick}
                                    disabled={isButtonLikeDisabled}
                                >
                                    Me gustaron
                                </button>
                            </li>
                            <li className="mr-4 mb-2">
                                <button
                                    className={`${isButtonMehDisabled
                                            ? 'cursor-not-allowed bg-white font-bold text-neutral-700'
                                            : 'hover:text-white hover:bg-blue-800'
                                        }  px-2 py-3 rounded-lg`}
                                    onClick={handleButtonMehClick}
                                    disabled={isButtonMehDisabled}
                                >
                                    Meh
                                </button>
                            </li>
                            <li className="mr-4 mb-2">
                                <button
                                    className={`${isButtonDislikeDisabled
                                            ? 'cursor-not-allowed bg-white font-bold text-neutral-700'
                                            : 'hover:text-white hover:bg-blue-800'
                                        }  px-2 py-3 rounded-lg`}
                                    onClick={handleButtonDislikeClick}
                                    disabled={isButtonDislikeDisabled}
                                >
                                    No me gustaron
                                </button>
                            </li>
                            <li className="mr-4 mb-2">
                                <button
                                    className={`${isButtonHateDisabled
                                            ? 'cursor-not-allowed bg-white font-bold text-neutral-700'
                                            : 'hover:text-white hover:bg-blue-800'
                                        }  px-2 py-3 rounded-lg`}
                                    onClick={handleButtonHateClick}
                                    disabled={isButtonHateDisabled}
                                >
                                    Fueron lo peor
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-7'>
            </div>
        </div>
    )
}