import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import BackUpButton from "@/Components/BackUpButton";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DetailPsikolog from "@/Components/DetailPsikolog";
import DetailPayment from "@/Components/DetailPayment";
import Header from "@/Components/Header";
import CouponButton from "@/Components/CouponButton";

export default function Layanan() {
    
    // Detail Page
    const [showContent, setShowContent] = useState(false);
    const handleClick2 = () => {
        setShowContent(!showContent);
    };

    return (
        <div className="overflow-x-hidden">
            <NavBar />
            <Header 
                pages2 = "Konsultasi"
                currpages2 = "Layanan"
                currpages = "Detail"/>
            <div className="w-full flex items-start flex-col sm:flex-col md:flex-row lg:flex-row">
                <DetailPsikolog 
                    badge1 = "5 Tahun"
                    badge2 = "4.9"/>
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

                    {/* Rincian Pembayaran*/}
                    <div className="w-full flex flex-col pt-4 md:pt-8 lg:pt-12 mt-2">
                        <h2 className="font-bold text-2xl pb-6">Rincian Pembayaran</h2>
                        <div className="pb-10">
                            <div className="w-full shadow-xl border bg-disabledBackground mx-auto my-auto 
                                            md:pb-5 
                                            xs:p-5
                                            sm:px-20 sm:py-20
                                            md:p-10
                                            lg:px-20 lg:py-20
                                            xl:px-20">

                               
                                <DetailPayment
                                                imageSrc="../images/doctorImage.png"
                                                names="Nathalia Chandra"
                                                jobs="Psikolog"
                                />

                            <div className="pt-5">
                                <div className="border border-gray-100 card lg:card-side bg-base-100 shadow-sm rounded-sm overflow-x-auto">
                                    <div className="card-body lg:px-10 md:px-10 sm:px-10 xs:px-4">
                                        <div className="flex flex-row justify-between">
                                            <h2 className="card-title text-sm text-disabled">Biaya sesi untuk 1 jam</h2>
                                            <h2 className="card-title text-sm text-disabled">Rp 200.000</h2>
                                        </div>
                                        <h2 className="border-t-2 border-disabled-300"></h2>
                                        <div className="flex flex-row justify-between">
                                            <h2 className="card-title text-sm">Total Biaya</h2>
                                            <h2 className="card-title text-sm">Rp 200.000</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="py-5">
                                <div className="border border-gray-100 card lg:card-side bg-base-100 shadow-sm rounded-sm overflow-x-auto">
                                    <div className="card-body flex flex-row lg:px-10 md:px-10 sm:px-10 xs:px-4">
                                        {/* "Pakai" Button */}
                                        <input type="text" placeholder="Masukkan kode promo" className="input input-bordered w-full max-w-md h-[34px]" />                                        
                                        <CouponButton
                                            className="h-0"
                                            onClick={handleClick2}>
                                            Pakai
                                        </CouponButton>     
                                    </div>     
                      
                                </div>
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
