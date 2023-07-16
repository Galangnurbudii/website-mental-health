import Checkbox from '@/Components/Checkbox'
import PrimaryButton from '@/Components/PrimaryButton'
import DeleteUserForm from './profile/Partials/DeleteUserForm'

import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import ProfileNavbar from '@/Components/ProfileNavbar'

export default function HapusProfil({ desc }) {
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
                <div className="lg:px-96 md:px-40 px-10 pt-12 pb-16">
                    <h1 className="font-bold text-3xl py-5">Hapus Akun</h1>
                    <div className="flex items-center pb-10">
                        <img
                            className="pt-2 rounded-full"
                            src="images/doctorImage.png"
                            width={100}
                        />
                        <h2 className="font-semibold text-2xl pl-10 py-5">
                            Nathalia Chandra
                        </h2>
                    </div>
                    <div className="w-full p-5 shadow-xl rounded-lg border border-gray-300 bg-white mx-auto md:my-auto pb-5 md:pb-10 lg:pb-10">
                        {/* <div className="p-10">
                            <h2 className="border-b-2 pb-5">Hapus Profil</h2>
                            <p className="pt-4">
                                Sebelum menghapus profil Anda, ada beberapa hal
                                yang perlu diperhatikan:
                            </p>
                            <p className="py-2 pl-2">
                                1. Penghapusan tidak dapat dibatalkan dan tidak
                                akan ada cara untuk mendapatkan kembali akun
                                Anda setelah proses penghapusan dilakukan.
                            </p>
                            <p className="pl-2">
                                2. Semua riwayat pemesanan Anda akan tetap
                                berada dalam database kami
                            </p>
                            <label className="flex items-center">
                                <Checkbox
                                    className="mt-5"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="flex mt-5 font-semibold ml-2 text-sm text-disabled">
                                    Saya telah membaca dan menyetujui
                                    penghapusan akun
                                </span>
                            </label>
                        </div> */}
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </form>
    )
}
