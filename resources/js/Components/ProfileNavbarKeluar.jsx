import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { FaQuestion } from 'react-icons/fa'
import { Link } from '@inertiajs/inertia-react'
import BackUpButton from './BackUpButton'

export default function ProfileNavbarKeluar({ desc }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            {/* // <PrimaryButton onClick={openModal} className='mt-7'>
    //     Konfirmasi Pembayaran
    // </PrimaryButton> */}

            <ul className="pt-2 space-y-8 mb-12 px-4 mt-8">
                <li>
                    <a
                        onClick={openModal}
                        className="flex gap-4 p-2 text-putih hover:text-primary transition font-medium text-lg hover:bg-putih hover:p-2 hover:rounded-md"
                    >
                        <FiLogOut size={25} />
                        Keluar
                    </a>
                </li>
            </ul>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="text-center w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 align-middle shadow-xl transition-all">
                                    <div className="flex justify-center py-10">
                                        <FaQuestion color="4C9BF5" size={70} />
                                        {/* <img src="images/approved.png" /> */}
                                    </div>

                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-bold leading-6 text-gray-900"
                                    >
                                        Apakah anda yakin untuk keluar?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-700 font-medium">
                                            {desc}
                                        </p>
                                    </div>

                                    <div className="flex gap-3 items-end justify-center pt-5">
                                        <Link href={route('login')}>
                                            <BackUpButton className="w-20 h-9 text-sm flex items-center justify-center">
                                                Ya
                                            </BackUpButton>
                                        </Link>
                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="w-20 h-9 inline-flex justify-center rounded-md border border-primary bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Tidak
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
