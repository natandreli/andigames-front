import { Lexend } from 'next/font/google';
import Image from 'next/image';
import Counter from '@/components/Counter';
import { follow, getUserFollowersAndFollowing } from '@/services/usersServices/usersServices';
import { getCookieValue } from '@/utils/getCookieValue';
import { useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react'

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function ProfileCard({ photo, reviews, following, followers, nickname, username, description }) {

    const router = useRouter();

    const [isFollowing, setIsFollowing] = useState(false);
    const [newFollowing, setNewFollowing] = useState(following);
    const [newFollowers, setNewFollowers] = useState(followers);

    const [badFollow, setBadFollow] = useState(false);

    async function handleFollow() {
        const accessToken = getCookieValue('accessToken');
        if (!accessToken || accessToken.trim() === '') {
            router.push('/');
        } else {
            const accessUsername = getCookieValue('accessUsername');
            console.log(accessUsername);
            console.log(username)
            console.log(accessToken)
            const res = await follow(username, accessUsername, accessToken);
            if (res) {
                setIsFollowing(true);
                const res2 = await getUserFollowersAndFollowing(username);
                if (res2) {
                    setNewFollowing(res2.following);
                    setNewFollowers(res2.followers);
                }
            } else {
                setBadFollow(true);
            }
        }
    }

    const handleUnfollow = () => {
        setIsFollowing(false);
    }

    useEffect(() => {
        const accessToken = getCookieValue('accessToken');
        if (!accessToken || accessToken.trim() === '') {
            router.push('/');
        } else {
            const accessUsername = getCookieValue('accessUsername');
            console.log(accessUsername);
            console.log(newFollowers)
            if (newFollowers.some((user) => user.nickname === accessUsername)) {
                setIsFollowing(true);
            }
        }
    }, []);

    return (
        <div className="flex flex-col sm:flex-row items-center h-full w-full">
            <div className="mb-4 lg:mr-6 items-center flex justify-center" style={{ minWidth: '150px', minHeight: '150px' }}>
                <Image
                    src={photo ? photo : '/profile-default.png'}
                    width={110}
                    height={110}
                    alt="Profile picture"
                    className="rounded-full align-middle border-none max-w-3/4"
                    priority={true}
                />
            </div>
            <div className="justify-center flex flex-col">
                <Counter
                    reviews={reviews}
                    following={newFollowing}
                    followers={newFollowers}
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
                <button
                    className={`mt-4 items-center justify-center text-center px-2 lg:px-3 py-1 text-sm sm:text-base inline-flex justify-center rounded-md border-2 text-neutral-300  hover:bg-opacity-20
                                ${isFollowing
                            ? 'bg-opacity-5 border-[#A61145] bg-[#A61145] hover:bg-[#A61145] sm:w-40'
                            : 'bg-opacity-5 border-[#305761] bg-[#305761] hover:bg-[#305761] sm:w-24'}
                                `}
                    onClick={isFollowing ? handleUnfollow : handleFollow}
                >
                    {isFollowing ? 'Dejar de seguir' : 'Seguir'}
                </button>
            </div>

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

        </div>
    );
}
