import React from 'react'
import Badge from './Badge'
import SecondaryButton from './SecondaryButton'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

dayjs.locale('id')

function BigCard({ popular }) {
    const tanggal = dayjs(popular.updated_at).format('D MMMM YYYY')

    const { judul, tag, detail, thumbnail_url } = popular

    return (
        <div className="card w-full bg-putih shadow-xl grid md:grid-cols-2 hover:border-2 hover:border-hoverBackground hover:border-opacity-50">
            <img
                src={thumbnail_url}
                alt="Foto Berita"
                className="w-full h-full object-cover rounded-l-xl"
            />

            <div className="card-body flex flex-col justify-center md:pl-8 md:gap-6">
                <h2 className="text-xl md:text-3xl font-semibold text-hitam">
                    {judul}
                </h2>
                <div className="flex gap-8 md:gap-16">
                    <Badge titleBadge={tag} />
                    <p className="text-hitam font-bold text-base">{tanggal}</p>
                </div>

                <p className="text-sm lg:text-base md:line-clamp-3">{detail}</p>
            </div>
        </div>
    )
}

export default BigCard
