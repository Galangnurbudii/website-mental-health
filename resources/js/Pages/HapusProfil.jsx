import Checkbox from '@/Components/Checkbox'
import PrimaryButton from '@/Components/PrimaryButton'
import DeleteUserForm from './profile/Partials/DeleteUserForm'

import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import ProfileNavbar from '@/Components/ProfileNavbar'

export default function HapusProfil({ desc, auth }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [isChecked, setIsChecked] = useState(false)
    const [isValid, setIsValid] = useState(true)

    function handleCheckboxChange() {
        setIsChecked(!isChecked)
        setIsValid(true) // Reset isValid state when checkbox is checked
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (!isChecked) {
            setIsValid(false)
            setIsOpen(false)
        } else {
            setIsValid(true)
            setIsOpen(true)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <ProfileNavbar />
                <div className="flex flex-col gap-6 px-6 md:px-16 lg:pl-96 lg:pr-60 pb-32">
                    <h1 className="text-hitam font-bold text-2xl md:text-4xl pt-12">
                        Hapus Akun
                    </h1>
                    <div className="flex flex-row md:py-6">
                        <div className="rounded-full overflow-hidden w-32 h-32 md:w-48 md:h-48">
                            <img
                                src="../../images/fotoProfil.jpeg"
                                alt="Profile Photo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-hitam font-semibold text-2xl pl-4 md:pl-10 py-5 flex items-center">
                            {auth.user.name}
                        </h2>
                    </div>
                    <div className="w-full p-5 shadow-xl rounded-lg border border-gray-300 bg-putih mx-auto md:my-auto pb-5 md:pb-10">
                        <DeleteUserForm className="w-full" />
                    </div>
                </div>
            </div>
        </form>
    )
}
