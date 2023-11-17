"use client";

import { Lexend } from 'next/font/google';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
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

    return (
        <div className=''>
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
            </div>
            <Navbar actualPage='home/recommended' />
            <div className='px-10'>
                <div className="text-left text-neutral-300 text-xl sm:text-2xl group">
                    <span className={`font-semibold ${lexend.className} group-hover:text-[#2155A5]`}>
                        Mejor calificados en ANDIGAMES
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="mb-1 w-8 h-8 inline-block fill-neutral-300 group-hover:fill-[#2155A5]">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='py-3 grid grid-cols-3 gap-8 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-7'>
                        {(exampleGames.splice(0, 7)).map((game, index) => (
                            <div key={game.id} className="relative">
                                <Game
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
                                    w={160}
                                    h={226}
                                />
                                <div className="absolute bottom-0 right-0 bg-[#2155A5] text-white text-center w-14 h-14 rounded-tl-lg rounded-br  flex items-center justify-center">
                                    <p className={`text-3xl font-semibold ${lexend.className} leading-14`}>{index + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}