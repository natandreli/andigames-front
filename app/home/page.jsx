"use client";

import { Lexend, Manrope } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';
import Awards from '@/components/Awards';


const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

    const router = useRouter();

    return (
        <div className='h-full w-screen bg-center bg-neutral-900 bg-opacity-70'>
            <Navbar actualPage='home' />
            <div className={`flex w-screen justify-center items-center py-2 px-10`}>
                <ProfileCard 
                    games={'100'} 
                    following={'50'} 
                    followers={'150'} 
                    nickname={'natibara la capibara'} 
                    username={'natandreli'} 
                    description={'Estoy sufriendo un poco con el desarrollo de esta página, pero me alegro de haber logrado llegar a este punto.'}
                />
                <Awards />
            </div>
        </div>
    )
}