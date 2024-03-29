import { React, useState, useMemo, useEffect } from 'react'
import PrimaryButton from './PrimaryButton'
import { FaSearch } from 'react-icons/fa'
import debouce from 'lodash.debounce'
import Fuse from 'fuse.js'

function SearchBar({ data, changeFilteredArticles }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [isInputFocused, setInputFocused] = useState(false)

    let listToDisplay = []

    const fuse = new Fuse(data, {
        threshold: 0.3,
        ignoreLocation: true,
        distance: 100,
        includeMatches: true,
        useExtendedSearch: true,
        keys: Object.keys(data[0]),
    })

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    if (searchTerm !== '') {
        listToDisplay = fuse.search(searchTerm).map((result) => result.item)
    }

    const debouncedResults = useMemo(() => {
        return debouce(handleChange, 300)
    }, [])

    useEffect(() => {
        return () => {
            debouncedResults.cancel()
        }
    })

    const clickHandler = () => {
        setInputFocused(false)
        if (listToDisplay.length) {
            changeFilteredArticles(listToDisplay)
        } else {
            changeFilteredArticles(['kosong'])
        }
    }

    const renderResultList = () => {
        const mappedData = listToDisplay.slice(0, 5).map((data, id) => (
            <a
                key={id}
                href={route('articleDetail', data.id)}
                className="my-3 block result-list"
            >
                {data.judul}
            </a>
        ))

        const additionalTag = (
            <button
                key="searchMore"
                onClick={clickHandler}
                className="my-3 block result-list"
            >
                Selengkapnya...
            </button>
        )

        return mappedData.concat(additionalTag)
    }

    const handleInputFocus = () => {
        setInputFocused(true)
    }

    const handleInputBlur = (e) => {
        const isResultListClicked =
            e.relatedTarget && e.relatedTarget.classList.contains('result-list')

        if (!isResultListClicked) {
            setInputFocused(false)
        }
    }

    return (
        <>
            <div className="flex flex-row justify-center items-center gap-4 ">
                <div className="relative text-gray-600 w-full">
                    <div className="relative flex items-center h-full">
                        <div className="absolute flex pl-4">
                            <FaSearch className="md:text-gray-400" />
                        </div>
                        <input
                            className="w-full border-1 h-full border-gray-300 bg-putih px-4 md:pl-12 py-4 rounded-lg text-sm focus:outline-none"
                            type="search"
                            name="search"
                            placeholder="Cari"
                            onChange={debouncedResults}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                    </div>
                    {isInputFocused && searchTerm !== '' && (
                        <div className="absolute z-[100] w-full mt-5 border-2 border-gray-300 bg-putih px-4 md:px-8 rounded-lg text-sm focus:outline-none">
                            {renderResultList()}
                        </div>
                    )}
                </div>
                <PrimaryButton onClick={clickHandler}>Cari</PrimaryButton>
            </div>
        </>
    )
}

export default SearchBar
