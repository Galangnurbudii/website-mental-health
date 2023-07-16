import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DetailPsikolog from '@/Components/DetailPsikolog'
import DetailPayment from '@/Components/DetailPayment'
import CouponButton from '@/Components/CouponButton'
import Popup from '@/Components/Popup'
import SelectBox from '@/Components/SelectBox'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import PrimaryButton from '@/Components/PrimaryButton'
import { Link } from '@inertiajs/react'

export default function Layanan({ psikolog }) {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
        window.location.href = '/'
    }

    ///////////////////////////////////////////////

    const [error, setError] = useState('')
    const [selectedOption, setSelectedOption] = useState(
        'Pilih Metode Pembayaran'
    )
    const handleChange = (event) => {
        setSelectedOption(event.target.value)
        setError('')
    }

    let imageSrc = ''

    if (selectedOption === 'Bank BCA') {
        imageSrc = '../images/BNI.jpg'
    } else if (selectedOption === 'Bank BRI') {
        imageSrc = '../images/BRI.png'
    } else if (selectedOption === 'Bank BNI') {
        imageSrc = '../images/BCA.png'
    }

    function openModal() {
        if (!selectedOption || selectedOption === 'Pilih Metode Pembayaran') {
            setError('Metode Pembayaran harus diisi')
            return
        }
        setIsOpen(true)
    }

    // Detail Page
    const [showContent, setShowContent] = useState(false)
    const handleClick2 = () => {
        setShowContent(!showContent)
    }

    return (
        <div className="overflow-x-hidden">
            <NavBar />
            <div className="w-full flex items-start flex-col sm:flex-col md:flex-row lg:flex-row">
                <DetailPsikolog badge1="5 Tahun" badge2="4.9" psikolog={psikolog} />
                {/* right side */}
                <div
                    className="
                            w-full
                            sm:w-full 
                            md:w-[60%]
                            lg:w-[60%]
                            h-full bg-white p-6 md:pl-16 lg:pr-28 md:pr-16
                            flex flex-col"
                >
                    {/* Rincian Pembayaran*/}
                    <div className="w-full flex flex-col pt-4 md:pt-8 lg:pt-12 mt-2">
                        <h2 className="font-bold text-2xl pb-6">
                            Rincian Pembayaran
                        </h2>
                        <div className="pb-10">
                            <div
                                className="w-full shadow-xl border rounded-lg bg-disabledBackground mx-auto my-auto 
                                            md:pb-5 
                                            xs:p-5
                                            sm:p-5
                                            md:p-5
                                            lg:p-10 lg:py-20"
                            >
                                {/* lg:p-10 */}

                                <DetailPayment
                                    imageSrc={psikolog.foto_profil}
                                    names={psikolog.nama}
                                    jobs="Psikolog"
                                />

                                <div className="pt-5">
                                    <div className="border border-gray-100 card lg:card-side bg-base-100 shadow-sm rounded-sm overflow-x-auto">
                                        <div className="card-body xl:px-10 lg:px-4 md:px-10 sm:px-10 xs:px-4">
                                            <div className="flex flex-row justify-between">
                                                <h2 className="card-title text-sm text-disabled">
                                                    Biaya sesi untuk 1 jam
                                                </h2>
                                                <h2 className="card-title text-sm text-disabled">
                                                    Rp {psikolog.harga}
                                                </h2>
                                            </div>
                                            <h2 className="border-t-2 border-disabled-300"></h2>
                                            <div className="flex flex-row justify-between">
                                                <h2 className="card-title text-sm">
                                                    Total Biaya
                                                </h2>
                                                <h2 className="card-title text-sm">
                                                    Rp {psikolog.harga}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-5">
                                    <div className="border border-gray-100 card lg:card-side bg-base-100 shadow-sm rounded-sm overflow-x-auto">
                                        <div className="card-body flex flex-row xl:px-10 lg:px-4 md:px-10 sm:px-10 xs:px-4">
                                            {/* "Pakai" Button */}
                                            <input
                                                type="text"
                                                placeholder="Promo"
                                                className="input input-bordered w-full h-[34px] focus:outline-none"
                                            />
                                            <CouponButton
                                                className="h-0"
                                                onClick={handleClick2}
                                            >
                                                Pakai
                                            </CouponButton>
                                        </div>
                                    </div>
                                </div>

                                <div className="py-5">
                                    {/* <SelectBox /> */}
                                    {/* <Popup desc = "Silakan lakukan konsultasi sesuai dengan jadwal yang Anda buat."/>                           */}

                                    <>
                                        <div className="border border-gray-100 card lg:card-side bg-base-100 shadow-sm rounded-sm overflow-x-auto">
                                            <div className="w-full xl:px-10 lg:px-4 md:px-10 sm:px-10 xs:px-4">
                                                <div className="w-full rounded-2xl bg-white py-2">
                                                    <Disclosure>
                                                        {({ open }) => (
                                                            <>
                                                                <Disclosure.Button className="flex w-full justify-between rounded-lg pt-4 text-left text-sm font-bold text-disabled">
                                                                    {/* title & image*/}
                                                                    <div className="flex items-center">
                                                                        <div className="pr-5">
                                                                            {imageSrc && (
                                                                                <img
                                                                                    src={
                                                                                        imageSrc
                                                                                    }
                                                                                    alt="Selected Bank"
                                                                                />
                                                                            )}
                                                                        </div>
                                                                        <span className="flex items-center">
                                                                            {
                                                                                selectedOption
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <ChevronDownIcon
                                                                        className={` flex items-center ${
                                                                            open
                                                                                ? 'rotate-180 transform'
                                                                                : ''
                                                                        } h-5 w-5 text-disabled`}
                                                                    />
                                                                </Disclosure.Button>
                                                                <Disclosure.Panel className="pt-4 pb-2 text-sm text-disabled">
                                                                    {/* <RadioGroupButton /> */}
                                                                    <>
                                                                        <div>
                                                                            <div className="flex items-center justify-between mb-4 border-b-2 pb-5 border-disabled-300">
                                                                                <div className="flex items-center">
                                                                                    <img
                                                                                        className="w-8"
                                                                                        src="../images/BNI.jpg"
                                                                                    />
                                                                                    <label
                                                                                        htmlFor="default-radio-1"
                                                                                        className="ml-2 text-sm font-medium text-disabled"
                                                                                    >
                                                                                        Bank
                                                                                        BCA
                                                                                    </label>
                                                                                </div>
                                                                                <input
                                                                                    id="default-radio-2"
                                                                                    type="radio"
                                                                                    value="Bank BCA"
                                                                                    name="default-radio"
                                                                                    checked={
                                                                                        selectedOption ===
                                                                                        'Bank BCA'
                                                                                    }
                                                                                    onChange={
                                                                                        handleChange
                                                                                    }
                                                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                                                />
                                                                            </div>
                                                                            <div className="flex items-center justify-between mb-4 border-b-2 pb-5 border-disabled-300">
                                                                                <div className="flex items-center">
                                                                                    <img
                                                                                        className="w-8"
                                                                                        src="../images/BRI.png"
                                                                                    />
                                                                                    <label
                                                                                        htmlFor="default-radio-1"
                                                                                        className="ml-2 text-sm font-medium text-disabled"
                                                                                    >
                                                                                        Bank
                                                                                        BRI
                                                                                    </label>
                                                                                </div>
                                                                                <input
                                                                                    id="default-radio-1"
                                                                                    type="radio"
                                                                                    value="Bank BRI"
                                                                                    name="default-radio"
                                                                                    checked={
                                                                                        selectedOption ===
                                                                                        'Bank BRI'
                                                                                    }
                                                                                    onChange={
                                                                                        handleChange
                                                                                    }
                                                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                                                />
                                                                            </div>
                                                                            <div className="flex items-center justify-between mb-4">
                                                                                <div className="flex items-center">
                                                                                    <img
                                                                                        className="w-8"
                                                                                        src="../images/BCA.png"
                                                                                    />
                                                                                    <label
                                                                                        htmlFor="default-radio-1"
                                                                                        className="ml-2 text-sm font-medium text-disabled"
                                                                                    >
                                                                                        Bank
                                                                                        BNI
                                                                                    </label>
                                                                                </div>
                                                                                <input
                                                                                    id="default-radio-1"
                                                                                    type="radio"
                                                                                    value="Bank BNI"
                                                                                    name="default-radio"
                                                                                    checked={
                                                                                        selectedOption ===
                                                                                        'Bank BNI'
                                                                                    }
                                                                                    onChange={
                                                                                        handleChange
                                                                                    }
                                                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                </Disclosure.Panel>
                                                                <p className="text-sm text-red-500 pt-2 pb-4 pl-5">
                                                                    {error}
                                                                </p>
                                                            </>
                                                        )}
                                                    </Disclosure>
                                                </div>
                                            </div>

                                            <Transition
                                                appear
                                                show={isOpen}
                                                as={Fragment}
                                            >
                                                <Dialog
                                                    as="div"
                                                    className="relative z-10"
                                                    onClose={closeModal}
                                                >
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
                                                                        <img src="../images/approved.png" />
                                                                    </div>

                                                                    <Dialog.Title
                                                                        as="h3"
                                                                        className="text-lg font-bold leading-6 text-gray-900"
                                                                    >
                                                                        Pembayaran
                                                                        Anda
                                                                        Berhasil
                                                                    </Dialog.Title>
                                                                    <div className="mt-2">
                                                                        <p className="text-sm text-gray-700 font-medium">
                                                                            Silakan
                                                                            lakukan
                                                                            konsultasi
                                                                            sesuai
                                                                            dengan
                                                                            jadwal
                                                                            yang
                                                                            Anda
                                                                            buat.
                                                                        </p>
                                                                    </div>
                                                                </Dialog.Panel>
                                                            </Transition.Child>
                                                        </div>
                                                    </div>
                                                </Dialog>
                                            </Transition>
                                        </div>
                                    </>
                                </div>
                            </div>
                            <PrimaryButton onClick={openModal} className="mt-7">
                                Konfirmasi Pembayaran
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
