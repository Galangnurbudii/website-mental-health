import React from "react";
import Badge from "./Badge";

function ArticleCard() {
    return (
        <div className="card w-full md:w-96 bg-putih shadow-xl">
            <figure className="md:h-2/4">
                <img
                    src="images/Gambar1.png"
                    alt="Foto Berita"
                    className="w-full h-full"
                />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-semibold text-hitam">
                    Judul Berita
                </h2>
                <div className="flex gap-8 md:gap-16">
                    <Badge titleBadge="Depresi" />
                    <p className="text-hitam font-bold text-base">3 Mei 2023</p>
                </div>

                <p className="text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce non magna vel nulla dignissim tincidunt sit amet eget
                    metus.
                </p>
            </div>
        </div>
    );
}

export default ArticleCard;
