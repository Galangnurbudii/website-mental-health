import Navbar from "@/Components/NavBar";
import React from "react";

export default function test() {
    return (
        <div>
            <Navbar />
            <a href={route("psikologs.index")}>testt</a>
        </div>
    );
}
