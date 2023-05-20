import Footer from "@/Components/Footer";
import NavBarUser from "@/Components/NavBarUser";
import React from "react";

export default function Forum() {
    return (
        <>
            <NavBarUser/>
            <div className="flex items-center justify-center mt-[50px]">
                <div className="rounded-sm w-[79.5%] h-[625px] bg-fourth">
                    <div className="w-full h-[100px] relative flex">
                        <button className="absolute bg-[#FF0000] text-[#FFFFFF] w-[120px] h-[51px] text-base rounded-lg ml-[25px] mt-[25px]">
                            Batal
                        </button>
                        <button className="absolute bg-[#4C9BF5] text-[#FFFFFF] text-base rounded-lg right-6 ml-[25px] mt-[25px] w-[139px] h-[51px] md:w-[]">
                            Posting
                        </button>
                    </div>
                    <div className="mt-[26px]">
                        <input type="checkbox" className="ml-[40px] sm:ml-[100px] md:ml-[120px]" placeholder='Hai'></input>
                        <label type="checkbox" className="ml-[5px]">Sembunyikan Nama dari Orang Lain</label>
                    </div>
                    <div className="flex justify-center items-center mt-[20px]">
                        <div className="absolute border rounded-xl border-black bg-[#FFFFFF] w-[200px] h-[80px]">
                            <div className="text-center">
                                Apakah Anda Yakin?
                            </div>
                            <div className="pl-[10px] pt-[6px]">
                                <button className="w-[41%] h-[39px] bg-[#4C9BF5] rounded-3xl">
                                    Ya
                                </button>
                                <button className="w-[41%] h-[39px] bg-[#F54C60] rounded-3xl ml-[25px]">
                                    Tidak
                                </button>
                            </div>
                        </div>
                        <textarea type="text" className="resize-none max-h-[750px] border border-black rounded-md p-2 w-[87%] h-[350px]" placeholder='Ketik di sini . . .'></textarea>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}