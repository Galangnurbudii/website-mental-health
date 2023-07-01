import Footer from '@/Components/Footer'
import Navbar from '@/Components/NavBar'
import PrimaryButton from '@/Components/PrimaryButton'
import React from 'react'
import { Link } from '@inertiajs/react'

export default function NotFound() {
    return (
        <div className="max-h-screen ">
            <Navbar />
            <div className="flex flex-col justify-between items-center py-20 px-4 md:px-16 lg:px-20 gap-8">
                <img
                    src="images/ErrorPage.png"
                    alt="ErrorPage"
                    className="max-w max-h md:max-w-lg md:max-h-lg"
                />
                <h1 className="text-hitam text-base md:text-2xl md: font-bold">
                    Halaman yang Anda cari tidak ditemukan, kembali ke halaman
                    utama
                </h1>

                <Link href={route('home')}>
                    <PrimaryButton className="text-xs px-2 py-1 w-40 md:w-44 md:text-base">
                        Halaman Utama
                    </PrimaryButton>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
