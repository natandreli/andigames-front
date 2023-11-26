import { Lexend } from 'next/font/google';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import MiniProfileCard from './MiniProfileCard';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Counter({ followers, following, reviews }) {

    const [openModalFollowers, setOpenModalFollowers] = useState(false)
    const [openModalFollowing, setOpenModalFollowing] = useState(false)

    return (
        <div>
            <div className={`flex text-center mb-4 font-bold ${lexend.className}`}>
                <div className='mr-5'>
                    <button className='cursor-not-allowed'>
                        <div className={`text-neutral-400 text-xs lg:text-sm`}>Juegos</div>
                        <div className={`text-white text-[10px] lg:text-xs`}>{reviews.length}</div>
                    </button>
                </div>
                <div className='mr-5'>
                    <button
                        onClick={() => setOpenModalFollowers(true)}
                    >
                        <div className={`text-neutral-400 text-xs lg:text-sm`}>Seguidores</div>
                        <div className={`text-white text-[10px] lg:text-xs`}>{followers.length}</div>
                    </button>
                </div>
                <div className='mr-5'>
                    <button
                        onClick={() => setOpenModalFollowing(true)}
                    >
                        <div className={`text-neutral-400 text-xs lg:text-sm`}>Seguidos</div>
                        <div className={`text-white text-[10px] lg:text-xs`}>{following.length}</div>
                    </button>
                </div>
            </div>

            <Transition.Root show={openModalFollowers} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenModalFollowers}>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-xl">
                                    <button className="absolute top-4 right-4" onClick={() => setOpenModalFollowers(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#737373" className="w-3 h-3 sm:w-5 sm:h-5 hover:fill-neutral-400">
                                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                        </svg>
                                    </button>
                                    <div className="bg-neutral-800 px-3 py-7 sm:p-10">
                                        {followers.length != 0 ? (
                                            <div className="text-left text-neutral-400 text-base">
                                                {followers.map((follower) =>
                                                    <MiniProfileCard
                                                        key={follower.nickname}
                                                        photo={follower.photo}
                                                        nickname={follower.username}
                                                        username={follower.nickname}
                                                        reviews={follower.reviews}
                                                    />
                                                )}
                                            </div>
                                        ) : (
                                            <div className='py-10 items-center justify-center flex flex-wrap gap-6 lg:gap-8'>
                                                <span className='text-neutral-400 text-center w-full'>Aún no hay seguidores</span>
                                            </div>
                                        )}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={openModalFollowing} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenModalFollowing}>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-2xl sm:mx-10 ">
                                    <button className="absolute top-4 right-4" onClick={() => setOpenModalFollowing(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#737373" className="w-3 h-3 sm:w-5 sm:h-5 hover:fill-neutral-400">
                                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                        </svg>
                                    </button>
                                    <div className="bg-neutral-800 px-3 py-7 sm:p-10">
                                        {following.length != 0 ? (
                                            <div className="text-left text-neutral-400 text-base">
                                                {following.map((follower) =>
                                                    <MiniProfileCard
                                                        key={follower.nickname}
                                                        photo={follower.photo}
                                                        nickname={follower.username}
                                                        username={follower.nickname}
                                                        reviews={follower.reviews} />
                                                )}
                                            </div>
                                        ) : (
                                            <div className='py-10 items-center justify-center flex flex-wrap gap-6 lg:gap-8'>
                                                <span className='text-neutral-400 text-center w-full'>Aún no hay seguidos</span>
                                            </div>
                                        )}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </div >
    );
}