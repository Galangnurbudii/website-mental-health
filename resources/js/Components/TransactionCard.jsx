import React from 'react'
import { Link } from '@inertiajs/react'
export function TransactionCard({ janji, key }) {
    function formatDate(dateString) {
        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }
        const date = new Date(dateString)
        const formattedDate = date.toLocaleDateString('en-US', options)

        return formattedDate
    }

    return (
        <Link href={route('detailkonsultasi', janji.id)}>
            <div className="flex flex-row gap-2 md:gap-8">
                <div
                    className={
                        janji.category == 'upcoming'
                            ? 'bg-primary px-1'
                            : 'bg-gray-300  px-1'
                    }
                ></div>

                <div className="w-full shadow-xl rounded-lg border border-gray-300 bg-putih text-hitam">
                    <div className="flex flex-col gap-4 p-4 md:p-10">
                        <p className="font-bold text-lg">
                            {`${formatDate(new Date(janji.tanggal))} - ${
                                janji.jam
                            } AM`}
                        </p>
                        <h3 className="font-semibold">
                            Nama Psikolog : {janji.nama}
                        </h3>
                        <h3 className="font-medium">
                            Tipe Konsultasi : {janji.jenis_layanan}
                        </h3>
                        {janji.jenis_layanan == 'online' ? (
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
                        ) : (
                            <h3 className="font-medium">
                                {`Alamat : ${janji.kota}, ${janji.provinsi}`}
                            </h3>
                        )}

                        {janji.payment_status == 'pending' ? (
                            <h3 className="text-red-600	">Status : Pending </h3>
                        ) : (
                            <h3 className="text-green-600	">Status : Success</h3>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}
