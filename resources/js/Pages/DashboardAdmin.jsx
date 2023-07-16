import React, { useState } from 'react'
import { AiOutlineUser, AiOutlineLeftCircle } from 'react-icons/ai'
import { BiHomeAlt2 } from 'react-icons/bi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { FiFileText, FiLogOut, FiSettings } from 'react-icons/fi'
import { Link } from '@inertiajs/react'
import NavProfil from '@/Components/ProfileNavbarAdmin'
import ProfileNavbarAdmin from '@/Components/ProfileNavbarAdmin'

export default function DashboardAdmin() {
    return (
        <>
            <div className="flex flex-col gap-6 px-6 md:px-16 lg:pl-96 lg:pr-60 pb-32">
                <ProfileNavbarAdmin />
                <div className="flex flex-col gap-8">
                    <h1 className="text-hitam text-2xl md:text-4xl font-bold">
                        Halo, Admin
                    </h1>

                    <div className="flex flex-col md:flex-row gap-6">
                        <button className="w-full flex flex-row gap-4 border border-hitam rounded-md py-5 px-4 text-hitam text-md md:text-lg font-medium hover:font-semibold  hover:text-primary hover:border-primary hover:border-2 ">
                            <span>
                                <FiFileText size={25} />
                            </span>
                            Tambah Article
                        </button>
                        <button className="w-full flex flex-row gap-4 border border-hitam rounded-md py-5 px-4 text-hitam text-md md:text-lg font-medium hover:font-semibold  hover:text-primary hover:border-primary hover:border-2 ">
                            <span>
                                <AiOutlineUser size={25} />
                            </span>
                            Psikolog
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
