import React, { useState } from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'

export default function Post({ post }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handlePopupOpen = () => {
        setIsPopupOpen(true)
    }

    const handlePopupClose = () => {
        setIsPopupOpen(false)
    }

    return (
        <div className="relative">
            <div className="flex flex-col justify-between bg-white text-base border border-b-0 border-black rounded-lg px-8 py-4 h-full">
                <h2 className="text-hitam font-semibold text-xl py-2">
                    Anonymous
                </h2>
                <h6 className="text-hitam p-2 text-justify leading-4 line-clamp-3 lg:line-clamp-5 text-md">
                    {post.konten}
                </h6>
                <a
                    href="#"
                    className="flex justify-end"
                    onClick={handlePopupOpen}
                >
                    <div className="relative flex flex-row items-center mb-2 py-2">
                        <button className="text-primary font-bold text-base mr-2">
                            Lanjut Baca
                        </button>
                        <IoArrowForwardOutline
                            className="cursor-pointer"
                            size={20}
                            color="#4C9BF5"
                        />
                    </div>
                </a>
            </div>
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-hitam opacity-50 z-40"></div>
                    <div className="relative bg-putih rounded-lg p-8 max-w-4xl z-50 mx-6">
                        <h2 className="text-hitam font-semibold text-xl py-2">
                            Anonymous
                        </h2>
                        <p className="text-hitam text-md">{post.konten}</p>
                        <button
                            className="mt-4 bg-primary text-putih py-2 px-4 rounded-lg"
                            onClick={handlePopupClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="relative">
                <div className="pb-1 mt-2 absolute z-30 border border-black border-t-0 bg-putih bottom-1 rounded-b-lg w-full"></div>
                <div className="pb-2 mt-2 absolute z-20 bg-primary bottom-0 rounded-b-lg w-full"></div>
            </div>
        </div>
    )
}
