import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
    return (
        <div className="flex flex-row justify-center gap-4 md:px-16 lg:px-20">
            <div className="text-gray-600 w-full relative ">
                <input
                    className="w-full border-1 border-gray-300 bg-putih h-10 px-4 md:px-20 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Cari"
                />
                <FaSearch className="hidden md:block md:absolute md:text-gray-400 md:top-1/2 md:transform md:-translate-y-1/2 md:left-8" />
            </div>
            <PrimaryButton>Cari</PrimaryButton>
        </div>
    );
}

export default SearchBar;
