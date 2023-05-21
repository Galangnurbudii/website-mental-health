import Post from "@/Components/Post";
import Footer from "@/Components/Footer1";
import NavBar from "@/Components/NavBar";
import React from "react";

export default function ForumHome() {
    return (
        <>
            <NavBar />
            <div>
                <div className="w-[91.5%] md:w-[91.5%] lg:w-[82.5%] xl:w-[80%] 2xl:w-[73.5%] h-[61px] relative mt-[50px] mb-[25px]">
                    <button className="h-[61px] w-[179px] rounded-lg absolute right-0 bg-primaryPost text-secondaryPost font-semibold text-base">
                        <span />
                        Buat Posting
                        <span />
                    </button>
                </div>
                <Post />
                <Post />
                <Post />

                {/* <div className="flex items-center justify-center mt-[50px]">
                    <div className="border-2 border-black rounded-sm w-[900px] h-[100px]">
                    <input type="text" className="w-full">
                    </input>
                    </div>
                </div> */}

                <Footer />
            </div>
        </>
    );
}
