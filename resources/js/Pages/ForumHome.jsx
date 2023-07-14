import Post from "@/Components/Post";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import React from "react";
import ArticleRec from '@/Components/ArticleRec'
import PrimaryButton from '@/Components/PrimaryButton'


export default function ForumHome() {
    return (
        <>
            <NavBar />
            <div>
                <div className="w-[91.5%] md:w-[91.5%] lg:w-[82.5%] xl:w-[80%] 2xl:w-[73.5%] h-[61px] relative mt-[50px] mb-[25px]">
                    <a href={route("forum")}>
                        <button className="h-[61px] w-[179px] rounded-lg absolute right-0 bg-primary text-secondaryPost font-semibold text-base">
                            <span />
                                Buat Posting
                            <span />
                        </button>
                    </a>
                </div>
                <div className="mb-[50px]">
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
            <Footer />
        </>
    )
}
