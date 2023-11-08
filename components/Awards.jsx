import { Lexend, Manrope } from 'next/font/google';
import Image from 'next/image';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Awards() {
    return (
        <div className='flex flex-col w-3/5'>
            <span className={`font-bold text-white text-sm ${lexend.className}`}>
                Reconocimientos
            </span>
            <div className='mt-2 w-auto h-40 bg-neutral-900 bg-opacity-90'>
            </div>
        </div>
    );
}