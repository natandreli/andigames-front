"use client";

import { Lexend } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SampleGames from '@/components/SampleGames';

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

    // const [numberOfElements, setNumberOfElements] = useState(7);

    // useEffect(() => {
    //     window.addEventListener('resize', () => {
    //         const screenWidth = window.innerWidth;

    //         if (screenWidth >= 1280) {
    //             setNumberOfElements(7);
    //         } else if (screenWidth >= 1024) {
    //             setNumberOfElements(5);
    //         } else {
    //             setNumberOfElements(3);
    //         }
    //     })
    // }, [])

    return (
        <div className=''>
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
            </div>
            <Navbar actualPage='home/recommended' />
            <div className='px-10 py-4'>
                <SampleGames title='Mejores calificados en ANDIGAMES' games={exampleGames} useNumbers={true} />
                <SampleGames title='De acuerdo a tus preferencias' games={exampleGames} />
                <SampleGames title='Según las personas a las que sigues' games={exampleGames} />
                <SampleGames title='¡Prueba con algo diferente!' games={exampleGames} />
                <SampleGames title='Directo de tu lista de deseos' games={exampleGames} />
                <SampleGames title='Los peores calificados en ANDIGAMES' games={exampleGames} useNumbers={true} />
            </div>
        </div>
    )
}