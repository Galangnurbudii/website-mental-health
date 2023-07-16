import PrimaryButton from '@/Components/PrimaryButton'
import CardsCarousel from '@/Components/CardsCarousel'
import Cards from '@/Components/Cards'
import NavBar from '@/Components/NavBar'
import Footer from '@/Components/Footer'
import { Scrollbar } from 'react-scrollbars-custom'
import { Link } from '@inertiajs/react'

export default function Konsultasi({ auth }) {
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
        {
            gambar: 'images/petik.png',
            text: 'Beban pikiran terasa mulai menghilang berkat bercerita dengan psikolog',
            nama: 'Beatrice Yusril - Pengusaha',
        },
    ]
    return (
        <div className="pt-15">
            <NavBar user={auth.user} />
            <div className="bg-cardBlue w-full md:h-[80vh] mx-auto flex flex-col md:flex-row items-center md:px-16 lg:pl-32">
                <div className="flex flex-wrap flex-col max-full p-6 md:p-0 md:w-1/2 ">
                    <div className="flex flex-col justify-center gap-2 pb-4 ">
                        <h1 className="text-hitam font-bold text-2xl md:text-4xl">
                            Konseling dengan Psikolog Terbaik
                        </h1>
                        <h2 className="text-hitam font-medium text-md md:text-2xl md:pb-4">
                            Ceritakan isi hatimu, temukan akar masalah dan jadi
                            pribadi lebih baik
                        </h2>
                    </div>
                    <Link href={route('layanan')}>
                        <PrimaryButton>Konsultasi Sekarang</PrimaryButton>
                    </Link>
                </div>
                <div className="max-full md:flex md:justify-center px-4 md:w-1/2 sm:flex md:self-end">
                    <img
                        src="images/konsultasiGambarIbu.png"
                        alt="landingPage"
                        className="max-h-fit lg:max-w-fit md:pt-32"
                    />
                </div>
            </div>

            {/* 3 Langkah Melakukan Konseling */}

            <div className="w-full py-10 md:py-20">
                <div className="w-full py-[1rem]">
                    <h1 className="font-semibold pb-5 px-10 md:px-16 lg:px-32 text-2xl md:text-4xl">
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
                <div className="py-10 md:py-20 md:px-16 lg:px-32 bg-cardBlue px-6">
                    <h1 className="font-bold text-2xl md:text-4xl text-hitam pb-10">
                        Cerita Mereka
                    </h1>
                    <div className="carousel overscroll-none flex flex-row gap-4 justify-between">
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
