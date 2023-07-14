import Post from "@/Components/Post";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import React from "react";

export default function ForumHome({posts}) {
    console.log(posts)
    return (
        <>
            <NavBar />
            {/* 
             md:w-[91.5%] 
             lg:w-[82.5%] 
             xl:w-[80%] 
            2xl:w-[90.5%]  
            */}
            <div className="w-[90.5%] 
                            h-[61px] relative mt-[50px] mb-[25px]">
                <a href={route("forum")}>
                    <button className="h-[61px] w-[179px] rounded-lg absolute right-0 bg-primary text-secondaryPost font-semibold text-base">
                        <span />
                            Buat Posting
                        <span />
                    </button>
                </a>
            </div>

            {/* <div className="flex ml-[10.8%]">
                <div className="mb-[50px]">
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="mb-[50px]">
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div> */}

            <div className="flex flex-col lg:flex-row 
                            mx-[9.3%] gap-7">
                <div className="mb-[50px]">
                    {posts.map((post, index) => (
                            <Post key={index} post={post} />
                        ))}
                </div>
                <div className="mb-[50px] -mt-24 lg:-mt-0">
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
            <Footer/>
        </>
    );
}
