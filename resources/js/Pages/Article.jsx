import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import React from "react";
import ArticleCard from "@/Components/ArticleCard";
import SearchBar from "@/Components/SearchBar";
import Badge from "@/Components/Badge";
import BigCard from "@/Components/BigCard";

export default function Article() {
    return (
        <>
            <NavBar />

            <div className="flex flex-col justify-between gap-8 md:gap-12 px-6 pt-20 pb-32 md:px-16 lg:px-20">
                <SearchBar />
                <div className="flex flex-col gap-8">
                    <h1 className="font-bold text-xl md:text-2xl text-hitam md:px-16 lg:px-20">
                        Topik Terkini
                    </h1>
                    <div className="md:px-16 lg:px-20">
                        <Badge titleBadge="Depresi" />
                        <Badge titleBadge="Bunuh Diri" />
                        <Badge titleBadge="Percintaan" />
                        <Badge titleBadge="Anxiety" />
                    </div>
                </div>

                <h1 className="font-bold text-xl md:text-2xl text-hitam md:px-16 lg:px-20">
                    Artikel Terpopuler
                </h1>
                <div className="md:px-16 lg:px-20">
                    <BigCard />
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
            <Footer />
        </>
    );
}
