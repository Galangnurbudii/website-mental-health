import ProfileNavbar from '@/Components/ProfileNavbar'
import { useState } from 'react'

export default function JadwalKonsultasiUser() {
    const [selectedFilter, setSelectedFilter] = useState('')

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value)
    }

    return (
        <div>
            <ProfileNavbar />
            <div className="lg:pl-96 md:px-36 px-10 pt-12 pb-16">
                <h1 className="font-bold text-[26px] pt-5 pb-4">
                    Jadwal Konsultasi
                </h1>
                <div className="pb-10">
                    <div className="flex justify-end pr-10">
                        <div>
                            <select
                                className="select select-bordered w-[150px] focus:outline-none"
                                value={selectedFilter}
                                onChange={handleFilterChange}
                            >
                                <option value="Hari ini">Hari ini</option>
                                <option value="Selesai">Selesai</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div
                    className={`border-l-4 ${
                        selectedFilter === 'Hari ini'
                            ? 'border-primary'
                            : selectedFilter === 'Selesai'
                            ? 'border-gray-400'
                            : 'border-primary'
                    } px-10`}
                >
                    <div className="w-full shadow-xl rounded-lg border border-gray-300 bg-white mx-auto mb-8">
                        <div className="p-10">
                            <h2 className="font-semibold pb-4 text-lg">
                                Senin, 18 Juli 2023 - 09.00 AM
                            </h2>
                            <h3 className="font-semibold pb-2">
                                Nama Pasien: Galang Nurbudi Utomo
                            </h3>
                            <h3 className="font-medium pb-2">
                                Tipe Konsultasi: Online
                            </h3>
                            <h3 className="font-medium">
                                Link zoom:
                                https://binus.zoom.us/j/97275854825#success
                            </h3>
                        </div>
                    </div>
                </div>

                <h1 className="font-bold text-[26px] pt-5 pb-8">
                    Riwayat Konsultasi
                </h1>
                <div className={`border-l-4 px-10 border-gray-600`}>
                    <div className="w-full shadow-xl rounded-lg border border-gray-300 bg-white mx-auto mb-8">
                        <div className="p-10">
                            <h2 className="font-semibold pb-4 text-lg">
                                Senin, 18 Juli 2023 - 09.00 AM
                            </h2>
                            <h3 className="font-semibold pb-2">
                                Nama Pasien: Galang Nurbudi Utomo
                            </h3>
                            <h3 className="font-medium pb-2">
                                Tipe Konsultasi: Online
                            </h3>
                            <h3 className="font-medium">
                                Link zoom:
                                https://binus.zoom.us/j/97275854825#success
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
