import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Lexend } from 'next/font/google';
import { useRouter } from 'next/navigation';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

const navigation = [
    // { name: 'Amigos', actualPage: 'home/friends', nextPage: '/home/friends' },
    { name: 'Juegos y Recomendaciones', actualPage: 'home/recommended', nextPage: '/home/recommended' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({ actualPage = '' }) {

    const router = useRouter();

    function handleLogout() {
        document.cookie = 'accessToken=; path=/; max-age=0; samesite=strict; secure';
        document.cookie = 'accessUsername=; path=/; max-age=0; samesite=strict; secure';
        router.push('/');
    }

    return (
        <Disclosure as="nav" className="">
            {({ open }) => (
                <>
                    <div className="py-6 px-10 w-full">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-neutral-700 hover:bg-opacity-50 hover:text-white focus:outline-none">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:justify-start">
                                <div className="flex items-center flex-shrink-0 text-white">
                                    <img src='/AndiGamesLogo-white-big-letters.png'
                                        alt='AndiGames Logo'
                                        className={`w-[170px] h-auto hover:cursor-pointer hover:opacity-70`}
                                        onClick={() => router.push('/home')}
                                    >
                                    </img>
                                </div>
                                <div className="flex items-center justify-center hidden sm:ml-6 sm:block">
                                    <div className="flex text-center space-x-4 text-xs lg:text-sm font-semibold items-center justify-center">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                className={
                                                    `${actualPage === item.actualPage ? "text-white cursor-not-allowed border-[#5CFFFF]" : "text-white hover:text-[#5CFFFF] cursor-pointer border-transparent hover:border-[#5CFFFF]"}
                                                    border-b-2`
                                                }
                                                onClick={() => router.push(item.nextPage)}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <button
                                        className="text-white hover:text-[#5CFFFF] cursor-pointer"
                                        onClick={handleLogout}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-2 rounded-md">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    className={classNames(
                                        item.actualPage === actualPage
                                            ? 'bg-[#5CFFFF] bg-opacity-10 text-white'
                                            : 'text-white hover:bg-[#5CFFFF] hover:bg-opacity-20',
                                        'block rounded-md mx-11 px-3 py-2 text-xs font-semibold'
                                    )}
                                    onClick={() => router.push(item.nextPage)}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>

                </>
            )}
        </Disclosure>
    )
}