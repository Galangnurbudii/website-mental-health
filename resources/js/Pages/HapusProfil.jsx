import NavProfil from '@/Components/NavProfil'
import Checkbox from '@/Components/Checkbox'
import PrimaryButton from '@/Components/PrimaryButton'
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Popup2 from '@/Components/Popup2';

export default function HapusProfil({desc}){

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
      window.location.href = "/";
    }
  
    function openModal() {
      setIsOpen(true)
    }

    const [isChecked, setIsChecked] = useState(false);
    const [isValid, setIsValid] = useState(true);

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
        setIsValid(!isValid);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
    
        if (!isChecked) {
          setIsValid(false);    
          setIsOpen(false)      
        } else {
          setIsValid(true);
          openModal();
        }
      }      

    return(
    <form onSubmit={handleSubmit}>
        <div>
            <NavProfil />
            <div className='lg:px-80 md:px-40 px-10 py-20'>
                <h1 className="font-bold text-3xl py-5">
                    Hapus Akun
                </h1>
                <div className='flex items-center pb-10'>
                    <img className="pt-2 rounded-full" src="images/doctorImage.png" width={100}/>
                    <h2 className='font-semibold text-2xl pl-10 py-5'>Nathalia Chandra</h2>
                </div>         
                <div className='w-full shadow-xl rounded-lg border border-gray-300 bg-white mx-auto md:my-auto pb-5 md:pb-10 lg:pb-10'>
                    <div className='p-10'>
                        <h2 className='border-b-2 pb-5'>
                            Hapus Profil
                        </h2>
                        <p className='pt-4'>
                        Sebelum menghapus profil Anda, ada beberapa  hal yang perlu diperhatikan:
                        </p>
                        <p className='py-2 pl-2'>
                            1. Penghapusan tidak dapat dibatalkan dan tidak akan ada cara untuk mendapatkan kembali akun Anda setelah proses penghapusan dilakukan.
                        </p>
                        <p className='pl-2'>
                            2. Semua riwayat pemesanan Anda akan tetap berada dalam database kami
                        </p>                                                                                                                                                   
                            <label className="flex items-center">
                                <Checkbox
                                    className='mt-5'                                    
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="flex mt-5 font-semibold ml-2 text-sm text-disabled">
                                    Saya telah membaca dan menyetujui penghapusan akun
                                </span>
                            </label>                                                                        
                    </div>                    
                </div>       

                {!isValid && (
                    <p className="text-red-500 text-sm mt-5">Checkbox harus di isi.</p>
                )}

                <PrimaryButton onClick={openModal} className='mt-7'>
                    Hapus Akun
                </PrimaryButton>

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
                            <div className='flex justify-center py-10'>
                            <img src="images/approved.png"/>
                            </div>
                            
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-bold leading-6 text-gray-900"
                            >
                                Akun Berhasil Dihapus
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-700 font-medium">
                                Jangan khawatir Anda dapat membuat akun lagi dengan melakukan registrasi.
                                </p>
                            </div>

                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </Dialog>
                </Transition>
                            
            </div>

        </div>
        </form>
    )

}