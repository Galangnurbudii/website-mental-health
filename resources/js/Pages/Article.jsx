import React from "react";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import SearchBar from "@/Components/SearchBar";
import BigCard from "@/Components/BigCard";
import Badge from "@/Components/Badge";
import ArticleCard from "@/Components/ArticleCard";

export default function Article() {
    return (
        <>
            <NavBar />

            <div className="flex flex-row px-44">
                <div className="flex flex-col justify-between gap-10 py-10">
                    <SearchBar />

                    <h1 className="text-2xl text-hitam gap-10 font-bold">
                        Topik Terkini
                    </h1>

                    <div className="flex flex-row justify-between w-1/4">
                        <Badge titleBadge="Depresi" />
                        <Badge titleBadge="Bunuh Diri" />
                        <Badge titleBadge="Percintaan" />
                        <Badge titleBadge="Anxiety" />
                    </div>
                    <BigCard />

                    <h1 className="text-2xl text-hitam gap-10 font-bold">
                        Artikel Lainnya
                    </h1>

                    <div className="flex flex-row justify-between gap-10">
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
