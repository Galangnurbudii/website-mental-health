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
    const { id, judul, tag, updated_at, detail } = article

    const tanggal = dayjs(updated_at).format('D MMMM YYYY')

    const randomImage = getRandomImage()

    return (
        <div className="card w-full md:w-96 bg-putih shadow-xl">
            <figure className="md:h-2/4">
                <Link href={`/articleDetail/${id}`}>
                    <img
                        src={`images/${randomImage}`}
                        alt="Foto Berita"
                        className="w-full h-full"
                    />
                </Link>
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-semibold text-hitam">
                    <Link
                        href={`/articleDetail/${id}`}
                        className="text-xl font-semibold text-hitam"
                    >
                        {judul}
                    </Link>
                </h2>
                <div className="flex gap-8 md:gap-16">
                    <Badge titleBadge={tag} />
                    <p className="text-hitam font-bold text-base">{tanggal}</p>
                </div>
                <p className="text-sm md:text-base">
                    {detail.split('.').slice(0, 2).join('. ')}
                </p>
            </div>
        </div>
    )
}

export default ArticleCard
