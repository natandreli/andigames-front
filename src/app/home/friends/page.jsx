"use client";

import { Lexend } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ActivityCard from '@/components/ActivityCard';
import Particle from '@/components/Particle';
import { getCookieValue } from '@/utils/getCookieValue';
import { useRouter } from 'next/navigation';
import SuperProfileCard from '@/components/SuperProfileCard';
import { getUsers, getUser } from '@/services/usersServices/usersServices';
import Image from 'next/image';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

    const router = useRouter();

    const [showUsers, setShowUsers] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [users, setUsers] = useState(null);
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [foundUser, setFoundUser] = useState([]);
    const [alreadySearch, setAlreadySearch] = useState(false);
    const [badSearch, setBadSearch] = useState(false);
    const [shouldUpdateUsers, setShouldUpdateUsers] = useState(false);

    async function handleSearchUser(e) {
        e.preventDefault();
        if (searchValue === '') {
            setBadSearch(true);
        } else {
            setBadSearch(false);
            setIsSearching(true);
            const data = await getUser(searchValue);
            console.log(data);
            if (data) {
                setFoundUser([data]);
                setIsSearching(false);
                setAlreadySearch(true);
            } else {
                setFoundUser([]);
                setAlreadySearch(true);
                setIsSearching(false);
            }
        }
    };

    useEffect(() => {
        async function fetchUsers() {
            setIsLoadingUsers(true);
            try {
                const data = await getUsers();
                if (data) {
                    setUsers(data);
                } else {
                    setUsers([]);
                }
            } catch (error) {
                return;
            }
            setIsLoadingUsers(false);
        }

        if (shouldUpdateUsers) {
            fetchUsers();
        }
    }, [shouldUpdateUsers]);

    useEffect(() => {
        const accessToken = getCookieValue('accessToken');
        if (!accessToken || accessToken.trim() === '') {
            router.push('/');
        } else {
            setIsLoadingUsers(true);
            async function fetchUser() {
                const data = await getUsers();
                if (data) {
                    setUsers(data);
                }
            }
            fetchUser();
        }
    }, []);

    useEffect(() => {
        if (users) {
            setIsLoadingUsers(false);
        }
    }, [users]);

    return (
        <div className=''>
            <Particle />
            <div className='fixed -z-10 h-screen w-screen bg-center bg-neutral-900 bg-opacity-70'>
            </div>
            <Navbar actualPage='home/friends' />
            <div className="px-10 xl:px-20 flex flex-wrap items-center text-sm lg:text-base">
                <div className="pt-1 sm:pt-2 relative w-full mt-4 sm:mt-0">
                    <form onSubmit={handleSearchUser}>
                        <button
                            type="submit"
                            className="flex items-center justify-center h-9 sm:h-11 w-11 bg-[#A61145] hover:bg-[#D92B68] hover:bg-opacity-30 bg-opacity-20 cursor-pointer absolute left-0 top-0 pl-1 mt-1 sm:mt-2 rounded-l-md"
                        >
                            <svg className="h-4 w-4 fill-[#A61145]" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" viewBox="0 0 56.966 56.966">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                        <input
                            className={`pl-14 text-sm sm:text-base border h-9 sm:h-11 ${badSearch ? `border-red-500` : `border-[#A61145]`} border-opacity-50 border-2 bg-neutral-900 placeholder-neutral-400 bg-opacity-5 text-neutral-400 px-4 rounded-md focus:outline-none w-full`}
                            name="search"
                            placeholder="Buscar amigo"
                            value={searchValue}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value === '') {
                                    setShowUsers(true); // Asegurar que se muestren las predicciones
                                    setSearchValue('');
                                    setIsSearching(false);
                                    setFoundUser([]);
                                    setAlreadySearch(false);
                                    setBadSearch(false);
                                    setShouldUpdateUsers(true);
                                } else {
                                    setSearchValue(value);
                                    setShowUsers(false); // No mostrar predicciones mientras se busca
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
            {showUsers
                ? (
                    users
                        ? (
                            <div className='px-10 xl:px-20 pt-5'>
                                {users.map((user) => (
                                    <div key={user.nickname} className='mb-5'>
                                        <SuperProfileCard
                                            photo={null}
                                            nickname={user.username}
                                            username={user.nickname}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-neutral-400 pt-10">
                                <p className="text-xl">Cargando...</p>
                            </div>
                        )
                ) : (
                    <>
                        <div className="pl-11 xl:pl-20 pt-3 text-sm text-neutral-400">
                            Buscar "<span className="font-bold">{searchValue}</span>"
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
                            ) : ((foundUser.length === 0 && alreadySearch)
                                ? (
                                    <div>
                                        <div className="px-10 xl:px-20 justify-center items-center text-center flex-col mt-[150px]">
                                            <h1 className={`font-bold text-2xl lg:text-4xl text-center text-white leading-tight ${lexend.className}`}>
                                                No hemos encontrado a ningún usuario con ese nombre de usuario...
                                            </h1>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbbf24" className="my-5 inline-block w-20 h-20">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                )
                                : (
                                    <div className='px-10 xl:px-20 pt-5'>
                                        {foundUser.map((user) => (
                                            <div key={user.nickname} className='mb-5'>
                                                <SuperProfileCard
                                                    photo={null}
                                                    nickname={user.username}
                                                    username={user.nickname}
                                                />
                                            </div>
                                        )
                                        )}
                                    </div>
                                )
                            )
                        }
                    </>
                )}
        </div >
    )
}