import React from 'react'
import Badge from '@/Components/Badge'
import ConsultationBadge from '@/Components/ConsultationBadge'
import Directory from '@/Components/Directory'
import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import OtherArticle from '@/Components/OtherArticle'
import { Link } from '@inertiajs/react'
import ReactHtmlParser from 'react-html-parser'

export default function ArticleDetail({
    article,
    auth,
    topik_terkini,
    other_article,
}) {
    const { judul, detail } = article

    return (
        <div className="bg-putih h-screen w-full">
            <NavBar user={auth.user} />
            <Directory articleTitle={`${article.judul}`} />

            <div className="grid grid-cols lg:grid-cols-[4fr_2fr] gap-10 px-6 pt-20 pb-32 md:px-16 lg:px-20">
                <div className="w-full flex flex-col justify-between gap-10">
                    <h1 className="text-4xl text-hitam font-bold pt-10">
                        {judul}
                    </h1>
                    <div className="flex justify-center">
                        <img
                            src={article.thumbnail_url}
                            width={500}
                            alt="Gambar Artikel"
                        />
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                        <p className="text-hitam text-base">
                            {ReactHtmlParser(detail)}
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-hitam text-2xl font-bold">
                            Artikel Lainnya
                        </h3>
                        {/* <div className="flex flex-row">
                            {Object.values(topik_terkini).map((topik) => (
                                <button
                                    onClick={() => handleClick(topik)}
                                    className="border border-gray-200 text-gray-700 rounded-md px-3 py-1 text-sm font-semibold  mr-2 mb-2 w-auto max-w-xs hover:border-hoverBackground hover:text-hoverBackground"
                                >
                                    {topik}
                                </button>
                            ))}
                        </div> */}

                        {other_article.map((article) => (
                            <Link href={route('articleDetail', article.id)}>
                                <OtherArticle article={article} />
                            </Link>
                        ))}
                        <ConsultationBadge />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
