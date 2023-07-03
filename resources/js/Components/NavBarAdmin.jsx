import React from "react";
import { useState } from "react";

const NavBarAdmin = () => {
    const [open, setOpen] = useState(false);
    const Menus = [
        { title: "Dashboard", src: "bgloginfix"},
        { title: "Artikel", src: "bgregisterfix"},
        { title: "Psikolog", src: "doctorImage"},
        { title: "Pengaturan", src: "bgregisterfix", gap: true},
        { title: "Keluar", src: "doctorImage"}
    ]
    return (
        <>
            <div className="flex">
                <div className={`${open ? "w-72" : "w-20"} p-5 duration-200 h-screen 
                            bg-slate-400 absolute left-0`}>
                    <img src="https://cdn.icon-icons.com/icons2/2311/PNG/512/previous_arrow_left_icon_141950.png" 
                        alt="" 
                        className={`absolute cursor-pointer rounded-full 
                                    -right-3 top-9 w-7 border-2 border-slate-400 
                                    ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                        />
                    <div className="flex gap-x-4 items-center mb-[40px]">
                        <img src="images/doctorImage.png" alt="" 
                            className={`cursor-pointer duration-500 w-10`}/>
                        <h1 className={`text-white origin-left font-medium text-2xl 
                                        duration-300 ${!open && "scale-0"}`}>
                            MENTAL HEALTH
                        </h1>
                    </div>
                    <ul className="pt-6">
                        {Menus.map((menu, index) => (
                            <li key={index} 
                                className={`text-gray-300 text-sm
                                            flex items-center gap-x-4 cursor-pointer 
                                            p-2 hover:bg-white hover:bg-opacity-40
                                            rounded-md ${menu.gap ? "mt-[400px]" : "mt-[20px]"}`}>
                                <img src={`images/${menu.src}.png`} alt="" 
                                    className="w-6"/>
                                <span className={`${!open && 'hidden'} origin-left
                                                duration-400`}>
                                    {menu.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${open ? "ml-[395px]" : "ml-[141px]"} duration-100 mt-[75px]
                                text-3xl font-bold`}>
                    <h1>
                        Halo, Admin
                    </h1>
                    <div className="flex text-lg gap-7 mr-6 flex-wrap mt-[48px]">
                        <button className="border pl-6 flex text-center items-center
                                            py-6 rounded-lg border-[#736D6D]
                                            w-[323px]">
                            <img src="images/doctorImage.png" alt="" 
                                className="w-10 mr-6"/>
                            <span className="mr-[50px]">
                                Tambah Artikel
                            </span>
                        </button>
                        <button className="border pl-6 flex text-center items-center
                                            py-6 rounded-lg border-[#736D6D]
                                            w-[323px]">
                            <img src="images/doctorImage.png" alt="" 
                                className="w-10 mr-6"/>
                            <span className="mr-[50px]">
                                Buat Akun Psikolog
                            </span>
                        </button>
                        <button className="border pl-6 flex text-center items-center
                                            py-6 rounded-lg border-[#736D6D]
                                            w-[323px]">
                            <img src="images/doctorImage.png" alt="" 
                                className="w-10 mr-6"/>
                            <span className="mr-[50px]">
                                Sunting Forum
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBarAdmin;