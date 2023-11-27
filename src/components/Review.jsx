import { Lexend } from 'next/font/google';
import { useRouter } from 'next/navigation';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] });

export default function Review({ game_id, user_nickname, rating, review_date, commentary, id }) {
    const router = useRouter();

    return (
        <div className="bg-neutral-800 px-4 pb-4 sm:px-6">
            <div className="text-left text-neutral-400 text-sm sm:text-base">
                <p className="mb-3 sm:mt-0 mt-6">
                    <span className={`font-bold text-lg sm:text-2xl ${lexend.className}`}>Reseña por <span className='text-[#fbbf24]'>@{user_nickname}</span> </span>
                </p>
                <p className="mb-1">
                    <span className={`font-bold ${lexend.className}`}>Fecha:</span> {review_date.toString()}
                </p>
                <p className="">
                    <span className={`font-bold ${lexend.className}`}>Puntuación:</span> {rating}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fbbf24" className="w-5 h-5 sm:w-6 sm:h-6 mb-2 ml-1 inline-block">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                </p>
                {commentary &&
                    <p className="mt-2">
                        <span className='text-base'>{commentary}</span>
                    </p>
                }
            </div>
        </div>
    );
}
