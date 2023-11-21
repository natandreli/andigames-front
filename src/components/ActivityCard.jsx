import { useState } from 'react';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] });

export default function ActivityCard({ gameTitle, content, rating }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="border border-gray-300 p-4 rounded-md shadow-md mb-4">
            <div className="flex items-center justify-between">
                <h2 className={`font-bold text-lg ${lexend.className}`}>{gameTitle}</h2>
                <div>
                    <span className="text-neutral-400 text-xs mr-2">{rating}/5</span>
                    <button
                        onClick={handleExpand}
                        className="text-sm text-blue-500 hover:underline focus:outline-none"
                    >
                        {isExpanded ? 'Cerrar' : 'Ver más'}
                    </button>
                </div>
            </div>
            <p
                className={`mt-2 text-sm ${isExpanded ? 'block' : 'hidden'} ${lexend.className}`}
            >
                {content}
            </p>
            <button
                onClick={() => router.push('/games/[gameId]', `/games/${gameId}`)}
                className="mt-2 text-sm text-blue-500 hover:underline focus:outline-none"
            >
                Ver detalles del juego
            </button>
        </div>
    );
};