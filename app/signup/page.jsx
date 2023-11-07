"use client";

import { Lexend, Manrope } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {

  const router = useRouter();

  return (
    <div>
    </div>
  )
}