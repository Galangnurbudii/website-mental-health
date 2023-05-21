import Footer from "@/Components/Footer";
import Footer1 from "@/Components/Footer1";
import ForumHero from "@/Components/ForumHero";
import Hero from "@/Components/Hero";
import NavBar from "@/Components/NavBar";
import React from "react";

export default function Coba() {
    return (
        <>
            <NavBar />
            <div className="flex flex-col gap-20 pb-20">
                <Hero />
                <ForumHero />
            </div>
            <Footer />
        </>
    );
}
