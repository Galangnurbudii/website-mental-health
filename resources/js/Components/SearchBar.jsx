import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
    return (
        <div className="flex flex-row justify-center gap-10">
            <div className="text-gray-600 w-full relative">
                <input
                    className="w-full border-1 border-gray-300 bg-white h-10 px-20 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Cari artikel berdasarkan judul, kategori, topik"
                />
                <FaSearch className="absolute text-gray-400 top-1/2 transform -translate-y-1/2 left-8" />
            </div>
            <PrimaryButton>Cari</PrimaryButton>
        </div>
    );
}

export default SearchBar;
