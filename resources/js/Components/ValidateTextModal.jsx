import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function ValidateTextModal({visible, onClose, text1, text2,route}) {
    const handleOnClose = (e) => {
        if (e.target.id == "container") onClose();
    };

    if(!visible) return null;
    return (
        <>
            <div id='container' onClick={handleOnClose} 
                className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm 
                            flex justify-center items-center'>
                <div className="absolute border border-black bg-[#FFFFFF] rounded-md text-center
                                 pt-[10px]
                                justify-center items-center">
                    <a href={route}>
                        <div className='relative'>
                            <IoClose
                                className='absolute mt-4 right-6'
                                size={30}
                                color="#736D6D"
                            />
                        </div>
                    </a>
                    <div className='flex justify-center items-center'>
                        <FaCheck
                            className='mt-16'
                            size={100}
                            color="#4C9BF5"
                        />
                    </div>
                    <h1 className='font-bold text-2xl'>
                        {text1}
                    </h1>
                    <h2 className='mb-16 mx-20 font-semibold'>
                        {text2}
                    </h2>
                </div>
            </div>
        </>
    )
}
