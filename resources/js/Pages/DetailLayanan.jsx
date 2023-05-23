import Footer from "@/Components/Footer";
import NavBarUser from "@/Components/NavBarUser";
import BackUpButton from "@/Components/BackUpButton";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePickers from "@/Components/DatePickers";
import DropdownMenu from "@/Components/DropdownMenu";
import CardsDetail from "@/Components/CardsDetail";
import LeftSideLayanan from "@/Components/LeftSideLayanan";
import Header from "@/Components/Header";

export default function Layanan() {

    // Waktu
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const handleDoubleClick = () => {
        setActiveIndex(null);
    };

    // Date Picker
    const [startDate, setStartDate] = useState(new Date());
    
    // Detail Page
    const [showContent, setShowContent] = useState(false);
    const handleClick2 = () => {
        setShowContent(!showContent);
    };

    return (
        <div className="overflow-x-hidden">
            <NavBarUser />
            <Header 
                pages2 = "Konsultasi"
                currpages2 = "Layanan"
                currpages = "Detail"/>
            <div className="w-full h-screen flex items-start sm:flex-col md:flex-row lg:flex-row">
                <LeftSideLayanan />
                {/* right side */} 
                <div
                    className="
                            w-full
                            sm:w-full 
                            md:w-[100%]
                            lg:w-[60%]
                            h-full bg-white p-6 md:pl-16 lg:pr-28 md:pr-16
                            flex flex-col"
                >
                    <div className="w-full flex flex-col pt-4 md:pt-8 lg:pt-12 mt-2">
                        <h2 className="font-bold text-2xl pb-6">Detail Layanan</h2>
                        <div className="pb-10">
                            <div className="p-5 w-full shadow-xl border bg-disabledBackground mx-auto my-auto md:pb-5 lg:pb-5">

                                {/* Dividing Section */}
                                <div>
                                    {showContent ? (
                                        // Section 2
                                        <div className="pt-5 grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 px-3 pb-5">
                                            <CardsDetail
                                                imageSrc="../images/doctorImage.png"
                                                names="Putu Agus Parimartha"
                                                jobs="Psikolog"
                                                text="Kesehatan Mental"
                                                badge1="5 Tahun"
                                                badge2="4.9"
                                                fee="Rp 800.000"
                                            />
                                            <CardsDetail
                                                imageSrc="../images/doctorImage.png"
                                                names="Putu Agus Parimartha"
                                                jobs="Psikolog"
                                                text="Kesehatan Mental, Stress, Stress"
                                                badge1="5 Tahun"
                                                badge2="4.9"
                                                fee="Rp 800.000"
                                            />
                                            <CardsDetail
                                                imageSrc="../images/doctorImage.png"
                                                names="Putu Agus Parimartha"
                                                jobs="Psikolog"
                                                text="Kesehatan Mental, Stress, Stress"
                                                badge1="5 Tahun"
                                                badge2="4.9"
                                                fee="Rp 800.000"
                                            />
                                            <CardsDetail
                                                imageSrc="../images/doctorImage.png"
                                                names="Putu Agus Parimartha"
                                                jobs="Psikolog"
                                                text="Kesehatan Mental, Stress, Stress"
                                                badge1="5 Tahun"
                                                badge2="4.9"
                                                fee="Rp 800.000"
                                            />
                                        </div>
                                    ) : (
                                        // Section 1
                                        <div className="pt-5 p-5">
                                            <div>
                                                <h3 className="pb-4 font-semibold text-xl">Tanggal</h3>                                                
                                                <DatePickers />
                                            </div>

                                            {/* Waktu */}
                                            <div>
                                                <h3 className="pt-4 font-semibold text-xl">Waktu</h3>
                                                {/* Badge */}
                                                <div className="py-4 flex flex-row gap-2 shrink overflow-x-auto">
                                                    <div
                                                        className={`cursor-pointer badge badge-outline py-4 px-4 rounded-md border border-[#d8dbe1] bg-white hover:bg-gray-300 ${
                                                            activeIndex === 1
                                                                ? "bg-gray-300"
                                                                : ""
                                                        }`}
                                                        onClick={() => handleClick(1)}
                                                        onDoubleClick={() => handleDoubleClick(1)}
                                                    >
                                                        <p className="text-disabled font-semibold">12:00</p>
                                                    </div>
                                                    <div
                                                        className={`cursor-pointer badge badge-outline py-4 px-4 rounded-md border border-[#d8dbe1] bg-white hover:bg-gray-300 ${
                                                            activeIndex === 2
                                                                ? "bg-gray-300"
                                                                : ""
                                                        }`}
                                                        onClick={() => handleClick(2)}
                                                        onDoubleClick={() => handleDoubleClick(2)}
                                                    >
                                                        <p className="text-disabled font-semibold">14:00</p>
                                                    </div>
                                                    <div
                                                        className={`cursor-pointer badge badge-outline py-4 px-4 rounded-md border border-[#d8dbe1] bg-white hover:bg-gray-300 ${
                                                            activeIndex === 3
                                                                ? "bg-gray-300"
                                                                : ""
                                                        }`}
                                                        onClick={() =>handleClick(3)}
                                                        onDoubleClick={() => handleDoubleClick(3)}
                                                    >
                                                        <p className="text-disabled font-semibold">16:00</p>
                                                    </div>
                                                    <div
                                                        className={`cursor-pointer badge badge-outline py-4 px-4 rounded-md border border-[#d8dbe1] bg-white hover:bg-gray-300 ${
                                                            activeIndex === 4
                                                                ? "bg-gray-300"
                                                                : ""
                                                        }`}
                                                        onClick={() => handleClick(4)}
                                                        onDoubleClick={() => handleDoubleClick(4)}
                                                    >
                                                        <p className="text-disabled font-semibold">18:00</p>
                                                    </div>
                                                    <div
                                                        className={`cursor-pointer badge badge-outline py-4 px-4 rounded-md border border-[#d8dbe1] bg-white hover:bg-gray-300 ${
                                                            activeIndex === 5
                                                                ? "bg-gray-300"
                                                                : ""
                                                        }`}
                                                        onClick={() =>handleClick(5)}
                                                        onDoubleClick={() => handleDoubleClick(5)}
                                                    >
                                                        <p className="text-disabled font-semibold">20:00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="pb-4 font-semibold text-xl">Lokasi</h3>
                                            </div>
                                            <DropdownMenu />

                                            <BackUpButton
                                                className="h-0"
                                                onClick={handleClick2}>
                                                Lanjut
                                            </BackUpButton>
                                        </div>
                                    )}
                                    {/* Dividing Section End */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}

        </div>
    );
}
