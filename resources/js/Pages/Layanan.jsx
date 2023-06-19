import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Header from "@/Components/Header";
import LeftSideLayanan from "@/Components/LeftSideLayanan";
import CardsLayanan from "@/Components/CardsLayanan";

export default function Layanan() {
    return (
        <div className="overflow-x-hidden">
            <NavBar/>
            <Header 
                pages = "Konsultasi"            
                currpages = "Layanan"                
            />
            <div className="w-full flex items-start sm:flex-col md:flex-row lg:flex-row">
                {/* left side */}
                <LeftSideLayanan />
                {/* right side */}
                <div
                    className=" w-full 
                                sm:w-full 
                                md:w-[100%]                        
                                lg:w-[60%]
                                h-full bg-white p-10 lg:pr-32 md:pr-16 md:pl-16
                                flex flex-col"
                >
                    <div className="w-full flex flex-col pt-4 md:pt-8 lg:pt-8 mt-2">
                        <h2 className="font-bold text-2xl pb-6">
                            Layanan Konsultasi
                        </h2>
                        <div className="pb-10">
                            <div className="w-full shadow-xl rounded-lg border bg-disabledBackground mx-auto md:my-auto pb-5 md:pb-20 lg:pb-20">
                                {/* h-[700px] */}
                                <div className="pt-10 md:pt-20 lg:pt-20 p-5">
                                    <h3 className="font-semibold text-lg2">
                                        Ayo pilih layanan konsultasimu
                                    </h3>
                                    <p className="text-md2">
                                        Sesuaikan layanan konsultasi dengan
                                        kebutuhanmu
                                    </p>
                                </div>
                                <CardsLayanan/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
            
        </div>
    );
}
