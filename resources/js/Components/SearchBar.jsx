import { React, useState, useMemo, useEffect } from 'react'
import PrimaryButton from './PrimaryButton'
import { FaSearch } from 'react-icons/fa'
import debouce from 'lodash.debounce'

function SearchBar({ data }) {
    const [searchTerm, setSearchTerm] = useState('')
    // console.log(data[1])
    let listToDisplay = []

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    if (searchTerm !== '') {
        listToDisplay = data
            .filter((dataObject) => {
                return dataObject.judul
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            })
            .map((dataObject) => ({
                ...dataObject,
            }))
    }

    const debouncedResults = useMemo(() => {
        return debouce(handleChange, 300)
    }, [])

    useEffect(() => {
        return () => {
            debouncedResults.cancel()
        }
    })

    const renderResultList = () => {
        const mappedData = listToDisplay.map((data) => (
            <a href={route('articleDetail', data.id)} className="my-3 block">
                {data.judul}
            </a>
        ))

        const additionalTag = <a className="my-3 block">Cari {searchTerm} ?</a>

        return mappedData.concat(additionalTag)
    }

    return (
        <>
            <div className="flex flex-row justify-center gap-4 md:px-16 lg:px-20">
                <div className="text-gray-600 w-full relative ">
                    <input
                        className="w-full border-1 border-gray-300 bg-putih h-10 px-4 md:px-20 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Cari"
                        onChange={debouncedResults}
                    />
                    <div className="absolute w-full mt-5 border-2 border-gray-300 bg-putih px-4 md:px-8 rounded-lg text-sm focus:outline-none">
                        {renderResultList()}
                    </div>

                    <FaSearch className="hidden md:block md:absolute md:text-gray-400 md:top-1/3 md:transform md:-translate-y-1/2 md:left-8" />
                </div>
                <PrimaryButton>Cari</PrimaryButton>
            </div>
        </>
    )
}

export default SearchBar
