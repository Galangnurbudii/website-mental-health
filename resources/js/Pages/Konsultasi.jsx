import PrimaryButton from '@/Components/PrimaryButton'
import CardsCarousel from '@/Components/CardsCarousel'
import Cards from '@/Components/Cards'
import NavBar from '@/Components/NavBar'
import Footer from '@/Components/Footer'
import { Scrollbar } from 'react-scrollbars-custom'
import { Link } from '@inertiajs/react'

export default function Konsultasi() {
    const Testimonial = [
        {
            gambar: 'images/petik.png',
            text: 'Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget',
            nama: 'Tatang Munajir - Mahasiswa',
        },
        {
            gambar: 'images/petik.png',
            text: 'Konsultasi dengan tenaga ahli membuat saya menemukan solusi atas permasalahan saya',
            nama: 'Sri Astuti - Ibu Rumah Tangga',
        },
        {
            gambar: 'images/petik.png',
            text: 'Psikolog yang handal membuat saya nyaman untuk bercerita dan merasa tenang',
            nama: 'Galang Subekti - Pegawai Swasta',
        },
        // {
        //     gambar: 'images/petik.png',
        //     text: 'Beban pikiran terasa mulai menghilang berkat bercerita dengan psikolog',
        //     nama: 'Beatrice Yusril - Pengusaha',
        // },
    ]
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
                    backgroundImage: "url('images/konsultasiBanner.jpg')",
                }}
            >
                <div className="">
                    <div className="flex flex-col">
                        <h1
                            className="font-semibold   
                            text-3xl pt-40 pb-5 px-10
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

            <div className="w-full py-10 md:py-20">
                {/* w-full py-[6rem] px-4 */}
                <div className="w-full py-[1rem] pl-4 pr-5">
                    <h1
                        className="font-semibold pb-5
                        px-10
                        md:px-16
                        lg:px-32
                        text-2xl
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
                <div className="py-10 md:py-20 md:px-16 lg:px-32 bg-cardBlue p-6">
                    <h1 className="font-bold text-2xl md:text-4xl text-hitam pb-10">
                        Cerita Mereka
                    </h1>
                    <div className="carousel-container flex flex-wrap gap-6 ">
                        {Testimonial.map((testimoni, index) => (
                            <CardsCarousel
                                key={index}
                                imageSrc={testimoni.gambar}
                                text={testimoni.text}
                                names={testimoni.nama}
                            />
                        ))}
                    </div>
                </div>

                <div className="bg-white p-20 md:p-32"></div>
            </div>
            <Footer />
        </div>
    )
}
