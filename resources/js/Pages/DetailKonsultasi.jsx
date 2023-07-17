import ProfileNavbar from '@/Components/ProfileNavbar'
import { useState } from 'react'

export default function DetailKonsultasi({janji}) {
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
                        : {janji}
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Bidang Keahlian
                    </p>
                    <p className="text-hitam text-lg font-medium">
                        : Gangguan mood, Depresi, Cemas
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Nomor Surat Tanda Registrasi
                    </p>
                    <p className="text-hitam text-lg font-medium">
                        : 3321601321068534
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Lokasi Praktik
                    </p>
                    <p className="text-hitam text-lg font-medium">
                        : Klinik Sehat Medika, Denpasar Bali
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Hari/Tanggal Konsultasi
                    </p>
                    <p className="text-hitam text-lg font-medium">
                        : Senin, 18 Juli 2023
                    </p>
                    <p className="text-hitam text-lg font-semibold">
                        Waktu Konsultasi
                    </p>
                    <p className="text-hitam text-lg font-medium">: 11.00 AM</p>
                    <p className="text-hitam text-lg font-semibold">
                        Biaya Konsultasi
                    </p>
                    <p className="text-hitam text-lg font-medium">
                        : Rp. 200.000
                    </p>
                </div>
            </div>
        </div>
    )
}
