import React from "react";
import Badge from "./Badge";
import SecondaryButton from "./SecondaryButton";

function BigCard() {
    return (
        <div className="card w-full bg-putih shadow-xl grid md:grid-cols-2">
            <figure dir="ltr">
                <img
                    src="images/Gambar2.png"
                    alt="Foto Berita"
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body flex flex-col justify-center md:pl-8 md:gap-6">
                <h2 className="text-xl md:text-3xl font-semibold text-hitam">
                    Judul Berita
                </h2>
                <div className="flex gap-8 md:gap-16">
                    <Badge titleBadge="Depresi" />
                    <p className="text-hitam font-bold text-base">3 Mei 2023</p>
                </div>

                <p className="text-sm lg:text-base md:line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce non magna vel nulla dignissim tincidunt sit amet eget
                    metus.
                </p>
                <SecondaryButton>Lanjut Baca</SecondaryButton>
            </div>
        </div>
    );
}

export default BigCard;
