import Footer from '@/Components/Footer'
import ForumHero from '@/Components/ForumHero'
import Hero from '@/Components/Hero'
import NavBar from '@/Components/NavBar'
import Quote from '@/Components/Quote'
import React from 'react'
import CardsCarousel from '@/Components/CardsCarousel'
import ArticleCard from '@/Components/ArticleCard'
import { Head } from '@inertiajs/react'

export default function Home({ articles, quote, auth }) {
    console.log(articles)
    return (
        <div>
            <Head title="Beranda" />
            <NavBar user={auth.user} />
            <div className="flex flex-col pb-20 md:pb-32 min-h-screen">
                <Hero />

                <div className="py-10 md:py-16 md:px-16 lg:px-20 p-6">
                    <h1 className="font-bold text-xl md:text-2xl text-hitam md:px-16 lg:px-20 pb-12">
                        Artikel Lainnya
                    </h1>
                    <div className="flex justify-center flex-col md:flex-row md:flex-wrap md:items-stretch items-center gap-6">
                        {articles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>

                <ForumHero />
                <Quote quote={quote} />
                <div className="p-6 md:px-16 lg:px-32 bg-hoverBackground">
                    <h1 className="font-bold text-2xl md:text-4xl text-hitam py-6 md:py-10">
                        Cerita Mereka
                    </h1>
                    <CardsCarousel
                        imageSrc="images/petik.png"
                        text="Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget"
                        names="Tatang Munajir - Mahasiswa"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}
