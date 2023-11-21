import { Lexend } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Counter from '@/components/Counter';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function ProfileCard({ photo, games, following, followers, nickname, username, description }) {
    const router = useRouter();

    return (
        <div className="flex flex-col sm:flex-row items-center h-full w-full">
            <div className="mb-4 lg:mr-6 items-center flex justify-center" style={{ minWidth: '150px', minHeight: '150px' }}>
                <Image
                    src={photo}
                    width={110}
                    height={110}
                    alt="Profile picture"
                    className="rounded-full align-middle border-none max-w-3/4"
                />
            </div>
            <div className="justify-center flex flex-col">
                <Counter games={games} following={following} followers={followers} />
                <span className={`font-bold text-white text-sm lg:text-xl ${lexend.className}`}>
                    {nickname}
                </span>
                <span className={`font-bold text-neutral-400 text-[10px] lg:text-sm ${lexend.className}`}>
                    {'@' + username}
                </span>
                <span className="mt-2 text-neutral-300 text-[10px] lg:text-sm">
                    {description ? description : 'No hay descripción'}
                </span>
                <button className="mt-4 items-center justify-center text-center px-2 lg:px-3 py-1 sm:text-sm inline-flex sm:w-24 justify-center rounded-md bg-neutral-900 text-[10px] text-neutral-400 border border-neutral-400 hover:bg-neutral-700">
                    Seguir
                </button>
            </div>
        </div>
    );
}