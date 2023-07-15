import React from 'react'
import { FaCheck } from "react-icons/fa6";

export default function EditPsikologModal({visible, onClose}) {
    const handleOnClose = (e) => {
        if (e.target.id == "container") onClose();
    };

    if(!visible) return null;
    return (
        <>
            <div id='container' 
                onClick={handleOnClose} 
                className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm 
                            flex justify-center items-center'>
                <div className="absolute border rounded-xl border-black bg-[#FFFFFF] 
                                w-[35%] h-auto">
                    <div className='flex justify-center items-center'>
                        <FaCheck
                            className='mt-12'
                            size={100}
                            color="#4C9BF5"
                        />
                    </div>
                    <div className="text-center
                                    sm:pb-6 md:pb-10 2xl:pb-16
                                    sm:pt-2 md:pt-6
                                    flex flex-col">
                        <h1 className='text-2xl'>
                            Update sukses!
                        </h1>
                        <h2 className='text-lg'>
                            Data telah berhasil diperbarui 
                            dan perubahan telah disimpan.
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
