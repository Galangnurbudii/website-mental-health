import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import BackUpButton from "@/Components/BackUpButton";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePickers from "@/Components/DatePickers";
import DropdownMenu from "@/Components/DropdownMenu";
import CardsDetail from "@/Components/CardsDetail";
import LeftSideLayanan from "@/Components/LeftSideLayanan";
import Header from "@/Components/Header";

export default function DetailLayanan() {
    
    // const [nama, rating] = psikolog;

    // Empty Validation
    const [validationErrors, setValidationErrors] = useState({});
    const handleValidation = (e) => {
        e.preventDefault();
    
        if (!selectedProvince) {
          setErrorMessage("Please select a province.");
          return;
        }
    
        if (!selectedKabupaten) {
          setErrorMessage("Please select a kabupaten.");
          return;
        }
    
        // Perform the desired action if the dropdowns are valid
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
        // setShowContent(!showContent);
      };

    const handleClick2 = () => {    
        setShowContent(!showContent);        
        
    };

    // Detail Page
    const [showContent, setShowContent] = useState(false);
    // const handleClick2 = () => {        
    //     setShowContent(!showContent);
    // };

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
                                            <CardsDetail 
                                                imageSrc="../images/doctorImage.png"
                                                names="{nama}"
                                                jobs="Psikolog"
                                                text="Kesehatan Mental"
                                                badge1="5 Tahun"
                                                badge2="{rating}"
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
                                                <div className="py-4 pl-1 flex flex-row gap-2 shrink overflow-x-auto">
                                                    <button 
                                                    type="button" class="inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-lg hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-300">
                                                        12:00
                                                    </button>
                                                    <button type="button" class="inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-lg hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-300">
                                                        14:00
                                                    </button>
                                                    <button type="button" class="inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-lg hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-300">
                                                        16:00
                                                    </button>
                                                    <button type="button" class="inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-lg hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-300">
                                                        18:00
                                                    </button>
                                                    <button type="button" class="inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-lg hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-300">
                                                        20:00
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="pb-4 font-semibold text-xl">Lokasi</h3>
                                            </div>
                                            <DropdownMenu/>
                                            

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
