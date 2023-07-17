import { FaStar, FaRegCalendarAlt } from 'react-icons/fa'
import BackUpButton from '@/Components/BackUpButton'
import { Link } from '@inertiajs/react'
import PrimaryButton from './PrimaryButton'
import axios from 'axios'

export default function CardsDetail({
    psikolog,
    tanggal,
    jam,
    imageSrc,
    names,
    jobs,
    text,
    badge1,
    badge2,
    fee,
    auth,
}) {
    const isDetailLayanan2 = window.location.pathname.includes('detailLayanan2')

    const handleClick = () => {
        const jsonData = {
            id_layanan: psikolog.id_layanan,
            tanggal: tanggal,
            jam: jam,
            harga: psikolog.harga,
        }
        axios
            .post(route('makePayment'), jsonData)
            .then((response) => {
                console.log(response.data)
                window.open(response.data.invoice_url)
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }
    return (
        <div className="border border-gray-100 carousel flex-col lg:card-side bg-base-100 shadow-sm rounded-sm overflow-x-auto">
            {/* Picture */}
            <div className="pt-9 xl:px-10 lg:px-4 pr-0 flex justify-center">
                <figure>
                    <img className="w-40 h-40 lg:w-24 lg:h-24" src={imageSrc} />
                </figure>
            </div>
            {/* Information */}
            <div className="card-body pl-4">
                <h2 className="card-title text-lg">{names}</h2>
                <p className="font-semibold text-md text-disabled">{jobs}</p>
                <p className="text-sm">{text}</p>
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
                            {badge1}
                        </p>
                    </div>
                    <div className="badge badge-outline py-3 rounded-md border border-primary">
                        <div className="pb-1 pr-2 ">
                            <FaStar size={14} style={{ color: 'orange' }} />
                        </div>
                        <p className="text-primary font-semibold text-xs">
                            {badge2}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-bold text-md lg:pt-0 md:pt-0 sm:pt-0 pt-1 sm:text-base md:text-base lg:text-base">
                        {psikolog.harga}
                    </h1>

                    <BackUpButton
                        onClick={handleClick}
                        className="h-0 text-xs lg:text-xs md:text-md sm:text-md"
                    >
                        Konsultasi
                    </BackUpButton>
                </div>
            </div>
        </div>
    )
}
