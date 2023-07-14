import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import BackUpButton from "@/Components/BackUpButton";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePickers from "@/Components/DatePickers";
import DropdownMenu from "@/Components/DropdownMenu";
import CardsDetail2 from "@/Components/CardsDetail2";
import LeftSideLayanan from "@/Components/LeftSideLayanan";
import Header from "@/Components/Header";
import Select from "react-select";

export default function DetailLayanan() {

// const [nama, rating] = psikolog;    
      
    // Empty Validation for Dropdown Menu Lokasi

    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedKabupaten, setSelectedKabupaten] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [waktuErrorMessage, setWaktuErrorMessage] = useState("");

    const handleProvinceChange = (selectedOption) => {
        setSelectedProvince(selectedOption);
        setSelectedKabupaten(null); 
        setErrorMessage("");
    };
    
      const handleKabupatenChange = (selectedOption) => {
        setSelectedKabupaten(selectedOption);
        setErrorMessage("");
      };
    
    // Filter kabupaten
    const filteredKabupatenOptions =
    selectedProvince && kabupatenKota[selectedProvince.value]
    ? kabupatenKota[selectedProvince.value]
    : [];

    // Empty Validation  

        const [showContent, setShowContent] = useState(false);
        const handleClick2 = () => {    

            if (!activeIndex) {
                setErrorMessage("Waktu harus diisi.");
                return;
            }

        setShowContent(!showContent);                
    };

    // Waktu
    const [activeIndex, setActiveIndex] = useState();    
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => 
        (prevIndex === index ? null : index));
    };
    const handleDoubleClick = () => {
        setActiveIndex(null);
    };
console.log(activeIndex);
    // Date Picker
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="overflow-x-hidden">
            <NavBar />
            <Header 
                pages2 = "Konsultasi"
                currpages2 = "Layanan"
                currpages = "Detail"/>
            <div className="w-full flex items-start sm:flex-col md:flex-row lg:flex-row">
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
                            <div className="p-5 w-full rounded-lg shadow-xl border bg-disabledBackground mx-auto my-auto md:pb-5 lg:pb-5">

                                {/* Dividing Section */}
                                <div>
                                    {/* Detail List Psikolog */}
                                    {showContent ? (
                                        // Section 2
                                        <div className="pt-5 grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 px-3 pb-5 gap-4">
                                            <CardsDetail2 
                                                imageSrc="../images/doctorImage.png"
                                                names="Putu Agus Parimartha"
                                                jobs="Psikolog"
                                                text="Kesehatan Mental"
                                                badge1="5 Tahun"
                                                badge2="4.9"
                                                fee="Rp 800.000"
                                            />
                                            <CardsDetail2
                                                imageSrc="../images/doctorImage.png"
                                                names="Putu Agus Parimartha"
                                                jobs="Psikolog"
                                                text="Kesehatan Mental, Stress, Stress"
                                                badge1="5 Tahun"
                                                badge2="4.9"
                                                fee="Rp 800.000"
                                            />
                                            <CardsDetail2
                                                imageSrc="../images/doctorImage.png"
                                                names="Putu Agus Parimartha"
                                                jobs="Psikolog"
                                                text="Kesehatan Mental, Stress, Stress"
                                                badge1="5 Tahun"
                                                badge2="4.9"
                                                fee="Rp 800.000"
                                            />
                                            <CardsDetail2
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
                                                <div className="join">                                                                                                    

                                                <div className="py-4 pl-1 flex flex-row gap-2 shrink overflow-x-auto">
                                                    <button
                                                        className={`inline-flex items-center px-4 py-1 bg-white border border-[#d8dbe1] text-sm text-center text-disabled font-semibold  rounded-md hover:bg-gray-300 focus:ring-1 focus:outline-none focus:ring-blue-300 ${
                                                            activeIndex == 1
                                                                ? "ring-2 outline-none ring-blue-300"
                                                                : ""
                                                        }`}
                                                        onClick={() => handleClick(1)}
                                                    >
                                                        <p className="text-disabled font-semibold">12:00</p>
                                                    </button>
                                                    <button
                                                        className={`inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-md hover:bg-gray-300 focus:ring-1 focus:outline-none focus:ring-blue-300 ${
                                                            activeIndex === 2
                                                                ? "ring-2 outline-none ring-blue-300"
                                                                : ""
                                                        }`}
                                                        onClick={() => handleClick(2)}
                                                        onDoubleClick={() => handleDoubleClick(2)}
                                                    >
                                                        <p className="text-disabled font-semibold">14:00</p>
                                                    </button>
                                                    <button
                                                        className={`inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-md hover:bg-gray-300 focus:ring-1 focus:outline-none focus:ring-blue-300 ${
                                                            activeIndex === 3
                                                                ? "ring-2 outline-none ring-blue-300"
                                                                : ""
                                                        }`}
                                                        onClick={() =>handleClick(3)}
                                                        onDoubleClick={() => handleDoubleClick(3)}
                                                    >
                                                        <p className="text-disabled font-semibold">16:00</p>
                                                    </button>
                                                    <button
                                                        className={`inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-md hover:bg-gray-300 focus:ring-1 focus:outline-none focus:ring-blue-300 ${
                                                            activeIndex === 4
                                                                ? "ring-2 outline-none ring-blue-300"
                                                                : ""
                                                        }`}
                                                        onClick={() => handleClick(4)}
                                                        onDoubleClick={() => handleDoubleClick(4)}
                                                    >
                                                        <p className="text-disabled font-semibold">18:00</p>
                                                    </button>
                                                    <button
                                                        className={`inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-md hover:bg-gray-300 focus:ring-1 focus:outline-none focus:ring-blue-300 ${
                                                            activeIndex === 5
                                                                ? "ring-2 outline-none ring-blue-300"
                                                                : ""
                                                        }`}
                                                        onClick={() =>handleClick(5)}
                                                        onDoubleClick={() => handleDoubleClick(5)}
                                                    >
                                                        <p className="text-disabled font-semibold">20:00</p>
                                                    </button>
                                                </div>
                                                </div>

                                            </div>
                                            
                                            <p className="text-sm text-red-500 pb-4">{errorMessage}</p>
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
            <Footer />
        </div>
    );
}
