import React from "react";

function NavBarUser() {
    return (
        <div className="navbar bg-putih shadow-md px-14">
            <div className="flex flex-row justify-between gap-20">
                <div className="flex-1">
                    <a className="normal-case text-2xl text-black font-black">
                        Mental Health
                    </a>
                </div>

                <div className="relative flex flex-row items-center gap-10">
                    <a
                        href="#"
                        className="text-base text-black hover:text-primary"
                    >
                        Beranda
                    </a>
                    <a
                        href="#"
                        className="text-base text-black hover:text-primary "
                    >
                        Article
                    </a>
                    <a
                        href="#"
                        className="text-base text-black hover:text-primary "
                    >
                        Konsultasi
                    </a>
                    <a
                        href="#"
                        className="text-base text-black hover:text-primary "
                    >
                        Forum
                    </a>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="dropdown dropdown-end absolute end-40 ">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar flex flex-col gap-2"
                        >
                            <div className="w-10 rounded-full">
                                <img src="images/fotoProfil.jpeg" />
                            </div>
                            <h1 className="text-md text-black">Parimartha</h1>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBarUser;
