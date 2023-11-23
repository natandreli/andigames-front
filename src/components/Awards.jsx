import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Awards() {
    const awards = [
        { src: '/awards/premio-mi-primer-jugado.png', alt: 'Mi primer jugado' },
        { src: '/awards/premio-me-perdonas.png', alt: 'Me perdonas' },
        { src: '/awards/premio-eh-iguales.png', alt: '¡Eh, iguales!' },
    ]

    return (
        <div className='flex flex-col w-full'>
            <span className={`font-bold text-white text-base lg:text-lg ${lexend.className}`}>
                Reconocimientos
            </span>
            <div className='grid grid-cols-5 gap-2 px-6 items-center mt-2 w-auto h-40 bg-neutral-900 bg-opacity-90'>
                {awards.map((award, index) => (
                    <div
                        key={index}
                        className='group flex flex-col text-center relative'
                    >
                        <img
                            src={award.src}
                            alt={award.alt}
                            style={{
                                width: '70px',
                                height: 'auto',
                            }}
                        />
                        <div className="hidden group-hover:block w-fit h-full text-neutral-400 text-xs text-center bg-neutral-900 bg-opacity-75 rounded-md absolute">
                            <div className='flex flex-col items-center justify-center h-full'>
                                <span className='font-bold block'>Premio:</span>
                                <span className='block'>{award.alt}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}