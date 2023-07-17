import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BiHomeAlt2, BiExpandHorizontal } from 'react-icons/bi'
import { FiLogOut, FiFileText } from 'react-icons/fi'
import { MdOutlineArticle } from 'react-icons/md'
import ProfileNavbarKeluar from './ProfileNavbarKeluar'
import { Link } from '@inertiajs/react'
function ProfileNavbarAdmin() {
    const handleLogout = () => {
        console.log('test')
        post(route('logout'))
    }

    return (
        <div className=" flex items-end justify-end px-4 pb-6">
            <button className="fixed bottom-8 right-6 z-30 lg:hidden peer h-14 w-14 rounded-full bg-primary hover:bg-clickedBackground focus:bg-clickedBackground active:bg-clickedBackground transition items-end">
                <span className="text-white">
                    <BiExpandHorizontal size={40} className="w-6 m-auto" />
                </span>
            </button>

            <div className="z-20 fixed top-0 -left-96 lg:left-0 h-screen w-7/12 md:w-64 lg:w-72 bg-primary shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200 pt-8">
                <nav role="navigation" className="p-6">
                    <div className="flex items-center gap-4 pb-4">
                        <h1 className="text-putih font-bold text-3xl">
                            Berani Bicara
                        </h1>
                    </div>
                    <div className="bg-putih h-[0.5vh]"></div>

                    <div className="mt-4 -mx-4 relative overflow-y-auto overflow-x-hidden h-1/2">
                        <ul className="space-y-8 mb-12 px-4 mt-8">
                            <li>
                                <a
                                    href={route('dashboardadmin')}
                                    className="flex gap-4 p-2 text-putih hover:text-primary transition font-medium text-lg hover:bg-putih hover:p-2 hover:rounded-md"
                                >
                                    <BiHomeAlt2 size={25} />
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route('artikels.index')}
                                    className="flex gap-4 p-2 text-putih hover:text-primary transition font-medium text-lg hover:bg-putih hover:p-2 hover:rounded-md"
                                >
                                    <FiFileText size={25} />
                                    Artikel
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route('psikologs.index')}
                                    className="flex gap-4 p-2 text-putih hover:text-primary transition font-medium text-lg hover:bg-putih hover:p-2 hover:rounded-md"
                                >
                                    <AiOutlineUser size={25} />
                                    Psikolog
                                </a>
                            </li>
                        </ul>
                        <div className="pt-20"></div>
                        <div className="bg-putih h-[0.5vh]"></div>
                        {/* <ul className="pt-2 space-y-8 mb-12 px-4 mt-8">
                            <li>
                                <a
                                    href={route('psikologlogin')}
                                    className="flex gap-4 p-2 text-putih hover:text-primary transition font-medium text-lg hover:bg-putih hover:p-2 hover:rounded-md"
                                >
                                    <FiLogOut size={25} />
                                    Keluar
                                </a>
                            </li>
                        </ul> */}
                        <ul className="space-y-8 mb-12 px-4 mt-8">
                            <li>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    className="flex cursor-pointer gap-4 p-2 text-putih hover:text-primary transition font-medium text-lg hover:bg-putih hover:p-2 hover:rounded-md"
                                >
                                    <FiLogOut size={25} />
                                    Keluar
                                </Link>
                            </li>
                        </ul>
                        {/* <ProfileNavbarKeluar handleLogut={handleLogout} /> */}
                    </div>
                </nav>
            </div>

            <div className="z-10 lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200"></div>
        </div>
    )
}

export default ProfileNavbarAdmin
