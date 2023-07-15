import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'

export default function Post({ post }) {
    console.log(post)
    return (
        <div className="relative">
            <div className="flex flex-col justify-between bg-white text-base border border-b-0 border-black rounded-lg px-8 py-4 h-full">
                <h6 className=" font-semibold text-xl py-2">Anonymous</h6>
                <h6 className="px-8 py-2 text-justify leading-4 line-clamp-3 sm:line-clamp-4 lg:line-clamp-5 text-md">
                    {post.konten}
                </h6>
                <a href="" className="flex justify-end">
                    <div className="relative flex flex-row items-center mb-2 py-2">
                        <button className="text-primary font-bold text-base mr-2">
                            Lanjut Baca
                        </button>
                        <IoArrowForwardOutline
                            className=" cursor-pointer"
                            size={20}
                            color="#4C9BF5"
                        />
                    </div>
                </a>
            </div>
            <div className="relative">
                <div className="pb-1 mt-2 absolute z-[100] border border-black border-t-0  bg-white bottom-1 rounded-b-lg w-full"></div>
                <div className="pb-2 mt-2 absolute z-[90]  bg-primary bottom-0 rounded-b-lg w-full"></div>
            </div>
        </div>
    )
}
