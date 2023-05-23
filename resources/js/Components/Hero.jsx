import React from "react";
import PrimaryButton from "./PrimaryButton";
import { Link } from "@inertiajs/react";

function Hero() {
    return (
        <div className="bg-hoverBackground w-full md:h-[80vh] mx-auto flex flex-col md:flex-row items-center md:px-16 lg:px-32">
            <div className="flex flex-wrap flex-col max-full p-6 md:p-0 md:w-1/2 ">
                <div className="flex flex-col justify-center gap-2 pb-4 ">
                    <h1 className="text-hitam font-bold text-2xl md:text-4xl">
                        Konsultasikan Masalahmu dengan Psikolog
                    </h1>
                    <h2 className="text-hitam font-medium text-md md:text-2xl">
                        Psikolog dapat membantumu temukan akar masalah dan
                        mencarikan solusi
                    </h2>
                </div>
                <Link href={route("konsultasi")}>
                    <PrimaryButton className="text-xs px-2 py-1 w-44 md:w-56 md:text-base">
                        Konsultasi Sekarang
                    </PrimaryButton>
                </Link>
            </div>
            <div className="max-full md:flex md:justify-center px-4 md:w-1/2 sm:flex md:self-end">
                <img
                    src="images/landingPage.png"
                    alt="landingPage"
                    className="max-h-fit md:pt-32"
                />
            </div>
        </div>
    );
}

export default Hero;
