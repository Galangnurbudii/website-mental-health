import Post from "@/Components/Post";
import ArticleRec from "@/Components/ArticleRec";
import Footer from "@/Components/Footer1";
import NavBar from "@/Components/NavBar";
import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";

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
                    <div className="w-5/6 mt-[100px] mb-[50px] ml-[60px] md:ml-[20px] relative">
                        <h1 className="font-bold text-xl md:text-2xl text-hitam md:px-16 lg:px-20 mb-[20px]">
                            Rekomendasi Topik
                        </h1>
                        <button className="disabled border border-black rounded ml-[80px] mb-[25px] py-[5px] px-[15px]">
                            Depresi
                        </button>
                        <h1 className="font-bold text-xl md:text-2xl text-hitam md:px-16 lg:px-20 mb-[25px]">
                            Artikel Lainnya
                        </h1>
                        <div className="justify-center md:flex-wrap md:items-stretch items-center gap-6 mb-[50px]">
                            <ArticleRec/>
                            <ArticleRec/>
                            <ArticleRec/>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl md:text-2xl text-hitam md:px-16 lg:px-20 mb-[10px]">Konsultasikan dengan Ahli</h1>
                            <h2 className="text-hitam md:px-16 lg:px-20 mb-[20px]">Ingin bercerita? Psikolog siap mendengarkan</h2>
                            <div className="md:px-16 lg:px-20 w-[75%] md:w-[100%]">
                                <div className="xl:flex border border-black rounded-lg md:w-[100%] lg:w-[50%] xl:w-[65%] 2xl:w-[100%]">
                                    <img src="images/pasangan.jpg" alt="" className="w-[75%] lg:w-[50%] xl:w-[40%] mx-[25px] my-[25px] rounded-lg"/>
                                    <div className="mt-[25px] ml-[25px] mb-[25px]">
                                        <h2 className="font-bold text-lg">Psikolog</h2>
                                        <h3>Kami siap mendengarkan cerita Anda</h3>
                                        <a href={route("konsultasi")}>
                                            <PrimaryButton className="border border-black rounded-lg px-[10px] py-[2px] mt-[25px]">
                                                Konsultasi
                                            </PrimaryButton>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
