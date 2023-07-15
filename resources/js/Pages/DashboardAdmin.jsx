// import NavBarAdmin from "@/Components/NavBarAdmin";
// import React from "react";

// export default function DashboardAdmin() {
//     return (
//         <>
//             <NavBarAdmin />
//         </>
//     );
// }

import React, { useState } from 'react'
import { AiOutlineUser, AiOutlineLeftCircle } from 'react-icons/ai'
import { BiHomeAlt2 } from 'react-icons/bi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { FiFileText, FiLogOut, FiSettings } from 'react-icons/fi'
import { Link } from '@inertiajs/react'

export default function DashboardAdmin() {
    const [open, setOpen] = useState(true)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const Menus = [
        { title: 'Dashboard', icon: BiHomeAlt2 },
        { title: 'Artikel', icon: FiFileText },
        { title: 'Psikolog', icon: AiOutlineUser, link: route("psikologs.create")},
        { title: 'Pengaturan', icon: FiSettings, gap: true },
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
            <div className="absolute">
                <div
                    className={`${
                        open ? 'w-72' : 'w-20'
                    } p-5 duration-500 h-screen bg-primary absolute left-0`}
                >
                    <div className="flex gap-x-4 items-center">
                        <h1 className={`text-white origin-left text-2xl font-semibold duration-300 ${!open && 'scale-0'}`}>
                            MENTAL HEALTH
                        </h1>
                    </div>
                    <ul className="pt-6">
                        {Menus.map((menu, index) => (
                            <li
                                key={index}
                                className={`text-putih text-md font-medium flex items-center gap-x-4 cursor-pointer p-2 hover:bg-putih 
                                        hover:text-primary hover:bg-opacity-90 hover:font-semibold rounded-sm ${
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
                                <Link 
                                    to={menu.link}
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-400 ${
                                        open &&
                                        hoveredIndex === index &&
                                        'text-primary'
                                    }`}
                                >
                                    {menu.title}
                                </Link>
                                {/* <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-400 ${
                                        open &&
                                        hoveredIndex === index &&
                                        'text-primary'
                                    }`}
                                >
                                    {menu.title}
                                </span> */}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${open ? "ml-[395px]" : "ml-[141px]"} duration-500 mt-[75px]
                                text-3xl font-bold`}>
                    <h1>
                        Halo, Admin
                    </h1>
                    <div className="flex text-lg gap-7 mr-6 flex-wrap mt-[48px]">
                        <button className="border pl-6 flex text-center items-center
                                            py-6 rounded-lg border-[#736D6D]
                                            w-[323px]">
                            <FiFileText className='w-10 h-10 mr-6 text-primary'/>
                            <span className="mr-[50px]">
                                Tambah Artikel
                            </span>
                        </button>
                        <a href={route("psikologs.create")}>
                            <button className="border pl-6 flex text-center items-center
                                                py-6 rounded-lg border-disabled
                                                w-[323px]">
                                <AiOutlineUser className='w-10 h-10 mr-6 text-primary'/>
                                <span className="mr-[50px]">
                                    Buat Akun Psikolog
                                </span>
                            </button>
                        </a>
                        <button className="border pl-6 flex text-center items-center
                                            py-6 rounded-lg border-[#736D6D]
                                            w-[323px]">
                            <HiOutlineChatAlt2 className='w-10 h-10 mr-6 text-primary'/>
                            <span className="mr-[50px]">
                                Sunting Forum
                            </span>
                        </button>
                    </div>
                    <h1 className='mt-[101px]'>
                        Riwayat Pemesanan
                    </h1>
                    <div class="container mt-[32px]">
                        <div class="overflow-x-auto">
                            <table class="min-w-full border-collapse border border-gray-300">
                                <thead className=''>
                                    <tr>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">ID</th>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">Nama Customer</th>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">Tanggal Pemesanan</th>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">Nama Psikolog</th>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">Jenis Layanan</th>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">Pembayaran</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="py-2 px-4 border-b font-normal text-lg">001</td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">Data 2</td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">Data 3</td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">Data 4</td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">Data 5</td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">Lunas</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
