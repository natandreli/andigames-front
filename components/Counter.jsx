import { Lexend } from 'next/font/google';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import MiniProfileCard from './MiniProfileCard';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Counter({ followers, following, games }) {
    const [openModalFollowers, setOpenModalFollowers] = useState(false)
    const [openModalFollowing, setOpenModalFollowing] = useState(false)

    return (
        <div>
            <div className={`flex text-center mb-4 font-bold ${lexend.className}`}>
                <div className='mr-5'>
                    <button className='cursor-not-allowed'>
                        <div className={`text-neutral-400 text-xs lg:text-sm`}>Juegos</div>
                        <div className={`text-white text-[10px] lg:text-xs`}>{games}</div>
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
                                    <div className="bg-neutral-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="text-left text-neutral-400 text-base">
                                            {followers.map((follower) =>
                                                <MiniProfileCard
                                                    key={follower.username}
                                                    photo={follower.photo}
                                                    nickname={follower.nickname}
                                                    username={follower.username}
                                                    games={follower.games} />
                                            )}
                                        </div>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-xl">
                                    <div className="bg-neutral-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="text-left text-neutral-400 text-base">
                                            {following.map((follower) =>
                                                <MiniProfileCard
                                                    key={follower.username}
                                                    photo={follower.photo}
                                                    nickname={follower.nickname}
                                                    username={follower.username}
                                                    games={follower.games} />
                                            )}
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