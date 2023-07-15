import NavProfil from '@/Components/ProfileNavbarAdmin'
import { useState } from 'react'

export default function DetailKonsultasi() {
    const [selectedFilter, setSelectedFilter] = useState('')

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value)
    }

    return (
        <div>
            <NavProfil />
            <div className="lg:pl-96 md:px-40 px-10 py-16">
                <h1 className="font-bold text-[26px] pt-5 pb-8">
                    Detail Konsultasi
                </h1>
                <img
                    className="w-[150px] pb-10"
                    src="../images/doctorImage.png"
                />
                <div className="grid grid-cols-0">
                    <div className="grid grid-cols-2 pb-5">
                        <h3 className="font-semibold">Nama Psikolog</h3>
                        <div className="flex">
                            <h3 className="font-semibold pr-1">:</h3>
                            <h3 className="pr-20 font-medium">
                                Putu Agus Parimartha
                            </h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-5">
                        <h3 className="font-semibold">Bidang Keahlian</h3>
                        <div className="flex">
                            <h3 className="font-semibold pr-1">:</h3>
                            <h3 className="pr-20 font-medium">
                                {' '}
                                Gangguan mood, Depresi, Cemas
                            </h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-5">
                        <h3 className="font-semibold">
                            Nomor Surat Tanda Registrasi
                        </h3>
                        <div className="flex">
                            <h3 className="font-semibold pr-1">:</h3>
                            <h3 className="pr-20 font-medium">091842184182</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-5">
                        <h3 className="font-semibold">Lokasi Praktik</h3>
                        <div className="flex">
                            <h3 className="font-semibold pr-1">:</h3>
                            <h3 className="pr-20 font-medium">
                                Klinik Sehat Medika, Denpasar Bali
                            </h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-5">
                        <h3 className="font-semibold">
                            Hari/Tanggal Konsultasi
                        </h3>
                        <div className="flex">
                            <h3 className="font-semibold pr-1">:</h3>
                            <h3 className="pr-20 font-medium">
                                Senin, 18 Juli 2023
                            </h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-5">
                        <h3 className="font-semibold">Waktu Konsultasi</h3>
                        <div className="flex">
                            <h3 className="font-semibold pr-1">:</h3>
                            <h3 className="pr-20 font-medium"> 11.00 AM</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-5">
                        <h3 className="font-semibold">Biaya Konsultasi</h3>
                        <div className="flex">
                            <h3 className="font-semibold pr-1">:</h3>
                            <h3 className="pr-20 font-medium">Rp 200.000</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pb-5">
                        <h3 className="font-semibold">Metode Pembayaran</h3>
                        <div className="flex">
                            <h3 className="font-semibold pr-1">:</h3>
                            <h3 className="pr-20 font-medium">Bank BCA</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
