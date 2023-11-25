"use client";

import { Lexend } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';
import Awards from '@/components/Awards';
import Game from '@/components/Game';
import Loading from '@/components/Loading';
import Particle from '@/components/Particle';
import { getUserDetails, getUserFollowersAndFollowing } from '@/services/usersServices/usersServices'
import { getCookieValue } from '@/utils/getCookieValue';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

    const [user, setUser] = useState(null);
    const [followersFollowing, setFollowersFollowing] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [gamesToShow, setGamesToShow] = useState(null);
    const [showWishList, setShowWishList] = useState(false);

    useEffect(() => {
        async function fetchUser() {
            setIsLoading(true);
            const username = getCookieValue('accessUsername');
            const data = await getUserDetails(username);
            const dataFollowersFollowing = await getUserFollowersAndFollowing(username);
            if (data && dataFollowersFollowing) {
                setUser(data);
                setFollowersFollowing(dataFollowersFollowing);
                setGamesToShow(data.reviews);
                setIsLoading(false);
            }
        }

        fetchUser();
    }, []);

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

    const [isButtonGamesDisabled, setButtonGamesDisabled] = useState(true);
    const [isButtonWishListDisabled, setButtonWishListDisabled] = useState(false);
    const [isButtonAllDisabled, setButtonAllDisabled] = useState(true);
    const [isButtonLoveDisabled, setButtonLoveDisabled] = useState(false);
    const [isButtonLikeDisabled, setButtonLikeDisabled] = useState(false);
    const [isButtonMehDisabled, setButtonMehDisabled] = useState(false);
    const [isButtonDislikeDisabled, setButtonDislikeDisabled] = useState(false);
    const [isButtonHateDisabled, setButtonHateDisabled] = useState(false);

    const handleButtonGamesClick = () => {
        setButtonGamesDisabled(true);
        setButtonWishListDisabled(false);

        setShowWishList(false);
        setGamesToShow(user.reviews);
    };

    const handleButtonWishListClick = () => {
        setButtonGamesDisabled(false);
        setButtonWishListDisabled(true);

        setShowWishList(true);
        setGamesToShow(user.wishlist);
    };

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

    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <div className=''>
            <Particle />
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
            </div>
            <Navbar />
            <div className={`grid grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 w-screen justify-center items-center py-2 px-10 xl:px-20`}>
                <ProfileCard
                    photo={null}
                    reviews={user.reviews}
                    following={followersFollowing.following}
                    followers={followersFollowing.followers}
                    nickname={user.username}
                    username={user.nickname}
                    description={user.about_me}
                />
                <Awards />
            </div>
            <div className={``}>
                <nav className="flex items-center sm:py-6 px-10 xl:px-20 w-full">
                    <div className="block text-[10px] lg:text-sm">
                        <ul className="flex">
                            <li className="mr-4 mb-2">
                                <button
                                    className={`${isButtonGamesDisabled
                                        ? 'text-white cursor-not-allowed border-[#5CFFFF] font-bold'
                                        : 'text-neutral-400 border-transparent hover:text-white hover:border-white'
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
                                        ? 'text-white cursor-not-allowed border-[#5CFFFF] font-bold'
                                        : 'text-neutral-400 border-transparent hover:text-white hover:border-white'
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
            <div className="flex flex-wrap items-center sm:py-2 px-10 xl:px-20 w-full sm:mt-0 mt-4">
                {!showWishList &&
                    <div className="block text-xs xl:text-sm text-neutral-500">
                        <ul className="flex flex-wrap">
                            <li className="mr-4 mb-2">
                                <button
                                    className={`${isButtonAllDisabled
                                        ? 'cursor-not-allowed bg-white font-bold text-neutral-700'
                                        : 'hover:text-white hover:bg-[#8B2E4F]'
                                        }  px-3 sm:py-3 py-2 rounded-lg`}
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
                                        : 'hover:text-white hover:bg-[#8B2E4F]'
                                        }  px-3 sm:py-3 py-2 rounded-lg`}
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
                                        : 'hover:text-white hover:bg-[#8B2E4F]'
                                        }  px-3 sm:py-3 py-2 rounded-lg`}
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
                                        : 'hover:text-white hover:bg-[#8B2E4F]'
                                        }  px-3 sm:py-3 py-2 rounded-lg`}
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
                                        : 'hover:text-white hover:bg-[#8B2E4F]'
                                        }  px-3 sm:py-3 py-2 rounded-lg`}
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
                                        : 'hover:text-white hover:bg-[#8B2E4F]'
                                        }  px-3 sm:py-3 py-2 rounded-lg`}
                                    onClick={handleButtonHateClick}
                                    disabled={isButtonHateDisabled}
                                >
                                    Fueron lo peor
                                </button>
                            </li>
                        </ul>
                    </div>}
                <div className="xl:ml-auto mt-4 xl:mt-0 flex flex-wrap items-center text-[8px] lg:text-xs mb-2">
                    <div className="mr-4">
                        <div className="pt-1 sm:pt-2 relative mb-2">
                            <input className="border h-9 sm:h-10 border-[#A61145] border-opacity-50 border-2 bg-neutral-900 placeholder-neutral-400 bg-opacity-5 text-neutral-400 px-4 rounded-md focus:outline-none w-[280px] sm:w-[550px] md:w-[400px] lg:w-[600px] xl:w-[265px] 2xl:w-[500px] text-xs xl:text-sm " name="search" placeholder="Buscar juego" />
                            <button type="submit" className="flex items-center justify-center h-9 sm:h-10 w-10 bg-[#A61145] hover:bg-[#D92B68] hover:bg-opacity-30 bg-opacity-20 cursor-pointer absolute right-0 top-0 mt-1 sm:mt-2 rounded-r-md">
                                <svg className="h-4 w-4 fill-[#A61145]" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" viewBox="0 0 56.966 56.966">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* <span className="text-neutral-400 mr-4">Número de juegos: {gamesToShow.length}</span> */}
                    <div className="mb-5 flex flex-col">
                        <span className="text-neutral-400 mb-0.5 text-xs xl:text-sm ml-1 mt-1 md:mt-0">Género</span>
                        <select className="text-neutral-400 bg-neutral-900 px-2 py-1 border border-neutral-500 rounded-md h-9 sm:h-10 w-[280px] sm:w-[275px] md:w-[260px] xl:w-[150px] text-xs xl:text-sm">
                            <option value="" defaultValue>Todos</option>
                            {genres.map((genre) => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className='px-10 py-3 mb-6'>
                {gamesToShow.length != 0 ? (
                    <div className='items-center justify-center flex flex-wrap gap-6 lg:gap-8'>
                        {user.reviews.map((game) => (
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
                ) : (
                    <div className='items-center justify-center flex flex-wrap gap-6 lg:gap-8'>
                        <span className='text-neutral-400 text-center w-full'>No hay juegos para mostrar</span>
                    </div>
                )}
            </div>
        </div>
    )
}