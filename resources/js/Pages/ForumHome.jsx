import Post from "@/Components/Post";
import Footer from "@/Components/Footer1";
import NavBar from "@/Components/NavBar";
import React from "react";

export default function ForumHome() {
    return (
        <>
            <NavBar />
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <div className="w-[91.5%] md:w-[91.5%] lg:w-[82.5%] xl:w-[80%] 2xl:w-[97%] h-[61px] relative mt-[50px] mb-[25px]">
                            <div className="w-full h-[50px] flex">
                                <div className="border border-black w-[75%] h-[61px]">
                                    <button className='h-[61px] w-[179px] rounded-lg absolute ml-[60%] bg-primary text-[#FFFFFF] font-semibold text-base'>
                                        <span/>Postinganku<span/>
                                    </button>
                                </div>
                                <div className="border border-black w-[25%] h-[61px]">
                                    <button className='h-[61px] w-[179px] rounded-lg absolute right-0 bg-primary text-[#FFFFFF] font-semibold text-base'>
                                        <span/>Buat Posting<span/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>
                    <div className="w-5/6 lg:w-[900px]">
                        <div className="border border-black mt-[50px]">
                            A
                        </div>
                    </div>
                    <h1 className="font-bold text-xl md:text-2xl text-hitam md:px-16 lg:px-20">
                        Artikel Lainnya
                    </h1>
                    <div className="flex justify-center flex-col md:flex-row md:flex-wrap md:items-stretch items-center gap-6">
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
