import { Lexend } from 'next/font/google';
import Image from 'next/image';
import { follow, unfollow, getUserFollowersAndFollowing, getUserDetails } from '@/services/usersServices/usersServices';
import { getCookieValue } from '@/utils/getCookieValue';
import { useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react'


const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] });

export default function SuperProfileCard({ photo, nickname, username }) {
    const router = useRouter();

    const [isFollowing, setIsFollowing] = useState(false);

    const [badFollow, setBadFollow] = useState(false);
    const [badUnfollow, setBadUnfollow] = useState(false);

    const [following, setFollowing] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [isMe, setIsMe] = useState(false);

    const [reviews, setReviews] = useState(null);

    async function handleFollow() {
        const accessToken = getCookieValue('accessToken');
        if (!accessToken || accessToken.trim() === '') {
            router.push('/');
        } else {
            const accessUsername = getCookieValue('accessUsername');
            const res = await follow(username, accessUsername, accessToken);
            if (res) {
                setIsFollowing(true);
            } else {
                setBadFollow(true);
            }
        }
    }

    async function handleUnfollow() {
        const accessToken = getCookieValue('accessToken');
        if (!accessToken || accessToken.trim() === '') {
            router.push('/');
        } else {
            const accessUsername = getCookieValue('accessUsername');
            const res = await unfollow(username, accessUsername, accessToken);
            if (res) {
                setIsFollowing(false);
            } else {
                setBadUnfollow(true);
            }
        }
    }

    useEffect(() => {
        setIsLoading(true);
        const accessToken = getCookieValue('accessToken');
        if (!accessToken || accessToken.trim() === '') {
            router.push('/');
        } else {
            async function fetchReviews() {
                setReviews(await getUserDetails(username).reviews);
                if (getCookieValue('accessUsername') === username) {
                    setIsMe(true);
                    setIsLoading(false);
                } else {
                    async function fetchFollowing() {
                        const accessUsername = getCookieValue('accessUsername');
                        const res = await getUserFollowersAndFollowing(accessUsername);
                        setFollowing(res.following);
                    }
                    fetchFollowing();
                }
            }
            fetchReviews();
        }
    }, []);

    useEffect(() => {
        if (following && reviews) {
            const accessUsername = getCookieValue('accessUsername');
            if (following.some((user) => user.nickname === username)) {
                setIsFollowing(true);
            }
            setIsLoading(false);
        }
    }, [following, reviews]);

    if (isLoading) {
        return (
            <div className="flex items-center lg:my-2 py-3 px-4 max-w-xl">
                <span className={`flex items-center font-light text-neutral-300 text-[10px] sm:text-base leading-normal ${lexend.className}`}>
                    Cargando...
                </span>
            </div>
        )
    }

    return (
        <div className="flex items-center lg:my-2 py-5 px-5 max-w-full bg-neutral-800 bg-opacity-30 rounded-lg">
            <div className="mr-4">
                <Image
                    src={photo ? photo : '/profile-default.png'}
                    width={50}
                    height={50}
                    alt="Profile picture"
                    className="rounded-full align-middle border-none"
                    priority={true}
                />
            </div>
            <div className="flex flex-col flex-grow">
                <span
                    className={`flex items-center font-semibold text-white cursor-pointer hover:text-[#5CFFFF] text-[10px] sm:text-lg leading-normal ${lexend.className}`}
                    onClick={() => router.push(`/home/${username}`)}
                >
                    {nickname}
                </span>
                <span className={`text-[#305761] text-[8px] sm:text-sm leading-normal ${lexend.className}`}>
                    {'@' + username}
                </span>
            </div>
            {!isMe && (
                <>
                    <div className="ml-auto flex-shrink-0">
                        <div className={`mr-2 sm:mr-5 items-center justify-center text-center font-semibold ${lexend.className}`}>
                            <div className={`text-neutral-400 text-[8px] sm:text-sm leading-normal`}>Juegos</div>
                            <div className={`text-white text-[8px] sm:text-xs leading-normal`}>{reviews.length}</div>
                        </div>
                    </div>
                    <button className={`items-center justify-center text-center ml-2 px-2 sm:py-2 lg:px-3 py-1 sm:text-sm inline-flex 
                        w-16 sm:w-36 justify-center rounded-md text-neutral-400 border-2 text-neutral-300 h-full text-[8px] sm:text-base
                        bg-opacity-10 hover:bg-opacity-20
                        ${isFollowing
                            ? 'border-[#A61145] bg-[#A61145] hover:bg-[#A61145]'
                            : 'border-[#305761] bg-[#305761] hover:bg-[#305761]'}
                                `}
                        onClick={isFollowing ? handleUnfollow : handleFollow}
                    >
                        {isFollowing ? 'Dejar de seguir' : 'Seguir'}
                    </button>
                </>
            )}

            <Transition.Root show={badFollow} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setBadFollow}>
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
                                    <button className="absolute top-4 right-4" onClick={() => setBadFollow(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#737373" className="w-5 h-5 hover:fill-neutral-400">
                                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                        </svg>
                                    </button>
                                    <div className="bg-neutral-800 px-4 pt-6 sm:p-6">
                                        <div className="flex items-center justify-center text-center style={{ minWidth: '150px', minHeight: '200px' }">
                                            <div className="mt-5 sm:ml-4 sm:mt-0 mb-5 sm:mb-0">
                                                <Dialog.Title as="h1" className={`text-center mb-4 text-xl sm:text-2xl font-bold leading-6 text-white ${lexend.className}`}>
                                                    Uy, algo salió mal...
                                                </Dialog.Title>
                                                <div className="text-neutral-400 text-sm sm:text-base">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block w-[100px] h-[100px] fill-red-500">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z" clipRule="evenodd" />
                                                    </svg>
                                                    <p className="mb-3 mt-4">
                                                        <span className={`font-semibold text-base sm:text-xl ${lexend.className}`}>No fue posible que siguieras a <span className='text-red-500'>@{username}.</span> </span>
                                                    </p>
                                                    <p className="mt-2">
                                                        <span className='text-sm'>Por favor, intenta nuevamente.</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={badFollow} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setBadFollow}>
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
                                    <button className="absolute top-4 right-4" onClick={() => setBadFollow(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#737373" className="w-5 h-5 hover:fill-neutral-400">
                                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                        </svg>
                                    </button>
                                    <div className="bg-neutral-800 px-4 pt-6 sm:p-6">
                                        <div className="flex items-center justify-center text-center style={{ minWidth: '150px', minHeight: '200px' }">
                                            <div className="mt-5 sm:ml-4 sm:mt-0 mb-5 sm:mb-0">
                                                <Dialog.Title as="h1" className={`text-center mb-4 text-xl sm:text-2xl font-bold leading-6 text-white ${lexend.className}`}>
                                                    Uy, algo salió mal...
                                                </Dialog.Title>
                                                <div className="text-neutral-400 text-sm sm:text-base">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block w-[100px] h-[100px] fill-red-500">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z" clipRule="evenodd" />
                                                    </svg>
                                                    <p className="mb-3 mt-4">
                                                        <span className={`font-semibold text-base sm:text-xl ${lexend.className}`}>No fue posible que siguieras a <span className='text-red-500'>@{username}.</span> </span>
                                                    </p>
                                                    <p className="mt-2">
                                                        <span className='text-sm'>Por favor, intenta nuevamente.</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={badUnfollow} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setBadUnfollow}>
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
                                    <button className="absolute top-4 right-4" onClick={() => setBadUnfollow(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#737373" className="w-5 h-5 hover:fill-neutral-400">
                                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                        </svg>
                                    </button>
                                    <div className="bg-neutral-800 px-4 pt-6 sm:p-6">
                                        <div className="flex items-center justify-center text-center style={{ minWidth: '150px', minHeight: '200px' }">
                                            <div className="mt-5 sm:ml-4 sm:mt-0 mb-5 sm:mb-0">
                                                <Dialog.Title as="h1" className={`text-center mb-4 text-xl sm:text-2xl font-bold leading-6 text-white ${lexend.className}`}>
                                                    Uy, algo salió mal...
                                                </Dialog.Title>
                                                <div className="text-neutral-400 text-sm sm:text-base">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block w-[100px] h-[100px] fill-red-500">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z" clipRule="evenodd" />
                                                    </svg>
                                                    <p className="mb-3 mt-4">
                                                        <span className={`font-semibold text-base sm:text-xl ${lexend.className}`}>No fue posible que dejaras de seguir a <span className='text-red-500'>@{username}.</span> </span>
                                                    </p>
                                                    <p className="mt-2">
                                                        <span className='text-sm'>Por favor, intenta nuevamente.</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </div>
    );
}
