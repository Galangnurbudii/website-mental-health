import BackUpButton from "@/Components/BackUpButton";
import CardsCarousel from "@/Components/CardsCarousel";
import Cards from "@/Components/Cards";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { Scrollbar } from 'react-scrollbars-custom';

export default function Konsultasi() {
    return (

        <div>
<div className="pt-15 overflow-x-hidden">

<NavBar />
{/* Banner */}
<div
    className="w-full 
                    h-[615px] 
                    md:h-[615px] 
                    lg:h-[615px] 
                    bg-center"
    style={{
        backgroundImage: "url('images/konsultasiBanner.jpg')",
    }}
>
    <div className="">
        {/* <img src='images/konsultasiBanner.jpg' alt=''/>    */}
        <div className="flex flex-col">
            <h1
                className="font-semibold   
                xs:text-4xl pt-40 pb-5 px-6
                sm:text-6xl sm:pt-40 sm:pb-5 sm:px-16                                    
                md:text-6xl md:pt-40 md:pb-5 md:px-16                                    
                lg:text-6xl lg:pt-40 lg:pb-5 lg:px-32"
            >
                Konseling dengan Psikolog Terbaik
            </h1>
            <p
                className="font-semibold 
                xs:text-2xl xs:px-10

                sm:text-3xl sm:px-16
                md:text-3xl md:px-16
                lg:text-3xl lg:px-32"

                    <div className="overflow-x-auto px-6 md:px-16 lg:px-32">                    
                        <CardsCarousel
                            imageSrc="images/petik.png"
                            text="Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget"
                            names="Tatang Munajir - Mahasiswa"
                        />                        
                    </div>
                </div>
            </div>
        </div>

    );

}
