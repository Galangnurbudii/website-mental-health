import React from "react";

export default function ArticleRec() {
    return (
        <div className="mt-[20px] border border-black">
            <div className="lg:flex lg:flex-col 2xl:flex-row">
                <img src="images/pasangan.jpg" alt="Foto Berita" className="w-[75%] lg:w-[35%] md:ml-16 lg:ml-20 rounded-lg"/>
                <div className="md:pl-16 lg:pl-20 2xl:pl-0 2xl:ml-[20px]">
                    <h2 className="font-bold text-lg clear-left">Pasangan Selingkuh? Ikhlaskan Saja</h2>
                    <button className="border border-black rounded-sm py-[2px] px-[15px] mt-[10px] mb-[25px]">Pacar</button>
                </div>
            </div>
        </div>
    );
}
