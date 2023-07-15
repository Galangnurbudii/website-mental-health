import React from 'react'
import Badge from './Badge'
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import { Link } from '@inertiajs/react'

dayjs.locale('id')
const gambar = ['Gambar1.png', 'Gambar2.png', 'Gambar3.png']

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * gambar.length)
    return gambar[randomIndex]
}

function ArticleCard({ article }) {
    const { id, judul, tag, updated_at, detail, thumbnail_url } = article

    const tanggal = dayjs(updated_at).format('D MMMM YYYY')
    return (
        <Link href={`/articleDetail/${id}`}>
            <div className="card w-full bg-putih shadow-xl h-full hover:scale-105 hover:border-2 hover:border-hoverBackground hover:border-opacity-50">
                <figure className="md:h-2/4">
                    <img
                        src={thumbnail_url}
                        alt="Foto Berita"
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold text-hitam line-clamp-2">
                        {judul}
                    </h2>
                    <div className="flex gap-8 md:gap-16">
                        <Badge titleBadge={tag} />
                        <p className="text-hitam font-bold text-base">
                            {tanggal}
                        </p>
                    </div>
                    <p className="text-sm md:text-base line-clamp-3">
                        {detail}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard
