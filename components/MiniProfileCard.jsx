import { Lexend } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Counter from '@/components/Counter';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] });

export default function MiniProfileCard({ photo, games, nickname, username }) {
    const router = useRouter();

    return (
        <div className="flex items-center lg:my-2 p-3 max-w-xl">
            <div className="mr-4">
                <Image
                    src={photo}
                    width={40}
                    height={40}
                    alt="Profile picture"
                    className="rounded-full align-middle border-none"
                />
            </div>
            <div className="flex flex-col">
                <span className={`flex items-center font-semibold text-white text-xs sm:text-base ${lexend.className}`}>
                    {nickname}
                </span>
                <span className={`text-neutral-400 text-[10px] sm:text-xs ${lexend.className}`}>
                    {'@' + username}
                </span>
            </div>
            <div className="ml-auto">
                <div className={`mr-5 items-center justify-center text-center font-semibold ${lexend.className}`}>
                    <div className={`text-neutral-400 text-[10px] sm:text-sm`}>Juegos</div>
                    <div className={`text-white text-[8px] sm:text-xs`}>{games}</div>
                </div>
            </div>
            <button className="items-center justify-center text-center ml-2 px-2 lg:px-3 py-1 sm:text-sm inline-flex sm:w-auto justify-center rounded-md bg-neutral-800 text-[10px] text-neutral-400 border border-neutral-400 hover:bg-neutral-700">
                Seguir
            </button>
        </div>
    );
}
