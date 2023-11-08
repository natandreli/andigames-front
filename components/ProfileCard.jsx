import { Lexend, Manrope } from 'next/font/google';
import Image from 'next/image';
import Counter from '@/components/Counter';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function ProfileCard({ games, following, followers, nickname, username, description }) {
    return (
        <div className='mr-7 flex h-full w-5/6'>
            <div className='mr-6' style={{ minWidth: '200px', minHeight: '200px' }}>
                <Image
                    src="/profile.png"
                    width={200}
                    height={200}
                    alt="Profile picture"
                    className='rounded-full align-middle border-none'
                />
            </div>
            <div className='justify-center flex flex-col'>
                <Counter games={games} following={following} followers={followers} />
                <span className={`font-bold text-white text-2xl ${lexend.className}`}>
                    {nickname}
                </span>
                <span className={`font-bold text-neutral-400 text-base ${lexend.className}`}>
                    {'@' + username}
                </span>
                <span className={`mt-2 text-neutral-300 text-base`}>
                    {description ? description : 'No hay descripción'}
                </span>
            </div>
        </div>
    );
}