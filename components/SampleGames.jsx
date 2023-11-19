import { Lexend } from 'next/font/google';
import { Fragment, useState, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Game from './Game'

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function SampleGames({ title, games, useNumbers = false }) {
    const [openModal, setOpenModal] = useState(false)

    // const scrollContainerRef = useRef(null);

    // const handleScroll = (scrollOffset) => {
    //     if (scrollContainerRef.current) {
    //         scrollContainerRef.current.scrollTo({
    //             left: scrollContainerRef.current.scrollLeft + scrollOffset,
    //             behavior: 'smooth'
    //         });
    //     }
    // };

    return (
        <div className='mt-4'>
            <div className="text-left text-neutral-300 text-sm [376px]:text-md sm:text-2xl">
                <span className={`font-semibold ${lexend.className}`}>
                    {title}
                </span>
            </div>
            <div className='flex items-center justify-center'>
                {/* <div className='flex items-center'>
                    <button
                        className="absolute left-0 top-0 bottom-0 pr-1 bg-gray-200 hover:bg-gray-300 rounded opacity-50 transition-opacity duration-300 focus:outline-none"
                        onClick={() => handleScroll(-540)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div> */}
                <div className='pt-4 pb-2 overflow-x-auto'> {/* ref={scrollContainerRef}>  */}
                    <div className='flex flex-nowrap gap-3 md:gap-6 lg:gap-8'>
                        {games.map((game, index) => (
                            <div key={game.id} className="relative" style={{ minWidth: '130px' }}>
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
                                    w={130}
                                    h={184}
                                />
                                {useNumbers && (
                                    <div className="font-bold absolute top-0 right-0 bg-[#fbbf24] text-neutral-900 text-center sm:w-11 sm:h-11 w-9 h-9 rounded-tr rounded-bl-lg flex items-center justify-center">
                                        <p className={`sm:text-2xl text-lg font-semibold leading-14`}>{index + 1}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className='flex items-center'>
                    <button
                        className="pl-1 bg-gray-200 hover:bg-gray-300 rounded"
                        onClick={() => handleScroll(540)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div> */}
            </div>
        </div>
    );
}