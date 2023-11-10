import { Lexend } from 'next/font/google';
import Image from 'next/image';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Game({ title, cover, genre, realease_date, publisher, developer, steam_rating, plataform_rating, url }) {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center h-full w-full">
                <div className="mb-4 lg:mr-6 items-center flex justify-center" style={{ minWidth: '90px', minHeight: '128px' }}>
                    <button>
                        <Image
                            src={cover}
                            width={120}
                            height={170}
                            alt={title}
                            className="rounded align-middle border-none"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}