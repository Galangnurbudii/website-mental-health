import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FiFileText } from 'react-icons/fi'
import { Link, Head } from '@inertiajs/react'
import SidebarAdmin from '@/Components/SidebarAdmin'

export default function DashboardAdmin({ list_janji }) {
    return (
        <>
            <div className="flex flex-col gap-6 px-6 md:px-16 lg:pl-96 lg:pr-60 pb-32">
                <SidebarAdmin />
                <Head title="Dashboard Admin" />
                <div className="flex flex-col gap-8">
                    <h1 className="text-hitam text-2xl md:text-4xl font-bold">
                        Halo, Admin
                    </h1>

                    <div className="flex flex-col md:flex-row gap-6">
                        <Link href={route('artikels.index')}>
                            <button className="w-full flex flex-row gap-4 border border-hitam rounded-md py-5 px-4 text-hitam text-md md:text-lg font-medium hover:font-semibold  hover:text-primary hover:border-primary hover:border-2 ">
                                <span>
                                    <FiFileText size={25} />
                                </span>
                                Tambah Article
                            </button>
                        </Link>

                        <Link href={route('psikologs.index')}>
                            <button className="w-full flex flex-row gap-4 border border-hitam rounded-md py-5 px-4 text-hitam text-md md:text-lg font-medium hover:font-semibold  hover:text-primary hover:border-primary hover:border-2 ">
                                <span>
                                    <AiOutlineUser size={25} />
                                </span>
                                Psikolog
                            </button>
                        </Link>
                    </div>
                    <div className="">
                        <table className="table-auto">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-sm md:text-base">
                                        ID
                                    </th>
                                    <th className="px-4 py-2 text-sm md:text-base">
                                        Nama Customer
                                    </th>
                                    <th className="px-4 py-2 text-sm md:text-base">
                                        Tanggal Pemesanan
                                    </th>
                                    <th className="px-4 py-2 text-sm md:text-base">
                                        Jam
                                    </th>
                                    <th className="px-4 py-2 text-sm md:text-base">
                                        Nama Psikolog
                                    </th>
                                    <th className="px-4 py-2 text-sm md:text-base">
                                        Jenis Layanan
                                    </th>
                                    <th className="px-4 py-2 text-sm md:text-base">
                                        Status
                                    </th>
                                    <th className="px-4 py-2 text-sm md:text-base">
                                        Payment Link
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {list_janji &&
                                    list_janji.map((janji) => (
                                        <tr>
                                            <td className="border px-4 py-2 text-sm md:text-base">
                                                {janji.id}
                                            </td>
                                            <td className="border px-4 py-2 text-sm md:text-base">
                                                {janji.name}
                                            </td>
                                            <td className="border px-4 py-2 text-sm md:text-base">
                                                {janji.tanggal}
                                            </td>
                                            <td className="border px-4 py-2 text-sm md:text-base">
                                                {janji.jam}
                                            </td>
                                            <td className="border px-4 py-2 text-sm md:text-base">
                                                {janji.nama}
                                            </td>
                                            <td className="border px-4 py-2 text-sm md:text-base">
                                                {janji.jenis_layanan}
                                            </td>
                                            <td className="border px-4 py-2 text-sm md:text-base">
                                                {janji.payment_status}
                                            </td>
                                            <td className="border px-4 py-2 text-sm md:text-base text-ellipsis overflow-hidden">
                                                {janji.payment_link}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
