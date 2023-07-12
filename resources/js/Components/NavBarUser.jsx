import React, { useState } from 'react'

function NavBarUser() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <nav className="bg-putih">
            <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a
                                href={route('home')}
                                className="text-hitam font-bold text-xl"
                            >
                                Mental Health
                            </a>
                        </div>
                        <div className="hidden sm:block sm:ml-">
                            <div className="flex space-x-4">
                                <a
                                    href={route('home')}
                                    className="text-hitam hover:text-hoverBackground hover:font-semibold px-3 py-2"
                                >
                                    Beranda
                                </a>
                                <a
                                    href={route('article')}
                                    className="text-hitam hover:text-hoverBackground hover:font-semibold px-3 py-2"
                                >
                                    Artikel
                                </a>
                                <a
                                    href={route('konsultasi')}
                                    className="text-hitam hover:text-hoverBackground hover:font-semibold px-3 py-2"
                                >
                                    Konsultasi
                                </a>
                                <a
                                    href={route('forumHome')}
                                    className="text-hitam hover:text-hoverBackground hover:font-semibold px-3 py-2"
                                >
                                    Forum
                                </a>
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar flex flex-col gap-2"
                                >
                                    <div className="rounded-full w-10 h-10">
                                        <img src="storage/images/fotoProfil.jpeg" />
                                    </div>
                                    <p className="text-base">Parimartha</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block"></div>
                    <div className="flex sm:hidden">
                        <button
                            type="button"
                            className="text-hitam hover:text-primary focus:outline-none focus:text-clickedBackground"
                            onClick={handleToggleDropdown}
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isDropdownOpen && (
                    <div className="sm:hidden">
                        {/* Dropdown menu content */}
                        <div className="bg-white py-2 px-2 space-y-2 ">
                            <a
                                href={route('home')}
                                className="text-hitam hover:bg-hoverBackground block"
                            >
                                Beranda
                            </a>
                            <a
                                href={route('article')}
                                className="text-hitam hover:bg-hoverBackground block"
                            >
                                Artikel
                            </a>
                            <a
                                href={route('konsultasi')}
                                className="text-hitam hover:bg-hoverBackground block"
                            >
                                Konsultasi
                            </a>
                            <a
                                href={route('forumHome')}
                                className="text-hitam hover:bg-hoverBackground block"
                            >
                                Forum
                            </a>
                            <a
                                href={route('profil')}
                                className="text-hitam hover:bg-hoverBackground block"
                            >
                                Profil
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBarUser
