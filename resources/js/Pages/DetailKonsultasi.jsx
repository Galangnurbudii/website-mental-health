import PrimaryButton from '@/Components/PrimaryButton'
import ProfileNavbar from '@/Components/ProfileNavbar'
import { Link } from '@inertiajs/react'
import { useState } from 'react'

export default function DetailKonsultasi({ janji }) {
    const [selectedFilter, setSelectedFilter] = useState('')

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value)
    }

    return (
        <div className="pt-12">
            <ProfileNavbar />
            <div className="flex flex-col gap-6 px-6 md:px-16 lg:pl-96 lg:pr-60 pb-32">
                <h1 className="text-hitam font-bold text-2xl md:text-4xl">
                    Jadwal Konsultasi
                </h1>
                <img className="w-40 py-5" src="../images/doctorImage.png" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                    <p className="text-hitam text-lg font-semibold">Nama</p>
                    <p className="text-hitam text-lg font-medium">
                        : {janji.nama}
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Bidang Keahlian
                    </p>
                    <p className="text-hitam text-lg font-medium">
                        : {janji.bidang_keahlian}
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Nomor Surat Tanda Registrasi
                    </p>
                    <p className="text-hitam text-lg font-medium">
                        : {janji.nomor_str}
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Lokasi Praktik
                    </p>
                    <p className="text-hitam text-lg font-medium">
                        : {janji.kota}, {janji.provinsi}
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Tanggal Konsultasi
                    </p>
                    <p className="text-hitam text-lg font-medium">
                        : {janji.tanggal}
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Waktu Konsultasi
                    </p>
                    <p className="text-hitam text-lg font-medium">
                        : {janji.jam} PM
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Biaya Konsultasi
                    </p>
                    <p className="text-hitam text-lg font-medium">
                        : {janji.harga}
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Payment Status
                    </p>
                    {janji.payment_status === 'pending' ? (
                        <p className="text-red-600 text-lg font-medium">
                            : Pending
                        </p>
                    ) : (
                        <p className="text-green-600 text-lg font-medium">
                            : Success
                        </p>
                    )}
                    {janji.payment_status === 'pending' && (
                        <a href={janji.payment_link}>
                            <PrimaryButton>Bayar</PrimaryButton>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
