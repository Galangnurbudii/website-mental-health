import React from "react";
import { IoArrowForwardOutline } from 'react-icons/io5'

export default function Post({ post }) {
    
    console.log(post)
    return (
        <div className="relative">
            <div className="h-[209px] lg:h-[245px] bg-primary rounded-lg mt-5">
            </div>
            <div id="kotak-content" 
                className="bg-white
                            text-base border border-black rounded-lg
                            h-[200px] lg:h-[236px]
                            mb-7 
                            -mt-[209px] lg:-mt-[245px]">
                <h6 className="mt-[15px] ml-[25px] font-semibold text-xl">
                    Anonymous
                </h6>
                <h6 className="my-[25px] mx-[50px] text-justify 
                                leading-4 line-clamp-3 sm:line-clamp-4 lg:line-clamp-5 text-md">
                    {post.konten}
                </h6>
                <a href="">
                    <div className="relative">
                        <button className="absolute w-[125px] h-[35px] right-16
                                            text-primary font-bold text-base">
                            Lanjut Baca
                        </button>
                        <IoArrowForwardOutline
                            className='absolute cursor-pointer right-12 top-2'
                            size={20}
                            color="#4C9BF5"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
}
