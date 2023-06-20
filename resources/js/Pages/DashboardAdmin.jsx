// import Footer from "@/Components/Footer1";
// import NavBar from "@/Components/NavBar";
import MyModal from "@/Components/MyModal";
import React, { useState } from "react";

export default function DashboardAdmin() {
    const [showMyModal, setShowMyModal] = useState(false)

    const handleOnClose = () => setShowMyModal(false)
    return (
        <>
            <div className="bg-blue-400 bg-opacity-30">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center py-3">
                        <button onClick={() => setShowMyModal(true)} 
                                className="bg-red-400 text-white 
                                            px-3 py-2 rounded hover:scale-95 
                                            transition text-xl">
                            Batal
                        </button>
                    </div>
                </div>
                <MyModal onClose={handleOnClose} visible={showMyModal}/>
            </div>
        </>
    );
}
