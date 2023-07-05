import React, { useState } from 'react'
import { AiOutlineUser, AiOutlineLeftCircle } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BiTrashAlt, BiHomeAlt2 } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'

const NavBarAdmin = () => {
    const [open, setOpen] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const Menus = [
        { title: 'Dashboard', icon: BiHomeAlt2 },
        { title: 'Artikel', icon: AiOutlineUser },
        { title: 'Psikolog', icon: HiOutlineShoppingCart },
        { title: 'Pengaturan', icon: BiTrashAlt, gap: true },
        { title: 'Keluar', icon: FiLogOut },
    ]

    const handleMouseEnter = (index) => {
        if (open) {
            setHoveredIndex(index)
        }
    }

    const handleMouseLeave = () => {
        if (open) {
            setHoveredIndex(null)
        }
    }

    return (
        <>
            <div className="fixed">
                <div
                    className={`${
                        open ? 'w-72' : 'w-20'
                    } p-5 duration-500 h-screen bg-primary absolute left-0`}
                >
                    <AiOutlineLeftCircle
                        className={`absolute cursor-pointer -right-3 top-9 w-7 ${
                            !open && 'rotate-180'
                        }`}
                        onClick={() => setOpen(!open)}
                        size={40}
                        color="#333333"
                    />

                    <div className="flex gap-x-4 items-center">
                        <h1
                            className={`text-white origin-left font-medium text-2xl font-semibold duration-300 ${
                                !open && 'scale-0'
                            }`}
                        >
                            MENTAL HEALTH
                        </h1>
                    </div>
                    <ul className="pt-6">
                        {Menus.map((menu, index) => (
                            <li
                                key={index}
                                className={`text-putih text-md font-medium flex items-center gap-x-4 cursor-pointer p-2 hover:bg-putih hover:text-primary hover:bg-opacity-90 hover:font-semibold rounded-sm ${
                                    menu.gap ? 'mt-72' : 'mt-2'
                                }`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {menu.icon && (
                                    <menu.icon
                                        className={`w-6 ${
                                            open &&
                                            hoveredIndex === index &&
                                            'text-primary'
                                        } transition-colors duration-300`}
                                        size={36}
                                        style={{
                                            color:
                                                open && hoveredIndex === index
                                                    ? '#4C9BF5'
                                                    : '#FDFDFD',
                                        }}
                                    />
                                )}

                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-400 ${
                                        open &&
                                        hoveredIndex === index &&
                                        'text-primary'
                                    }`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBarAdmin;
