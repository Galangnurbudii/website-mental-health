import Footer from '@/Components/Footer'
import Navbar from '@/Components/NavBar'
import TimCard from '@/Components/TimCard'
import React from 'react'

export default function TentangKami({ auth }) {
    const tims = [
        {
            gambar: '../images/Chandra.jpg',
            nama: 'Christian Chandra Kusuma',
            nim: '2502041413',
        },
        {
            gambar: 'images/Galang.jpeg',
            nama: 'Galang Nurbudi Utomo',
            nim: ' 2502041464',
        },
        {
            gambar: 'images/Jessica.jpeg',
            nama: 'Jessica Hidayat',
            nim: '2502042706',
        },
        {
            gambar: 'images/Nathalia.jpeg',
            nama: 'Nathalia Chandra',
            nim: '2502041514',
        },
        {
            gambar: 'images/Parimartha.jpeg',
            nama: 'Putu Agus Parimartha',
            nim: '2502040682',
        },
    ]

    return (
        <>
            <Navbar user={auth.user} />
            <div className="flex flex-col w-full py-20 px-6 md:px-16 lg:px-32 gap-8">
                <h1 className="text-hitam font-semibold text-4xl ">
                    Berani Bicara
                </h1>
                <div className="flex flex-col md:flex-row gap-8 p-6 pb-20">
                    <img
                        src="images/logo_fix.png"
                        className="w-60"
                        alt="Logo"
                    />
                    <h3 className="text-hitam font-medium text-base md:text-xl md:px-16 lg:px-32 flex justify-center">
                        BeraniBicara adalah situs web konsultasi kesehatan
                        mental di mana setiap pengguna dapat berkonsultasi
                        dengan psikolog tepercaya kami. Selain fitur konsultasi,
                        website ini juga memiliki bagian Artikel dimana pengguna
                        dapat membaca artikel relevan terkait kesehatan mental.
                        Last but not least, itu juga termasuk fitur Forum di
                        mana pengguna dapat membuat posting dan membaca posting
                        dari orang lain.
                    </h3>
                </div>

                <h1 className="text-hitam font-semibold text-4xl ">
                    Team Kami
                </h1>
                <div className="carousel carousel-center w-full py-3 space-x-4 rounded-box flex flex-row">
                    {tims.map((tim, index) => (
                        <TimCard key={index} tim={tim} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
