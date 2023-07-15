import React, { useState } from 'react'
import { AiOutlineUser, AiOutlineLeftCircle } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BiTrashAlt, BiHomeAlt2 } from 'react-icons/bi'
import { FiFileText, FiLogOut, FiSettings } from 'react-icons/fi'
import NavProfil from '@/Components/ProfileNavbarAdmin'

export default function DashboardAdmin() {
    const [open, setOpen] = useState(true)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const Menus = [
        { title: 'Dashboard', icon: BiHomeAlt2 },
        { title: 'Artikel', icon: FiFileText },
        { title: 'Psikolog', icon: AiOutlineUser },
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
                <NavProfil />
                <div
                    className={`${
                        open ? 'ml-[395px]' : 'ml-[141px]'
                    } duration-500 mt-[75px]
                                text-3xl font-bold`}
                >
                    <h1>Halo, Admin</h1>
                    <div className="flex text-lg gap-7 mr-6 flex-wrap mt-[48px]">
                        <button
                            className="border pl-6 flex text-center items-center
                                            py-6 rounded-lg border-[#736D6D]
                                            w-[323px]"
                        >
                            <img
                                src="images/doctorImage.png"
                                alt=""
                                className="w-10 mr-6"
                            />
                            <span className="mr-[50px]">Tambah Artikel</span>
                        </button>
                        <button
                            className="border pl-6 flex text-center items-center
                                            py-6 rounded-lg border-[#736D6D]
                                            w-[323px]"
                        >
                            <img
                                src="images/doctorImage.png"
                                alt=""
                                className="w-10 mr-6"
                            />
                            <span className="mr-[50px]">
                                Buat Akun Psikolog
                            </span>
                        </button>
                        <button
                            className="border pl-6 flex text-center items-center
                                            py-6 rounded-lg border-[#736D6D]
                                            w-[323px]"
                        >
                            <img
                                src="images/doctorImage.png"
                                alt=""
                                className="w-10 mr-6"
                            />
                            <span className="mr-[50px]">Sunting Forum</span>
                        </button>
                    </div>
                    <h1 className="mt-[101px]">Riwayat Pemesanan</h1>
                    <div class="container mt-[32px]">
                        <div class="overflow-x-auto">
                            <table class="min-w-full border-collapse border border-gray-300">
                                <thead className="">
                                    <tr>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">
                                            ID
                                        </th>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">
                                            Nama Customer
                                        </th>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">
                                            Tanggal Pemesanan
                                        </th>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">
                                            Nama Psikolog
                                        </th>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">
                                            Jenis Layanan
                                        </th>
                                        <th class="py-2 px-4 bg-gray-200 border-b text-lg text-left">
                                            Pembayaran
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            001
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 2
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 3
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 4
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 5
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Lunas
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            002
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 8
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 9
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 10
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 11
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Lunas
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            003
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 14
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 15
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 16
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 17
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Lunas
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            004
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 20
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 21
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 22
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Data 23
                                        </td>
                                        <td class="py-2 px-4 border-b font-normal text-lg">
                                            Lunas
                                        </td>
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
