"use client";

import { Lexend } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SampleGames from '@/components/SampleGames';
import Particle from '@/components/Particle';
import { searchGames } from '@/services/gamesServices/gamesServices';
import Game from '@/components/Game';
import Image from 'next/image';
import { getCookieValue } from '@/utils/getCookieValue';
import { useRouter } from 'next/navigation';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

    const router = useRouter();
    
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

    const [showSamplesGames, setShowSamplesGames] = useState(true);
    const [gameTitle, setGameTitle] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [foundGames, setFoundGames] = useState([]);
    const [alreadySearch, setAlreadySearch] = useState(false);
    const [badSearch, setBadSearch] = useState(false);

    async function handleSearchGames(e) {
        e.preventDefault();
        if (gameTitle === '') {
            setBadSearch(true);
        } else {
            setBadSearch(false);
            setIsSearching(true);
            const data = await searchGames(gameTitle);
            if (data) {
                setFoundGames(data);
                setIsSearching(false);
                setAlreadySearch(true);
            } else {
                setFoundGames([]);
                setAlreadySearch(true);
            }
        }
    };

    useEffect(() => {
        const accessToken = getCookieValue('accessToken');
        if (!accessToken || accessToken.trim() === '') {
            router.push('/');
        }
    }, []);

    return (
        <div className=''>
            <Particle />
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
            </div>
            <Navbar actualPage='home/recommended' />
            <div className="px-10 xl:px-20 flex flex-wrap items-center">
                <div className="pt-1 sm:pt-2 relative w-full mt-4 sm:mt-0">
                    <form onSubmit={handleSearchGames}>
                        <button type="submit" className="flex items-center justify-center h-9 sm:h-11 w-11 bg-[#A61145] hover:bg-[#D92B68] hover:bg-opacity-30 bg-opacity-20 cursor-pointer absolute left-0 top-0 pl-1 mt-1 sm:mt-2 rounded-l-md">
                            <svg className="h-4 w-4 fill-[#A61145]" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" viewBox="0 0 56.966 56.966">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                        <input
                            className={`pl-14 text-sm sm:text-base border h-9 sm:h-11 ${badSearch ? `border-red-500` : `border-[#A61145]`} border-opacity-50 border-2 bg-neutral-900 placeholder-neutral-400 bg-opacity-5 text-neutral-400 px-4 rounded-md focus:outline-none w-full`}
                            name="search"
                            placeholder="Buscar juego"
                            value={gameTitle}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value === '') {
                                    setShowSamplesGames(true);
                                    setGameTitle('');
                                    setIsSearching(false);
                                    setFoundGames([]);
                                    setAlreadySearch(false);
                                } else {
                                    setGameTitle(value);
                                    setShowSamplesGames(false);
                                    setBadSearch(false);
                                }
                            }}
                        />
                        {badSearch &&
                            <div className="pt-3 text-sm">
                                <span className="text-red-500">
                                    Por favor, llena los campos requeridos.
                                </span>
                            </div>
                        }
                    </form>
                </div>
            </div>
            {!showSamplesGames && (
                <>
                    <div className="pl-11 xl:pl-20 pt-3 text-sm text-neutral-400">
                        Buscar "<span className="font-bold">{gameTitle}</span>"
                    </div>
                    {isSearching
                        ? (
                            <div>
                                <div className="px-10 justify-center items-center text-center flex-col mt-[150px]">
                                    <h1 className={`font-bold text-2xl sm:text-4xl text-center text-white leading-tight ${lexend.className}`}>
                                        Buscando...
                                    </h1>
                                    <div className="flex justify-center items-center mt-5">
                                        <Image
                                            src="/AndiGamesLogo-disk.png"
                                            alt="AndiGames Logo"
                                            width={100}
                                            height={100}
                                            className={`inline-block animate-spin`}
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : ((foundGames.length === 0 && alreadySearch)
                            ? (
                                <div>
                                    <div className="px-10 justify-center items-center text-center flex-col mt-[150px]">
                                        <h1 className={`font-bold text-2xl lg:text-4xl text-center text-white leading-tight ${lexend.className}`}>
                                            No hemos encontrado ningún juego...
                                        </h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbbf24" className="my-5 inline-block w-20 h-20">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z" clipRule="evenodd" />
                                        </svg>
                                        <h2 className={`font-semibold text-base lg:text-xl text-neutral-400 leading-tight ${lexend.className}`}>
                                            Intenta buscar con otras palabras.
                                        </h2>
                                    </div>
                                </div>
                            )
                            : (
                                <div className='mt-6 px-10 xl:px-20 items-top justify-center flex flex-wrap gap-6 lg:gap-10'>
                                    {foundGames.map((game) => (
                                        <div key={game.id}>
                                            <div style={{ display: 'inline-block', textAlign: 'left' }}>
                                                <Game
                                                    key={game.id}
                                                    id={game.id}
                                                    title={game.title}
                                                    cover={game.cover}
                                                    genre={game.genres}
                                                    realease_date={game.release_date}
                                                    publisher={game.publisher}
                                                    developer={game.developer}
                                                    steam_rating={game.steam_rating}
                                                    platform_rating={game.platform_rating}
                                                    url={game.url}
                                                    w={200}
                                                    h={283}
                                                />
                                            </div>
                                            <span
                                                style={{
                                                    display: 'block',
                                                    marginTop: '10px',
                                                    textAlign: 'center',
                                                    maxWidth: '200px',
                                                    margin: '0 auto',
                                                }}
                                                className={`text-sm sm:text-base text-white leading-tight ${lexend.className}`}
                                            >
                                                {game.title}
                                            </span>
                                        </div>
                                    )
                                    )}
                                </div>
                            )
                        )
                    }
                </>
            )
            }
            <div className='px-10 xl:px-20 py-4'>
                {showSamplesGames && (
                    <div>
                        <SampleGames title='Mejores calificados en ANDIGAMES' games={exampleGames} useNumbers={true} />
                        <SampleGames title='De acuerdo a tus preferencias' games={exampleGames} />
                        <SampleGames title='Según las personas a las que sigues' games={exampleGames} />
                        <SampleGames title='¡Prueba con algo diferente!' games={exampleGames} />
                        <SampleGames title='Directo de tu lista de deseos' games={exampleGames} />
                        <SampleGames title='Los peores calificados en ANDIGAMES' games={exampleGames} useNumbers={true} />
                    </div>
                )}
            </div>
        </div >
    )
}