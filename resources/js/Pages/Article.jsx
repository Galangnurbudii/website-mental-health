import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import ArticleCard from '@/Components/ArticleCard'
import SearchBar from '@/Components/SearchBar'
import Badge from '@/Components/Badge'
import BigCard from '@/Components/BigCard'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Head } from '@inertiajs/react'

export default function Article({ popular, articles, topik_terkini }) {
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 3
    const pageCount = Math.ceil(articles.length / itemsPerPage)

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected)
    }

    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentArticles = articles.slice(startIndex, endIndex)

    return (
        <>
            <Head title="Artikel" />
            <NavBar />
            <div className="flex flex-col justify-between gap-8 md:gap-12 px-6 pt-20 pb-32 md:px-16 lg:px-20">
                <SearchBar />
                <div className="flex flex-col gap-8">
                    <h1 className="font-bold text-xl md:text-2xl text-hitam md:px-16 lg:px-20">
                        Topik Terkini
                    </h1>
                    <div className="md:px-16 lg:px-20">
                        {topik_terkini.map((topik) => (
                            <Badge key={topik} titleBadge={topik} />
                        ))}
                    </div>
                </div>

                <h1 className="font-bold text-xl md:text-2xl text-hitam md:px-16 lg:px-20">
                    Artikel Terpopuler
                </h1>
                <div className="md:px-16 lg:px-20">
                    <BigCard popular={popular} />
                </div>

                <h1 className="font-bold text-xl md:text-2xl text-hitam md:px-16 lg:px-20">
                    Artikel Lainnya
                </h1>
                <div className="flex justify-center flex-col md:flex-row md:flex-wrap md:items-stretch items-center gap-6">
                    {currentArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
                <div className="flex flex-row justify-center">
                    <ReactPaginate
                        previousLabel={<span>&lt;</span>}
                        nextLabel={<span>&gt;</span>}
                        breakLabel={
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-500 cursor-not-allowed">
                                ...
                            </span>
                        }
                        pageCount={pageCount}
                        onPageChange={handlePageChange}
                        containerClassName="flex flex-row justify-between bg-white border border-disabledBackground border-2 overflow-x-auto max-w-[800px]"
                        activeClassName="inline-flex items-center justify-center w-8 h-8 bg-primary text-white cursor-pointer"
                        pageClassName="inline-flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-gray-200"
                        previousClassName="inline-flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-gray-200"
                        nextClassName="inline-flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-gray-200"
                        disabledClassName="inline-flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-500 cursor-not-allowed"
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}
