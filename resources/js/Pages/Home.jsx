import Footer from '@/Components/Footer'
import ForumHero from '@/Components/ForumHero'
import Hero from '@/Components/Hero'
import NavBar from '@/Components/NavBar'
import Quote from '@/Components/Quote'
import React from 'react'
import CardsCarousel from '@/Components/CardsCarousel'
import ArticleCard from '@/Components/ArticleCard'

export default function Home({ articles, quote }) {
    const Testimonial = [
        {
            gambar: 'images/petik.png',
            text: 'Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget',
            nama: 'Tatang Munajir - Mahasiswa',
        },
        {
            gambar: 'images/petik.png',
            text: 'Konsultasi dengan tenaga ahli membuat saya menemukan solusi atas permasalahan saya',
            nama: 'Sri Astuti - Ibu Rumah Tangga',
        },
        {
            gambar: 'images/petik.png',
            text: 'Psikolog yang handal membuat saya nyaman untuk bercerita dan merasa tenang',
            nama: 'Galang Subekti - Pegawai Swasta',
        },
        // {
        //     gambar: 'images/petik.png',
        //     text: 'Beban pikiran terasa mulai menghilang berkat bercerita dengan psikolog',
        //     nama: 'Beatrice Yusril - Pengusaha',
        // },
    ]

    return (
        <div>
            <NavBar />
            <div className="flex flex-col pb-20 md:pb-40 min-h-screen">
                <Hero />
                <div className="py-10 md:py-16 p-6 md:px-16 lg:px-32">
                    <h1 className="font-bold text-2xl md:text-4xl text-hitam pb-12 ">
                        Artikel Lainnya
                    </h1>
                    <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-6 pb-20">
                        {articles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}

                    </div>
                </div>

                <ForumHero />
                <Quote quote={quote} />
                <div className="py-20 md:px-16 lg:px-32 bg-cardBlue">
                    <h1 className="font-bold text-2xl md:text-4xl text-hitam pb-10">
                        Cerita Mereka
                    </h1>
                    <div className="carousel-container flex flex-wrap gap-6 ">
                        {Testimonial.map((testimoni, index) => (
                            <CardsCarousel
                                key={index}
                                imageSrc={testimoni.gambar}
                                text={testimoni.text}
                                names={testimoni.nama}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
