import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import React, { useState } from "react";

export default function Forum() {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        <>
            <NavBar/>
            <div className="flex items-center justify-center mt-[50px]">
                <div className="rounded-md w-[79.5%] h-[575px] mb-[50px] bg-cardBlue">
                    <div className="mt-[26px]">
                        <input type="checkbox" className="ml-[40px] sm:ml-[100px] md:ml-[120px]" placeholder='Hai'></input>
                        <label type="" className="ml-[5px]">Sembunyikan Nama</label>
                    </div>
                    <div className="flex justify-center items-center mt-[20px]">
                        {showPopup && (
                            <div className="popup absolute flex justify-center items-center w-full max-h-screen">
                                <div className=" w-full h-screen bg-gray-700 opacity-50">
                                </div>
                                <div className="absolute border rounded-xl border-black bg-[#FFFFFF] w-[250px] h-[100px] pt-[10px]">
                                    <div className="text-center">
                                        Apakah Anda Yakin?
                                    </div>
                                    <div className="pl-[27px] pt-[6px]">
                                        <button className="w-[85px] h-[39px] bg-[#4C9BF5] rounded-lg">
                                            Ya
                                        </button>
                                        <button onClick={togglePopup} className="w-[85px] h-[39px] bg-[#F54C60] rounded-lg ml-[25px]">
                                            Tidak
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <textarea type="text" className="resize-none max-h-[750px] border border-black rounded-md p-2 w-[87%] h-[350px]" placeholder='Ketik di sini . . .'></textarea>
                    </div>
                    <div className="w-full h-[100px] relative">
                        <button disabled={showPopup ? 'disabled' : ''} className="static bg-[#4C9BF5] text-[#FFFFFF] text-base rounded-lg mt-[25px] w-[100px] h-[45px] sm:w-[139px] sm:h-[51px] max-w- ml-[7%]">
                            Posting
                        </button>
                        <button onClick={togglePopup} disabled={showPopup ? 'disabled' : ''} className="static border-2 border-[#4C9BF5] hover:border-0 hover:bg-[#FF0000] text-black hover:text-[#FFFFFF] w-[85px] h-[45px] sm:w-[120px] sm:h-[51px] text-base rounded-lg mt-[25px] ml-[25px]">
                            Batal
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
