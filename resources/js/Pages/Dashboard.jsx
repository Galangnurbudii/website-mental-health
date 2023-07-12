import PrimaryButton from '@/Components/PrimaryButton'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import BackUpButton from '@/Components/BackUpButton'

import Footer from '@/Components/Footer'
import NumberBox from '@/Components/NumberBox'
import CardsCarousel from '@/Components/CardsCarousel'
import Cards from '@/Components/Cards'

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {/* Isi Content Konsultasi */}
            <div className="pt-15">
                {/* Banner */}
                <div
                    className="w-full h-[615px] md:h-[615px] lg:h-[615px] bg-center"
                    style={{
                        backgroundImage:
                            "url('storage/images/konsultasiBanner.jpg')",
                    }}
                >
                    <div className="">
                        {/* <img src='storage/images/konsultasiBanner.jpg' alt=''/>    */}
                        <div className="flex flex-col">
                            <h1
                                className="font-semibold   
                            xs:text-4xl pt-40 pb-5 px-10
                            sm:text-6xl sm:pt-40 sm:pb-5 sm:px-20                                    
                            md:text-6xl md:pt-40 md:pb-5 md:px-20                                    
                            lg:text-6xl lg:pt-40 lg:pb-5 lg:px-40"
                            >
                                Konseling dengan Psikolog Terbaik
                            </h1>
                            <p
                                className="font-semibold 
                            xs:text-2xl xs:px-10
                            sm:text-3xl sm:px-20
                            md:text-3xl md:px-20
                            lg:text-3xl lg:px-40"
                            >
                                Ceritakan isi hatimu, temukan akar masalah{' '}
                                <br />
                                dan jadi pribadi lebih baik
                            </p>
                            <div>
                                <BackUpButton
                                    className="bg-primary
                                 mt-12 mx-10 
                                 sm:mx-20
                                 md:mx-20 
                                 lg:mx-40"
                                >
                                    Konsultasi Sekarang
                                </BackUpButton>
                            </div>
                        </div>
                    </div>

                    {/* <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div> */}
                </div>

                {/* 3 Langkah Melakukan Konseling */}
                <div className="absolute w-full pt-20">
                    {/* w-full py-[6rem] px-4 */}
                    <div className="w-full py-[1rem] pl-4 pr-20">
                        <h1
                            className="font-semibold pb-5
                        px-10
                        md:px-20
                        lg:px-40
                        text-3xl
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
                    <div className="bg-cardBlue absolute w-full pt-20 pb-10">
                        <div className="w-full py-[1rem] ">
                            <h1
                                className="font-semibold pb-5
                        px-10
                        md:px-20
                        lg:px-40
                        text-3xl
                        md:text-4xl
                        lg:text-5xl"
                            >
                                Cerita Mereka
                            </h1>
                        </div>
                        {/* Carousel Cerita Mereka */}
                        <div className="px-10 md:px-20 lg:px-40">
                            <CardsCarousel
                                imageSrc="storage/images/petik.png"
                                text="Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget"
                                names="Tatang Munajir - Mahasiswa"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
