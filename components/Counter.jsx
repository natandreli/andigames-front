import { Lexend, Manrope } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Counter({ games, following, followers }) {
    return (
        <div className={`flex text-center mb-4 font-bold ${lexend.className}`}>
            <div className='mr-5'>
                <div className={`text-neutral-400 text-xs lg:text-sm`}>Juegos</div>
                <div className={`text-white text-[10px] lg:text-xs`}>{games}</div>
            </div>
            <div className='mr-5'>
                <div className={`text-neutral-400 text-xs lg:text-sm`}>Seguidores</div>
                <div className={`text-white text-[10px] lg:text-xs`}>{followers}</div>
            </div>
            <div className='mr-5'>
                <div className={`text-neutral-400 text-xs lg:text-sm`}>Seguidos</div>
                <div className={`text-white text-[10px] lg:text-xs`}>{following}</div>
            </div>
        </div>
    );
}