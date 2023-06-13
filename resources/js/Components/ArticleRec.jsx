import React from "react";

export default function ArticleRec() {
    return (
        <div className="w-full mt-[20px]">
            <div className="lg:flex lg:flex-col xl:flex-row">
                <img src="images/pasangan.jpg" alt="Foto Berita" className="w-[75%] lg:w-[35%] md:pl-16 lg:pl-20 rounded-lg"/>
                <div className="md:pl-16 lg:pl-20 xl:pl-0 xl:ml-[20px]">
                    <h2 className="font-bold text-lg">Pasangan Selingkuh? Ikhlaskan Saja</h2>
                    <button className="border border-black rounded-sm py-[2px] px-[15px] mt-[10px] mb-[25px]">Pacar</button>
                </div>
            </div>
        </div>
    );
}
