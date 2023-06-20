import Footer from "@/Components/Footer1";
import NavBar from "@/Components/NavBar";
import React, { useState } from "react";

export default function DashboardAdmin() {
    const [showMyModal, setShowMyModal] = useState(false)

    const handleOnClose = () => setShowMyModal(false)
    return (
        <>
            <NavBar />

            <div>
                A
            </div>

            <Footer />
        </>
    );
}
