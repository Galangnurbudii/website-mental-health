import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="relative z-10 flex justify-between items-center h-20 max-w-screen mx-auto px-6 md:px-16 text-putih">
            <h1 className="w-full text-2xl font-bold text-hitam">
                <Link href={route("home")}>Mental Health</Link>
            </h1>
            <ul className="hidden md:flex">
                <li className="p-4 text-hitam font-medium hover:text-primary hover:font-medium">
                    <Link href={route("home")}>Beranda</Link>
                </li>
                <li className="p-4 text-hitam font-medium hover:text-primary hover:font-medium">
                    <Link href={route("konsultasi")}>Konsultasi</Link>
                </li>
                <li className="p-4 text-hitam font-medium hover:text-primary hover:font-medium">
                    <Link href={route("article")}>Artikel</Link>
                </li>
                <li className="p-4 text-hitam font-medium hover:text-primary hover:font-medium">
                    <Link href={route("forumHome")}>Forum</Link>
                </li>
                <li className="p-4 text-hitam font-medium hover:text-primary hover:font-medium">
                    <Link href={route("profil")}>Profil</Link>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose size={20} className="text-hitam" />
                ) : (
                    <AiOutlineMenu size={20} className="text-hitam" />
                )}
            </div>
            <ul
                className={`${
                    nav
                        ? "fixed w-[60%] h-full border-r border-hoverBackground bg-white ease-in-out duration-500 transform translate-y-0"
                        : "fixed w-[60%] h-full border-r border-hoverBackground bg-white ease-in-out duration-500 transform -translate-x-full"
                } md:hidden left-0 top-0`}
            >
                <h1 className="w-full text-2xl font-bold text-hitam m-4 pt-4">
                    <Link href={route("home")}>Mental Health</Link>
                </h1>
                <li className="p-4 text-hitam font-base hover:text-primary hover:font-medium border-b border-hoverBackground">
                    <Link href={route("home")}>Beranda</Link>
                </li>
                <li className="p-4 text-hitam font-base hover:text-primary hover:font-medium border-b border-hoverBackground">
                    <Link href={route("konsultasi")}>Konsultasi</Link>
                </li>
                <li className="p-4 text-hitam font-base hover:text-primary hover:font-medium border-b border-hoverBackground">
                    <Link href={route("article")}>Artikel</Link>
                </li>
                <li className="p-4 text-hitam font-base hover:text-primary hover:font-medium border-b border-hoverBackground">
                    <Link href={route("forumHome")}>Forum</Link>
                </li>
                <li className="p-4 text-hitam font-base hover:text-primary hover:font-medium">
                    <Link href={route("profil")}>Profil</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
