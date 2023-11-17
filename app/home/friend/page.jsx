"use client";

import { Lexend } from 'next/font/google';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProfileCardFriend from '@/components/ProfileCardFriend';
import Awards from '@/components/Awards';
import Game from '@/components/Game';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

    const exampleGames = [
        {
            id: 1,
            title: 'A Space for the Unbound',
            cover: '/games-covers/a-space-for-the-unbound-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/',
            me_review: {
                nickname: 'Natibara la capibara',
                review_date: '13 Nov, 2023',
                rating: '9.5',
                commentary: 'Me encantó este juego, es muy bueno y me gustó mucho.'
            },
            friend_review: {
                nickname: 'Dres la locomotora',
                review_date: '31 Nov, 2022',
                rating: '7.0',
                commentary: 'Meh, mediocre.'
            }
        },
        {
            id: 2,
            title: 'Barotrauma',
            cover: '/games-covers/barotrauma-cover.jpeg',
            genre: 'Aventura, Indie',
            realease_date: '19 Ene, 2023',
            publisher: 'Toge Productions',
            developer: 'Mojiken',
            steam_rating: '9.3',
            platform_rating: '9.5',
            url: '/app/1201270/',
            me_review: {
                nickname: 'Natibara la capibara',
                review_date: '13 Nov, 2023',
                rating: '9.5'
            }
        },
        {
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
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
            id: 7,
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
            id: 8,
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
            id: 9,
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
            id: 10,
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
            id: 11,
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
            id: 12,
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
            id: 13,
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
            id: 14,
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
            id: 15,
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
            id: 16,
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
            id: 17,
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
            id: 18,
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
            id: 19,
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
            id: 20,
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

    const exampleFollowers = [
        {
            username: 'pepito',
            nickname: 'pepe el pollo',
            games: '98',
            photo: '/profile2.png'
        },
        {
            username: 'natibara',
            nickname: 'natibara la capibara',
            games: '98',
            photo: '/profile.png'
        },
        {
            username: 'mantres',
            nickname: 'dres la mantis',
            games: '98',
            photo: '/profile2.png'
        },
        {
            username: 'natandreli',
            nickname: 'naty la andy',
            games: '98',
            photo: '/profile.png'
        },
        {
            username: 'horsepepe',
            nickname: 'pepe el caballo',
            games: '98',
            photo: '/profile2.png'
        }
    ];

    const exampleFollowing = [
        {
            username: 'pepito',
            nickname: 'pepe el pollo',
            games: '98',
            photo: '/profile2.png'
        },
        {
            username: 'natibara',
            nickname: 'natibara la capibara',
            games: '98',
            photo: '/profile.png'
        },
        {
            username: 'mantres',
            nickname: 'dres la mantis',
            games: '98',
            photo: '/profile2.png'
        },
        {
            username: 'natandreli',
            nickname: 'naty la andy',
            games: '98',
            photo: '/profile.png'
        },
        {
            username: 'horsepepe',
            nickname: 'pepe el caballo',
            games: '98',
            photo: '/profile2.png'
        }
    ];

    const genres = [
        "Acción",
        "Aventura",
        "Producción de Audio",
        "Casual",
        "Ilustración y Diseño",
        "Acceso Temprano",
        "Educación",
        "Gratis",
        "Desarrollo de Videojuegos",
        "Gore",
        "Indie",
        "Multiplayer",
        "Desnudos",
        "Carreras",
        "RPG",
        "Contenido Sexual",
        "Simulación",
        "Deportes",
        "Estrategia",
        "Género Desconocido",
        "Utilidades",
        "Producción de Video",
        "Violencia",
        "Publicación Web"
    ];

    const [setThirdNavbar, setThirdNavbarState] = useState(true);

    const [isButtonGamesDisabled, setButtonGamesDisabled] = useState(true);
    const [isButtonWishListDisabled, setButtonWishListDisabled] = useState(false);

    const handleButtonGamesClick = () => {
        setButtonGamesDisabled(true);
        setButtonWishListDisabled(false);

        setThirdNavbarState(true);
    };

    const handleButtonWishListClick = () => {
        setButtonGamesDisabled(false);
        setButtonWishListDisabled(true);

        setThirdNavbarState(false);
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
                <ProfileCardFriend
                    photo={'/profile.png'}
                    games={exampleGames.length}
                    following={exampleFollowing}
                    followers={exampleFollowers}
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
            <div className="flex flex-wrap items-center sm:py-2 px-10 w-full sm:mt-0 mt-4">
                {setThirdNavbar &&
                    <div className="block text-[8px] lg:text-xs text-neutral-400">
                        <ul className="flex flex-wrap">
                            <li className="mr-4 mb-2">
                                <button
                                    className={`${isButtonAllDisabled
                                        ? 'cursor-not-allowed bg-white font-bold text-neutral-700'
                                        : 'hover:text-white hover:bg-blue-800'
                                        }  px-2 sm:py-3 py-2 rounded-lg`}
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
                                        }  px-2 sm:py-3 py-2 rounded-lg`}
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
                                        }  px-2 sm:py-3 py-2 rounded-lg`}
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
                                        }  px-2 sm:py-3 py-2 rounded-lg`}
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
                                        }  px-2 sm:py-3 py-2 rounded-lg`}
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
                                        }  px-2 sm:py-3 py-2 rounded-lg`}
                                    onClick={handleButtonHateClick}
                                    disabled={isButtonHateDisabled}
                                >
                                    Fueron lo peor
                                </button>
                            </li>
                        </ul>
                    </div>}
                <div className="sm:ml-auto flex flex-wrap items-center text-[8px] lg:text-xs mb-2">
                    <div className="mr-4">
                        <div className="pt-1 sm:pt-2 relative mb-2">
                            <input className="border h-6 lg:h-7 border-neutral-500 bg-neutral-900 text-neutral-400 px-4 rounded-md focus:outline-none w-24 md:w-48" type="search" name="search" placeholder="Buscar" />
                            <button type="submit" className="absolute right-0 top-0 mt-3 sm:mt-4 mr-4">
                                <svg className="h-2 w-2 lg:h-3 lg:w-3 fill-neutral-400 hover:fill-neutral-100" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" viewBox="0 0 56.966 56.966">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <span className="text-neutral-400 mr-4">Número de juegos: {exampleGames.length}</span>
                    <div className="mb-4 flex flex-col">
                        <span className="text-neutral-400 mb-0.5">Género</span>
                        <select className="text-neutral-400 bg-neutral-900 px-2 py-1 border border-neutral-500 rounded-md">
                            <option value="" defaultValue>Todos</option>
                            {genres.map((genre) => (
                                <option value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center lg:pl-5'>
                <div className='px-10 py-3 grid grid-cols-3 gap-6 md:grid-cols-5 md:gap-6 lg:grid-cols-8 lg:gap-0 xl:grid-cols-9 xl:gap-0'>
                    {exampleGames.map((game) => (
                        <Game
                            key={game.id}
                            title={game.title}
                            cover={game.cover}
                            genre={game.genre}
                            realease_date={game.realease_date}
                            publisher={game.publisher}
                            developer={game.developer}
                            steam_rating={game.steam_rating}
                            platform_rating={game.platform_rating}
                            url={game.url}
                            me_review={game.me_review ? game.me_review : null}
                            friend_review={game.friend_review ? game.friend_review : null}
                        />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}