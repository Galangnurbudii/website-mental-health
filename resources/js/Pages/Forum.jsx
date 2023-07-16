import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import MyModal from '@/Components/MyModal'
import EmptyTextModal from '@/Components/EmptyTextModal'
import ValidateTextModal from '@/Components/ValidateTextModal'
import React, { useState } from 'react'

export default function Forum({ auth }) {
    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose = () => setShowMyModal(false)

    const [showEmptyTextModal, setShowEmptyTextModal] = useState(false)
    const handleOnCloseText = () => setShowEmptyTextModal(false)

    const [showValidateTextModal, setShowValidateTextModal] = useState(false)
    const handleOnCloseTextValidate = () => setShowValidateTextModal(false)

    const handlePosting = () => {
        var textAreaValue = document.getElementById('myTextArea').value
        if (textAreaValue === '') {
            setShowEmptyTextModal(true)
        } else {
            // Kirim ke database
            setShowValidateTextModal(true)
        }
    }

    return (
        <>
            <NavBar user={auth.user} />
            <div className="flex items-center justify-center mt-[50px]">
                <div className="rounded-md w-[79.5%] h-[575px] mb-[50px] bg-cardBlue">
                    <div className="flex justify-center items-center mt-[20px] pt-14">
                        <textarea
                            id="myTextArea"
                            type="text"
                            className="resize-none max-h-[750px] border border-hitam rounded-md p-2 w-[87%] h-[350px]"
                            placeholder="Tuliskan Cerita Anda di sini..."
                        ></textarea>
                    </div>
                    <div>
                        <div className="mx-auto">
                            <div>
                                <button
                                    onClick={handlePosting}
                                    className="static bg-primary text-putih text-base rounded-lg mt-[25px] w-[100px] h-[45px] sm:w-[139px] sm:h-[51px] ml-[6.5%] mr-[2%]"
                                >
                                    Posting
                                </button>
                                <button
                                    onClick={() => setShowMyModal(true)}
                                    className="static border-2 border-primary hover:border-0 hover:bg-blue-100 text-hitam hover:text-primary w-[85px] h-[45px] sm:w-[120px] sm:h-[51px] text-base rounded-lg mt-[25px]"
                                >
                                    Batal
                                </button>
                            </div>
                        </div>
                        <MyModal
                            onClose={handleOnClose}
                            visible={showMyModal}
                        />
                        <EmptyTextModal
                            onClose={handleOnCloseText}
                            visible={showEmptyTextModal}
                        />
                        <ValidateTextModal
                            onClose={handleOnCloseTextValidate}
                            visible={showValidateTextModal}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
