import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import MyModal from "@/Components/MyModal";
import EmptyTextModal from "@/Components/EmptyTextModal";
import React, { useState } from "react";

export default function Forum() {
    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose = () => setShowMyModal(false)

    const [showEmptyTextModal, setShowEmptyTextModal] = useState(false)
    const handleOnCloseText = () => setShowEmptyTextModal(false)

    const handlePosting = () => {
        var textAreaValue = document.getElementById('myTextArea').value;
        if (textAreaValue === '') {
            setShowEmptyTextModal(true);
        }
        // else {
        //     // Kirim ke database
        // }
    };

    return (
        <>
            <NavBar/>
            <div className="flex items-center justify-center mt-[50px]">
                <div className="rounded-md w-[79.5%] h-[575px] mb-[50px] bg-cardBlue">
                    <div className="mt-[26px]">
                        <input type="checkbox" className="ml-[40px] sm:ml-[100px] md:ml-[120px] rounded-sm" placeholder='Hai'></input>
                        <label type="" className="ml-[5px]">Sembunyikan Nama</label>
                    </div>
                    <div className="flex justify-center items-center mt-[20px]">
                        <textarea id="myTextArea" type="text" className="resize-none max-h-[750px] border border-black rounded-md p-2 w-[87%] h-[350px]" placeholder='Ketik di sini . . .'></textarea>
                    </div>
                    <div>
                        <div className="mx-auto">
                            <div>
                                <button onClick={handlePosting} 
                                        className="static bg-[#4C9BF5] text-[#FFFFFF] text-base rounded-lg mt-[25px] w-[100px] h-[45px] sm:w-[139px] sm:h-[51px] ml-[6.5%] mr-[2%]">
                                    Posting
                                </button>
                                <button onClick={() => setShowMyModal(true)} 
                                        className="static border-2 border-[#4C9BF5] hover:border-0 hover:bg-[#FF0000] text-black hover:text-[#FFFFFF] w-[85px] h-[45px] sm:w-[120px] sm:h-[51px] text-base rounded-lg mt-[25px]">
                                    Batal
                                </button>
                            </div>
                        </div>
                        <MyModal onClose={handleOnClose} visible={showMyModal} />
                        <EmptyTextModal onClose={handleOnCloseText} visible={showEmptyTextModal} />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
