import Footer from "@/Components/Footer";
import ForumHero from "@/Components/ForumHero";
import Hero from "@/Components/Hero";
import NavBar from "@/Components/NavBar";
import Quote from "@/Components/Quote";
import React from "react";
import CardsCarousel from "@/Components/CardsCarousel";

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="flex flex-col pb-20 min-h-screen">
                <Hero />

                <ForumHero />
                <Quote />
                <div className="px-10 md:px-20 lg:px-40 bg-primary">
                    <CardsCarousel
                        imageSrc="images/petik.png"
                        text="Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget"
                        names="Tatang Munajir - Mahasiswa"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
