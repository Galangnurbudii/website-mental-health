import Post from "@/Components/Post";
import Footer from "@/Components/Footer";
import NavBarUser from "@/Components/NavBarUser";
import React from "react";

export default function ForumHome() {
    return (
        <>
            <NavBarUser/>
            <div>
                <div className="w-[91.5%] md:w-[91.5%] lg:w-[82.5%] xl:w-[80%] 2xl:w-[73.5%] h-[61px] relative mt-[50px] mb-[25px]">
                    <button className='h-[61px] w-[179px] rounded-lg absolute right-0 bg-primaryPost text-[#FFFFFF] font-semibold text-base'>
                        <span/>Buat Posting<span/>
                    </button>
                </div>
                <Post/>
                <Post/>
                <Post/>
            </div>
            <Footer/>
        </>
    );
}
