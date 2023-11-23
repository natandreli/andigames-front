import { Lexend } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Counter from '@/components/Counter';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function ProfileCard({ photo, reviews, following, followers, nickname, username, description }) {
    const router = useRouter();

    return (
        <div className="flex flex-col sm:flex-row items-center h-full w-full">
            <div className="mb-4 lg:mr-6 items-center flex justify-center" style={{ minWidth: '150px', minHeight: '150px' }}>
                <Image
                    src={photo ? photo : '/profile-default.png'}
                    width={110}
                    height={110}
                    alt="Profile picture"
                    className="rounded-full align-middle border-none max-w-3/4"
                />
            </div>
            <div className="justify-center flex flex-col">
                <Counter
                    reviews={reviews}
                    following={following}
                    followers={followers} 
                />
                <span className={`font-bold text-white text-lg lg:text-3xl ${lexend.className}`}>
                    {nickname}
                </span>
                <span className={`font-bold text-[#305761] text-sm lg:text-base ${lexend.className}`}>
                    {'@' + username}
                </span>
                <span className="mt-2 text-neutral-300 text-sm lg:text-base">
                    {description ? description : 'No hay descripción'}
                </span>
                <button className="mt-4 items-center justify-center text-center px-2 lg:px-3 py-1 text-sm sm:text-base inline-flex sm:w-24 justify-center rounded-md bg-[#305761] bg-opacity-5 text-neutral-300 border-2 border-[#305761] hover:bg-[#305761] hover:bg-opacity-20">
                    Seguir
                </button>
            </div>
        </div>
    );
}
