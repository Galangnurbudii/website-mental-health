import ProfileNavbar from '@/Components/ProfileNavbar'
import { Link } from '@inertiajs/react'
import { useState, useEffect } from 'react'

export default function JadwalKonsultasiUser() {
    const [selectedFilter, setSelectedFilter] = useState('Tidak Ada')
    const [showData, setShowData] = useState(false)

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value)
    }

    useEffect(() => {
        setShowData(true)
    }, [])

    return (
        <>
            <ProfileNavbar />
            <div className="flex flex-col gap-6 px-6 md:px-16 lg:pl-96 lg:pr-60 pb-32">
                <h1 className="text-hitam font-bold text-2xl md:text-4xl pb-4">
                    Jadwal Konsultasi
                </h1>
                <div className="flex justify-end pb-10">
                    <div className="flex flex-row justify-between gap-6 items-center">
                        <p className="text-hitam font-semibold hidden md:block">
                            Filter dengan
                        </p>
                        <select
                            className="select select-bordered w-48 focus:outline-none"
                            value={selectedFilter}
                            onChange={handleFilterChange}
                        >
                            <option value="Tidak Ada">Tidak Ada</option>
                            <option value="Hari ini">Hari ini</option>
                            <option value="Selesai">Selesai</option>
                        </select>
                    </div>
                </div>

                {showData &&
                    (selectedFilter === 'Tidak Ada' ||
                        selectedFilter === 'Hari ini') && (
                        <Link href={route('detailkonsultasi')}>
                            <div className="flex flex-row gap-2 md:gap-8">
                                <div className="bg-primary px-1"></div>
                                <div className="w-full shadow-xl rounded-lg border border-gray-300 bg-putih text-hitam">
                                    <div className="flex flex-col gap-4 p-4 md:p-10">
                                        <p className="font-bold text-lg">
                                            Senin, 18 Juli 2023 - 09.00 AM
                                        </p>
                                        <h3 className="font-semibold">
                                            Nama Pasien : Galang Nurbudi Utomo
                                        </h3>
                                        <h3 className="font-medium">
                                            Tipe Konsultasi : Online
                                        </h3>
                                        <h3 className="font-medium">
                                            Link zoom :
                                            <a
                                                className="hover:text-primary"
                                                href="https://binus.zoom.us/j/97275854825#success"
                                            >
                                                {' '}
                                                https://binus.zoom.us/j/97275854825#success
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}

                <h1 className="text-hitam font-bold text-2xl md:text-4xl pt-5 md:pt-20 md:pb-10">
                    Riwayat Konsultasi
                </h1>

                {showData &&
                    (selectedFilter === 'Tidak Ada' ||
                        selectedFilter === 'Selesai') && (
                        <Link href={route('detailkonsultasi')}>
                            <div className="flex flex-row gap-2 md:gap-8">
                                <div className="bg-gray-400 px-1"></div>
                                <div className="w-full shadow-xl rounded-lg border border-gray-300 bg-putih text-hitam">
                                    <div className="flex flex-col gap-4 p-4 md:p-10">
                                        <p className="font-bold text-lg">
                                            Senin, 18 Juli 2023 - 09.00 AM
                                        </p>
                                        <h3 className="font-semibold">
                                            Nama Pasien : Galang Nurbudi Utomo
                                        </h3>
                                        <h3 className="font-medium">
                                            Tipe Konsultasi : Online
                                        </h3>
                                        <h3 className="font-medium">
                                            Link zoom :
                                            <a
                                                className="hover:text-primary"
                                                href="https://binus.zoom.us/j/97275854825#success"
                                            >
                                                {' '}
                                                https://binus.zoom.us/j/97275854825#success
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
            </div>
        </>
    )
}
