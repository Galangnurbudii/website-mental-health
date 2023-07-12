import PrimaryButton from '@/Components/PrimaryButton'
import CardsCarousel from '@/Components/CardsCarousel'
import Cards from '@/Components/Cards'
import NavBar from '@/Components/NavBar'
import Footer from '@/Components/Footer'
import { Scrollbar } from 'react-scrollbars-custom'
import { Link } from '@inertiajs/react'

export default function Konsultasi() {
    return (
        <div className="pt-15 overflow-x-hidden">
            <NavBar />
            {/* Banner */}
            <div
                className="w-full 
                                h-[615px] 
                                md:h-[615px] 
                                lg:h-[615px] 
                                bg-center"
                style={{
                    backgroundImage:
                        "url('storage/images/konsultasiBanner.jpg')",
                }}
            >
                <div className="">
                    <div className="flex flex-col">
                        <h1
                            className="font-semibold   
                            xs:text-3xl pt-40 pb-5 px-10
                            sm:text-5xl sm:pt-40 sm:pb-5 sm:px-16                                    
                            md:text-5xl md:pt-40 md:pb-5 md:px-16                                    
                            lg:text-5xl lg:pt-40 lg:pb-5 lg:px-32"
                        >
                            Konseling dengan Psikolog Terbaik
                        </h1>
                        <p
                            className="font-semibold 
                            xs:text-lg xs:px-10
                            sm:text-2xl sm:px-16
                            md:text-2xl md:px-16
                            lg:text-2xl lg:px-32"
                        >
                            Ceritakan isi hatimu, temukan akar masalah <br />
                            dan jadi pribadi lebih baik
                        </p>
                        <div>
                            <Link href={route('layanan')}>
                                <PrimaryButton
                                    href={route('layanan')}
                                    className="bg-primary
                                    mt-10 mx-10 
                                    sm:mx-16
                                    md:mx-16 
                                    lg:mx-32"
                                >
                                    Konsultasi Sekarang
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
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
                            imageSrc="storage/images/petik.png"
                            text="Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget"
                            names="Tatang Munajir - Mahasiswa"
                        />
                    </div>
                </div>

                <div className="bg-white pt-20"></div>
            </div>
            <Footer />
        </div>
    )
}
