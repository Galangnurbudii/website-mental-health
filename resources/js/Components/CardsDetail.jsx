import { FaStar, FaRegCalendarAlt } from 'react-icons/fa'
import BackUpButton from '@/Components/BackUpButton'
import { Link } from '@inertiajs/react'
import PrimaryButton from './PrimaryButton'

export default function CardsDetail({ psikolog }) {
    return (
        <div className="border border-gray-100 carousel flex-col lg:card-side bg-base-100 shadow-sm rounded-sm overflow-x-auto">
            {/* Picture */}
            <div className="pt-9 xl:px-10 lg:px-4 pr-0 flex justify-center">
                <figure>
                    <img
                        className="w-40 h-40 lg:w-24 lg:h-24"
                        src="images/doctorImage.png"
                    />
                </figure>
            </div>
            {/* Information */}
            <div className="card-body pl-4">
                <h2 className="card-title text-lg">{psikolog.nama}</h2>
                <p className="font-semibold text-md text-disabled">Psikolog</p>
                <p className="text-sm">{psikolog.bidang_keahlian}</p>
                {/* Badge */}
                <div className="pt-0 pb-4 flex flex-row gap-2">
                    <div className="badge badge-outline py-3 rounded-md border border-primary">
                        <div className="pb-1 pr-2">
                            <FaRegCalendarAlt
                                size={14}
                                style={{ color: '#4C9BF5' }}
                            />
                        </div>
                        <p className="text-primary font-semibold text-xs">
                            {psikolog.tahun_pengalaman} Tahun
                        </p>
                    </div>
                    <div className="badge badge-outline py-3 rounded-md border border-primary">
                        <div className="pb-1 pr-2 ">
                            <FaStar size={14} style={{ color: 'orange' }} />
                        </div>
                        <p className="text-primary font-semibold text-xs">
                            {psikolog.rating}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-bold text-md text-hitam md:pt-0 sm:pt-0 pt-1 sm:text-base">
                        Rp.800.000
                    </h1>
                    <Link href={route('payment')}>
                        <BackUpButton className="h-0 text-xs lg:text-xs md:text-md sm:text-md">
                            Konsultasi
                        </BackUpButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}
