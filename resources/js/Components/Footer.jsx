import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="bg-footer pt-10 pb-6">
            <div className="flex flex-wrap sm:flex-row-wrap mx-auto">
                <div className="mb-8 sm:mb-0 w-full px-4 md:pl-16 font-medium text-putih md:w-1/5">
                    <h2 className="mb-3 text-3xl font-bold text-putih">
                        <a href="">Berani Bicara</a>
                    </h2>
                </div>
                <div className="mb-8 w-2/3 px-4 md:w-1/6">
                    <h3 className="mb-3 text-lg font-semibold text-putih">
                        Perusahaan
                    </h3>
                    <ul className="text-putih">
                        <li>
                            <a
                                href={route('tentangkami')}
                                className="mb-3 inline-block text-sm hover:underline"
                            >
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a
                                href={route('syaratdanketentuan')}
                                className="mb-3 inline-block text-sm hover:underline"
                            >
                                Syarat dan Ketentuan
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mb-8 w-2/3 px-4 md:w-1/6 md:px-2">
                    <h3 className="mb-3 text-lg font-semibold text-putih">
                        Konseling
                    </h3>
                    <ul className="text-putih">
                        <li>
                            <a
                                href={route('konsultasi')}
                                className="mb-3 inline-block text-sm hover:underline"
                            >
                                Buat Janji
                            </a>
                        </li>
                        <li>
                            <a
                                href={route('layanan')}
                                className="mb-3 inline-block text-sm hover:underline"
                            >
                                Hubungi Psikolog
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mb-8 w-2/3 px-4 md:w-1/6 md:px-2">
                    <h3 className="mb-3 text-lg font-semibold text-putih">
                        Hubungi Kami
                    </h3>
                    <ul className="text-putih">
                        <li>
                            <a
                                href="#home"
                                className="mb-3 inline-block text-sm hover:underline"
                            >
                                Customer Service
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mb-8 w-2/3 px-4 md:w-1/6 md:px-2">
                    <h3 className="mb-3 text-lg font-semibold text-putih">
                        Follow Kami
                    </h3>
                    <ul className="text-putih flex flex-row">
                        <li>
                            <a
                                href="https://www.facebook.com/"
                                className="mr-3 flex h-9 w-9 items-center justify-center text-putih hover:bg-primary hover:text-putih"
                            >
                                <FaFacebookSquare size={25} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/beranibicara_consultation/"
                                className="mr-3 flex h-9 w-9 items-center justify-center text-putih hover:bg-primary hover:text-putih"
                            >
                                <FaInstagram size={25} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/i/flow/login?redirect_after_login=%2F"
                                className="mr-3 flex h-9 w-9 items-center justify-center text-putih hover:bg-primary hover:text-putih"
                            >
                                <FaTwitterSquare size={25} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full border-t border-putih pt-6">
                <p className="text-center text-xs font-medium text-putih">
                    Dibuat dengan <span className="text-red-500">❤️</span> oleh
                    Keluarga Gembira
                </p>
            </div>
        </footer>
    )
}

export default Footer
