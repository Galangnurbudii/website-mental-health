import PrimaryButton from "@/Components/PrimaryButton";
import CardsCarousel from "@/Components/CardsCarousel";
import Cards from "@/Components/Cards";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { Scrollbar } from 'react-scrollbars-custom';
import { Link } from "@inertiajs/react";

export default function Konsultasi() {
    return (
        <div className="pt-15">

            <NavBar />
            <div className="bg-cardBlue w-full md:h-[80vh] mx-auto flex flex-col md:flex-row items-center md:px-16 lg:pl-32">
            <div className="flex flex-wrap flex-col max-full p-6 md:p-0 md:w-1/2 ">
                <div className="flex flex-col justify-center gap-2 pb-4 ">
                    <h1 className="text-hitam font-bold text-2xl md:text-4xl">
                        Konseling dengan Psikolog Terbaik
                    </h1>
                    <h2 className="text-hitam font-medium text-md md:text-2xl">
                        Ceritakan isi hatimu, temukan akar masalah dan jadi pribadi lebih baik
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
                    src="images/consultationBanner.png"
                    alt="landingPage"
                    className="max-h-full w-full md:pt-32"
                />
            </div>
        </div>

            {/* 3 Langkah Melakukan Konseling */}

            <div className="w-full pt-24">
                {/* w-full py-[6rem] px-4 */}
                <div className="w-full py-[1rem] pl-4 pr-5">

                    <h1
                        className="font-semibold pb-5
                        px-10
                        md:px-16
                        lg:px-32
                        text-lg
                        sm:text-xl
                        md:text-4xl
                        lg:text-5xl"
                    >
                        3 Langkah Melakukan Konseling
                    </h1>
                </div>

                {/* Cards */}
                <Cards
                    title1="Pilih Psikologmu"
                    desc1="Pilih psikolog yang sesuai dengan permasalahanmu. Tidak perlu khawatir, psikolog kami akan senang mendengar ceritamu."
                    title2="Pilih Layanan dan Jadwalkan Konsultasimu"
                    desc2="Pilih layanan konsultasi sesuai kebutuhanmu. Cocokkan jadwal ketersediaanmu dengan psikolog dan pastikan jadwalmu senggang."
                    title3="Ceritakan Permasalahanmu"
                    desc3="Jangan khawatir bercerita dengan psikolog. Ceritakan semua permasalahanmu hingga kamu merasa lebih baik."
                />

                {/* Cerita Mereka */}
                <div className="bg-cardBlue  w-full pt-20 pb-10">
                    <div className="w-full py-[1rem] ">
                        <h1
                            className="font-semibold pb-5

                        px-6
                        md:px-16
                        lg:px-32
                        text-3xl
                        md:text-4xl
                        lg:text-5xl"
                        >
                            Cerita Mereka
                        </h1>
                    </div>
                    {/* Carousel Cerita Mereka */}

                    <div className="overflow-x-auto px-6 md:px-16 lg:px-32">                    
                        <CardsCarousel
                            imageSrc="images/petik.png"
                            text="Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget"
                            names="Tatang Munajir - Mahasiswa"
                        />                        
                    </div>
                </div>

                <div className="bg-white pt-20">

                </div>
                
            </div>
            <Footer />
        </div>
    );
}
