"use client";

import { Lexend } from 'next/font/google';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';
import Awards from '@/components/Awards';
import Game from '@/components/Game';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

    const exampleGames = [
        {
            title: 'A Space for the Unbound',
            cover: '/games-covers/a-space-for-the-unbound-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Barotrauma',
            cover: '/games-covers/barotrauma-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Big Ambitions',
            cover: '/games-covers/big-ambitions-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Bloody Hell',
            cover: '/games-covers/bloody-hell-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Boneraiser Minions',
            cover: '/games-covers/boneraiser-minions-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Crab Champions',
            cover: '/games-covers/crab-champions-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Dead Space',
            cover: '/games-covers/dead-space-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Dredge',
            cover: '/games-covers/dredge-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Half Life: MMod',
            cover: '/games-covers/half-life-mmod-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'HI-FI Rush',
            cover: '/games-covers/hi-fi-rush-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Hogwarts Legacy',
            cover: '/games-covers/hogwarts-legacy-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Larcin Lazer',
            cover: '/games-covers/larcin-lazer-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Luck be a Landlord',
            cover: '/games-covers/luck-be-a-landlord-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Octopath Traveler II',
            cover: '/games-covers/octopath-traveler-ii-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Pineapple on Pizza',
            cover: '/games-covers/pineapple-on-pizza-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Pizza Tower',
            cover: '/games-covers/pizza-tower-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Resident Evil 4',
            cover: '/games-covers/resident-evil-4-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'The Last Spell',
            cover: '/games-covers/the-last-spell-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'The Murder of Sonic the Hedgehog',
            cover: '/games-covers/the-murder-of-sonic-the-hedgehog-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
        {
            title: 'Vertigo 2',
            cover: '/games-covers/vertigo-2-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/'
        },
    ];

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
        <div className=''>
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
            </div>
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
            <div className='flex items-center justify-center lg:pl-5'>
                <div className='px-10 py-3 grid grid-cols-3 gap-6 md:grid-cols-5 md:gap-6 lg:grid-cols-8 lg:gap-0 xl:grid-cols-9 xl:gap-0'>
                    {exampleGames.map((game) => (
                        <Game
                            key={game.title}
                            title={game.title}
                            cover={game.cover}
                            genre={game.genre}
                            realease_date={game.realease_date}
                            publisher={game.publisher}
                            developer={game.developer}
                            steam_rating={game.steam_rating}
                            platform_rating={game.platform_rating}
                            url={game.url}
                        />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}