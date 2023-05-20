import PrimaryButton from "@/Components/PrimaryButton";
import CardArticle from "@/Components/CardArticle";
import CardsCarousel from "@/Components/CardsCarousel";
import React from "react";
import NavBarUser from "@/Components/NavBarUser";
import Footer from "@/Components/Footer";

export default function Home() {
    return (
        <>
            <NavBarUser />
            <div className="min h-screen bg-putih w-full flex flex-col justify-between">
                <div className="bg-cardBlue flex flex-row justify-between px-40">
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col justify-between gap-4">
                            <p className="text-4xl font-bold">
                                Konsultasikan Masalahmu dengan Psikolog
                            </p>
                            <p className="text-3xl">
                                Psikolog dapat membantumu temukan akar masalah
                                dan mencarikan solusi
                            </p>
                            <div className="">
                                <PrimaryButton className="justify-center">
                                    Konsultasi
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>

                    <img
                        className="w-"
                        src="images/landingPage.png"
                        alt="Psikolog"
                    />
                </div>

                {/* <div className="px-40">
                    <p className="text-4xl font-semibold pb-10">
                        Artikel Terbaru
                    </p>
                    <div className="flex flex-row justify-between gap-10">
                        <CardArticle />
                        <CardArticle />
                        <CardArticle />
                    </div>
                </div>

                <div className="bg-cardBlue flex flex-row justify-between px-40">
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col justify-between gap-4">
                            <p className="text-4xl font-semibold">
                                Tuliskan Ceritamu di Forum
                            </p>
                            <p className="text-3xl">
                                Forum bersama jadi wadah untuk bertukar rasa dan
                                cerita
                            </p>
                            <div className="">
                                <PrimaryButton className="h-14 justify-center">
                                    Tulis Ceritamu
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>

                    <img
                        className=" py-12"
                        src="images/forum.png"
                        alt="Forum"
                    />
                </div>

                <div className="flex flex-row justify-between px-40">
                    <div className="mr-20">
                        <span className="text-9xl text-primary">“</span>
                        <div className="flex flex-col items-end">
                            <p className="text-5xl font-semibold leading-normal">
                                You don’t have to control your thoughts. You
                                just have to stop letting them control you
                            </p>
                            <span className="text-9xl text-primary mt-2">
                                ”
                            </span>
                        </div>
                    </div>

                    <img src="images/quote.png" alt="quote" />
                </div>

                <div className="px-10 md:px-20 lg:px-40 bg-hoverBackground py-20">
                    <p className="text-4xl font-semibold pb-10">
                        Cerita Mereka
                    </p>
                    <CardsCarousel
                        imageSrc="images/petik.png"
                        text="Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget"
                        names="Tatang Munajir - Mahasiswa"
                    />
                </div> */}
            </div>
            <Footer />
        </>
    );
}
