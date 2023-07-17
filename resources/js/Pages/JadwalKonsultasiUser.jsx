import ProfileNavbar from '@/Components/ProfileNavbar'
import { TransactionCard } from '@/Components/TransactionCard'
import { Link } from '@inertiajs/react'
import { useState, useEffect } from 'react'

export default function JadwalKonsultasiUser({ list_janji }) {
    const currentDate = new Date()
    const upcoming_janji = []
    const history_janji = []

    list_janji.reduce(
        (acc, janji) => {
            const janjiDate = new Date(janji.tanggal)
            const category = janjiDate >= currentDate ? 'upcoming' : 'history'

            janji.category = category // Menambahkan atribut "category" pada objek janji

            if (janjiDate >= currentDate) {
                acc.upcoming_janji.push(janji)
            } else {
                acc.history_janji.push(janji)
            }

            return acc
        },
        { upcoming_janji, history_janji }
    )
    console.log(list_janji[0])

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
                            <option value="Akan Datang">Akan Datang</option>
                            <option value="Selesai">Selesai</option>
                        </select>
                    </div>
                </div>

                {showData &&
                    (selectedFilter === 'Tidak Ada' ||
                        selectedFilter === 'Akan Datang') && (
                        <>
                            {upcoming_janji.map((janji, key) => (
                                <TransactionCard key={key} janji={janji} />
                            ))}
                        </>
                    )}

                <h1 className="text-hitam font-bold text-2xl md:text-4xl pt-5 md:pt-20 md:pb-10">
                    Riwayat Konsultasi
                </h1>

                {showData &&
                    (selectedFilter === 'Tidak Ada' ||
                        selectedFilter === 'Selesai') && (
                        <>
                            {history_janji.map((janji, key) => (
                                <TransactionCard key={key} janji={janji} />
                            ))}
                        </>
                    )}
            </div>
        </>
    )
}
