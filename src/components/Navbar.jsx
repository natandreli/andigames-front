import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Lexend } from 'next/font/google';
import { useRouter } from 'next/navigation';

const lexend = Lexend({ subsets: ['latin'], weights: [400, 500, 600, 700] })

const navigation = [
    { name: 'Inicio', actualPage: 'home', nextPage: '/home' },
    { name: 'Amigos', actualPage: 'home/friends', nextPage: '/home/friends' },
    { name: 'Recomendado', actualPage: 'home/recommended', nextPage: '/home/recommended' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({ actualPage = '' }) {

    const router = useRouter();

    return (
        <Disclosure as="nav" className="">
            {({ open }) => (
                <>
                    <div className="py-6 px-10 w-full">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-neutral-700 hover:bg-opacity-50  hover:text-white focus:outline-none">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center  sm:justify-start">
                                <div className="flex items-center flex-shrink-0 text-white">
                                    <span className={`text-white font-bold sm:text-lg text-xs tracking-tight ${lexend.className}`}>
                                        ANDIGAMES
                                    </span>
                                </div>
                                <div className="flex items-center justify-center hidden sm:ml-6 sm:block">
                                    <div className="flex text-center space-x-4 text-xs lg:text-sm font-semibold items-center justify-center">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                className={classNames(
                                                    actualPage === item.actualPage ? "text-neutral-600 cursor-not-allowed" : "text-white hover:text-blue-600 cursor-pointer"
                                                )}
                                                onClick={() => router.push(item.nextPage)}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
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
                                            ? 'bg-neutral-700 bg-opacity-50 text-neutral-400'
                                            : 'text-white hover:bg-blue-600 hover:text-white',
                                        'block rounded-md  mx-11 px-3 py-2 text-xs font-semibold'
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