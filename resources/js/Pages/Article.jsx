import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Head, Link } from '@inertiajs/react'
import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import ArticleCard from '@/Components/ArticleCard'
import SearchBar from '@/Components/SearchBar'
import Badge from '@/Components/Badge'
import BigCard from '@/Components/BigCard'

export default function Article({ popular, articles, topik_terkini, auth }) {
    const [currentPage, setCurrentPage] = useState(0)

    const [selectedButton, setSelectedButton] = useState(null)
    const [filteredArticles, setFilteredArticles] = useState([])
    let itemsPerPage = 3

    const handleClick = (topik) => {
        if (selectedButton === topik) {
            setSelectedButton(null)
            setFilteredArticles([])
            itemsPerPage = 3
        } else {
            itemsPerPage = 0
            setSelectedButton(topik)
            const filteredData = articles.filter(
                (article) => article.tag === topik
            )
            console.log(filteredData)
            setFilteredArticles(filteredData)
        }
    }

    const changeFilteredArticles = (articles) => {
        setFilteredArticles(articles)
    }
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
            <NavBar user={auth.user} />

            <div className="flex flex-col justify-between gap-8 md:gap-12 px-6 pt-20 pb-32 md:px-16 lg:px-32">
                <SearchBar
                    data={articles}
                    changeFilteredArticles={changeFilteredArticles}
                />

                <div className="flex flex-col gap-8">
                    <h1 className="font-bold text-xl md:text-2xl text-hitam ">
                        Topik Terkini
                    </h1>

                    <div className="">
                        {Object.values(topik_terkini).map((topik) => (
                            <button
                                onClick={() => handleClick(topik)}
                                className={`border border-1 ${
                                    selectedButton === topik
                                        ? 'border-hoverBackground text-hoverBackground'
                                        : 'border-gray-200 text-gray-700'
                                }   rounded-md px-3 py-1 text-base font-semibold  mr-2 mb-2 w-auto max-w-xs hover:border-hoverBackground hover:text-hoverBackground`}
                            >
                                {topik}
                            </button>
                        ))}
                    </div>
                </div>
                {filteredArticles.length > 0 &&
                    filteredArticles[0] != 'kosong' && (
                        <div className="grid grid-cols-3 gap-4 justify-between">
                            {filteredArticles.map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                />
                            ))}
                        </div>
                    )}

                {filteredArticles[0] == 'kosong' ? (
                    <div className="flex flex-col">
                        <h1>Artikel Tidak Ditemukan</h1>

                        <img
                            src="/storage/images/noArticle.png"
                            alt="Tidak Ada Artikel"
                        />
                    </div>
                ) : (
                    <>
                        <h1 className="font-bold text-xl md:text-2xl text-hitam ">
                            Artikel Terpopuler
                        </h1>
                        <div className="">
                            <Link href={route('articleDetail', popular.id)}>
                                <BigCard popular={popular} />
                            </Link>
                        </div>

                        <h1 className="font-bold text-xl md:text-2xl text-hitam ">
                            Artikel Lainnya
                        </h1>
                        <div className="grid grid-cols-3 gap-4 justify-between">
                            {currentArticles.map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                />
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
                    </>
                )}
            </div>
            <Footer />
        </>
    )
}
