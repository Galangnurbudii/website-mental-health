import React from "react";
import PrimaryButton from "./PrimaryButton";

function Hero() {
    return (
        <div className="bg-hoverBackground w-full mx-auto flex-wrap md:flex items-center">
            <div className="flex flex-wrap flex-col max-full p-4 md:w-1/2 md:pl-16">
                <div className="flex flex-col justify-center gap-2 pb-4">
                    <h1 className="text-hitam font-bold text-lg md:text-4xl">
                        Konsultasikan Masalahmu dengan Psikolog
                    </h1>
                    <h2 className="text-hitam font-medium text-md md:text-2xl">
                        Psikolog dapat membantumu temukan akar masalah dan
                        mencarikan solusi
                    </h2>
                </div>

                <PrimaryButton className="text-xs px-2 py-1 w-44 md:w-56 md:text-base">
                    Konsultasi Sekarang
                </PrimaryButton>
            </div>
            <div className="max-full md:flex md:justify-center px-4 md:w-1/2 md:pr-10">
                <img
                    src="images/landingPage.png"
                    alt="landingPage"
                    className="w-[364px] h-[283px] md:w-[600px] md:h-[400px] lg:h-[500px]"
                />
            </div>
        </div>
    );
}

export default Hero;
