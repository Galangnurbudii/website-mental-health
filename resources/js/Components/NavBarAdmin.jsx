import React from "react";
import { useState } from "react";

const NavBarAdmin = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "bgloginfix" },
        { title: "Artikel", src: "bgregisterfix" },
        { title: "Psikolog", src: "doctorImage", gap: true}
    ]
    return (
        <>
            <div className="flex">
                <div className={`${open ? "w-72" : "w-20"} p-5 duration-500 h-screen 
                            bg-slate-400 relative`}>
                    <img src="https://cdn.icon-icons.com/icons2/2311/PNG/512/previous_arrow_left_icon_141950.png" 
                        alt="" 
                        className={`absolute cursor-pointer rounded-full 
                                    -right-3 top-9 w-7 border-2 border-slate-400 
                                    ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                        />
                    <div className="flex gap-x-4 items-center">
                        <img src="images/doctorImage.png" alt="" 
                            className={`cursor-pointer duration-500 w-16`}/>
                        <h1 className={`text-white origin-left font-medium text-xl 
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
                                            rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
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
                <div className={`${open ? "ml-72" : "ml-20"} duration-500`}>
                    <div className="p-5">
                        Home Page
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBarAdmin;
 
//   return (
//     <>
//       <div className="flex">
//         {open && (
//           <div className="sidebar bg-slate-400 fixed top-0 left-0 bottom-0 z-10 w-72 p-5">
//             <img
//               src="https://cdn.icon-icons.com/icons2/2311/PNG/512/previous_arrow_left_icon_141950.png"
//               alt=""
//               className="toggle-button absolute top-10 right-[-30px] w-7 cursor-pointer 
// 			border-2 border-slate-400 rounded-full transform 
// 			transition-transform rotate-180"
//               onClick={() => setOpen(!open)}
//             />
//             <div className="logo-container flex gap-x-4 items-center opacity-100">
//               <img
//                 src="images/doctorImage.png"
//                 alt=""
//                 className="cursor-pointer duration-500 w-16"
//               />
//               <h1 className="text-white font-medium text-xl">MENTAL HEALTH</h1>
//             </div>
//             <ul className="menu pt-6">
//               {Menus.map((menu, index) => (
//                 <li
//                   key={index}
//                   className={`menu-item text-gray-300 text-sm flex items-center gap-x-4 
// 				cursor-pointer p-2 hover:bg-white hover:bg-opacity-40 
// 				rounded-md ${menu.gap ? "mt-9" : "mt-2"
//                   }`}
//                 >
//                   <img src={`images/${menu.src}.png`} alt="" className="w-6" />
//                   <span>{menu.title}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         <div className={`main-content ml-${open ? "72" : "20"} p-5`}>
//           {open ? null : <div className="content">Home Page</div>}
//         </div>
//       </div>
//     </>
//   );
// };
