import { Lexend } from 'next/font/google';
import Game from './Game'

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function SampleGames({ title, games, useNumbers = false }) {

    return (
        <div className='mt-4'>
            <div className="text-left text-neutral-300 text-base sm:text-2xl">
                <span className={`font-semibold ${lexend.className}`}>
                    {title}
                </span>
            </div>
            <div className='flex items-center justify-center'>
                <div className='pt-6 pb-2 overflow-x-auto mx-[25px] md:mx-[50px] lg:mx-[70px]'>
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
                                    <div className="font-bold absolute top-0 right-0 bg-amber-300 text-neutral-900 text-center sm:w-11 sm:h-11 w-9 h-9 rounded-tr rounded-bl-lg flex items-center justify-center">
                                        <p className={`sm:text-2xl text-lg font-semibold leading-14`}>{index + 1}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}