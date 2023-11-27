import { Lexend } from 'next/font/google';
import { Fragment, useState, useEffect, use } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Review from './Review';
import { getUserDetails } from '@/services/usersServices/usersServices';
import { getReview } from '@/services/reviewsServices/reviewsServices';
import { getCookieValue } from '@/utils/getCookieValue';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Game({ id, title, cover = null, genre, realease_date, publisher, developer, steam_rating, platform_rating, url, friend_review = null, w = 120, h = 170 }) {

    const [openModal, setOpenModal] = useState(false);

    const [inWishlist, setInWishlist] = useState(false);
    const [reviewed, setReviewed] = useState(false);

    const [user, setUser] = useState(null);
    const [myReview, setMyReview] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const deleteReview = async () => {
        console.log('delete review');
    }
    
    const addReview = async () => {
        console.log('add review');
    }

    const deleteGameWishlist = async () => {
        console.log('delete game wishlist');
    }

    const addGameWishlist = async () => {
        console.log('add game wishlist');
    }

    useEffect(() => {
        const accessToken = getCookieValue('accessToken');
        if (!accessToken || accessToken.trim() === '') {
            router.push('/');
        } else {
            async function fetchUser() {
                const accessUsername = getCookieValue('accessUsername');
                const userDetails = await getUserDetails(accessUsername);
                setUser(userDetails);
            }
            fetchUser();
        }
    }, []);

    useEffect(() => {
        if (user) {
            async function fetchReviewAndWishlist() {
                if (user.reviews.some((review) => review === id)) {
                    setReviewed(true);
                    const reviewDetails = await getReview(user.nickname, id);
                    setMyReview(reviewDetails);
                }
                if (user.wishlist.some((review) => review === id)) {
                    setInWishlist(true);
                }
            }
            fetchReviewAndWishlist();
        }
    }), [user];

    useEffect(() => {
        if (myReview, inWishlist) {
            setIsLoading(false);
        }
    }), [myReview, inWishlist];

    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center h-full w-full">
                <div className={`items-center flex justify-center min-w-[50px] min-h-[71px] max-w-[${w}px]`}>
                    <button onClick={() => setOpenModal(true)}>
                        <img
                            src={cover ? cover : '/no-cover.png'}
                            alt={title}
                            className="rounded align-middle border-none object-cover"
                            style={{
                                width: `${w}px`,
                                height: 'auto',
                                minWidth: '50px',
                                minHeight: '71px',
                            }}
                        />
                    </button>
                </div>
            </div>

            <Transition.Root show={openModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-neutral-900 bg-opacity-70 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="pt-4 pb-8 sm:py-4 px-4 relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl transition-all sm:mt-8 w-xl sm:w-full sm:max-w-[725px]">
                                    <button className="absolute top-4 right-4" onClick={() => setOpenModal(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#737373" className="w-5 h-5 hover:fill-neutral-400">
                                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                        </svg>
                                    </button>
                                    <div className="bg-neutral-800 px-4 pt-6 sm:p-6">
                                        <div className="sm:flex sm:items-start style={{ minWidth: '150px', minHeight: '200px' }">
                                            <div className="mx-auto flex h-auto w-auto flex-shrink-0 items-center justify-center sm:mx-0 sm:h-auto sm:w-auto" style={{ minWidth: '150px', minHeight: '200px' }}>
                                                <img
                                                    src={cover ? cover : '/no-cover.png'}
                                                    alt={title}
                                                    className="rounded align-middle border-none object-cover"
                                                    style={{
                                                        width: '200px',
                                                        height: 'auto',
                                                        minWidth: '50px',
                                                        minHeight: '71px',
                                                    }}
                                                />
                                            </div>
                                            <div className="mt-5 sm:ml-4 sm:mt-0">
                                                <Dialog.Title as="h1" className={`text-center sm:text-left mb-4 text-xl sm:text-2xl font-bold leading-6 text-white ${lexend.className}`}>
                                                    {title}
                                                </Dialog.Title>
                                                <div className="text-left text-neutral-400 text-sm sm:text-base">
                                                    <p className="mb-2">
                                                        <span className={`font-bold ${lexend.className}`}>Género:</span> {genre}
                                                    </p>
                                                    <p className="mb-2">
                                                        <span className={`font-bold ${lexend.className}`}>Fecha de lanzamiento:</span> {realease_date}
                                                    </p>
                                                    <p className="mb-2">
                                                        <span className={`font-bold ${lexend.className}`}>Distribuidor:</span> {publisher}
                                                    </p>
                                                    <p className="mb-1">
                                                        <span className={`font-bold ${lexend.className}`}>Desarrollador:</span> {developer}
                                                    </p>
                                                    <p className="mb-0">
                                                        <span className={`font-bold ${lexend.className}`}>Puntuación en Steam:</span> {(steam_rating / 10).toFixed(1)}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fbbf24" className="w-5 h-5 sm:w-6 sm:h-6 mb-2  ml-1 inline-block">
                                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                                        </svg>
                                                    </p>
                                                    <p className="mb-0">
                                                        <span className={`font-bold ${lexend.className}`}>Puntuación en ANDIGAMES:</span> {platform_rating}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fbbf24" className="w-5 h-5 sm:w-6 sm:h-6 mb-2  mx-1 inline-block">
                                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-center sm:flex-row sm:items-start mt-4">
                                                    <button
                                                        className={`items-center justify-center text-center px-2 px-3 py-2 mb-3 sm:mr-3 text-xs inline-flex w-full sm:w-auto
                                                        rounded-md text-neutral-400 border-2 text-neutral-300 hover:bg-opacity-20
                                                        ${reviewed
                                                                ? 'bg-opacity-5 border-[#A61145] bg-[#A61145] hover:bg-[#A61145]'
                                                                : 'bg-opacity-5 border-[#305761] bg-[#305761] hover:bg-[#305761]'}`}
                                                        onClick={reviewed ? deleteReview : addReview}
                                                    >
                                                        {reviewed ? 'No lo he jugado' : '¡Lo he jugado!'}
                                                    </button>
                                                    <button
                                                        className={`items-center justify-center text-center px-2 px-3 py-2 mb-3 sm:mr-3 text-xs inline-flex w-full sm:w-auto
                                                        rounded-md text-neutral-400 border-2 text-neutral-300 hover:bg-opacity-20 bg-opacity-5 border-[#305761] bg-[#305761] hover:bg-[#305761]`}
                                                        onClick={() => window.open('https://store.steampowered.com' + url, '_blank')}
                                                    >
                                                        Ir a la tienda
                                                    </button>
                                                    <button
                                                        className={`items-center justify-center text-center px-2 px-3 py-2 mb-3 sm:mr-3 text-xs inline-flex w-full sm:w-auto
                                                        rounded-md text-neutral-400 border-2 text-neutral-300 hover:bg-opacity-20
                                                        ${inWishlist
                                                                ? 'bg-opacity-5 border-[#A61145] bg-[#A61145] hover:bg-[#A61145]'
                                                                : 'bg-opacity-5 border-[#305761] bg-[#305761] hover:bg-[#305761]'}`}
                                                        onClick={inWishlist ? deleteGameWishlist : addGameWishlist}
                                                    >
                                                        {inWishlist ? 'Quitar de mi lista de deseos' : 'Añadir a mi lista de deseos'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {friend_review &&
                                        // <Review {...friend_review} />
                                        <span>Review amigo</span>
                                    }
                                    {reviewed &&
                                        <Review {...myReview} />
                                    }
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}