import Footer from "@/Components/Footer";
import ForumHero from "@/Components/ForumHero";
import Hero from "@/Components/Hero";
import NavBar from "@/Components/NavBar";
import Quote from "@/Components/Quote";
import React from "react";
import CardsCarousel from "@/Components/CardsCarousel";
import ArticleCard from "@/Components/ArticleCard";

export default function Coba() {
    return (
        <>
            <NavBar />
            <div className="flex px-4 py-20 min-h-screen bg-primary md:px-16">
                <ArticleCard />
            </div>
            <Footer />
        </>
    );
}
