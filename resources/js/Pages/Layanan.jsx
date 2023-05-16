import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Components/Footer";
import { Link } from "@inertiajs/react";
import NavBarUser from "@/Components/NavBarUser";

export default function Layanan(){
    return(
        <div>
            <NavBarUser />
            <div className="w-full bg-disabledBackground p-3 pl-20">
                <p className="font-semibold">
                    <span className="text-primary pr-4">
                    <Link href={route('dashboard')}>
                        Konsultasi
                    </Link>
                    </span> {'>'} <span className="pl-4">Layanan</span>
                </p>
            </div>
            <div className="w-full h-screen flex items-start">
            {/* left side */}
            <div className='relative w-[40%] h-full flex flex-col p-20'>
                <h1 className="font-bold text-4xl">
                    Ceritakan Masalahmu
                </h1>
                <p className='text-lg py-3'>
                    Ceritakan semua masalahmu ke psikolog, buat dirimu lega dan temukan solusi atas permasalahanmu
                </p>
                {/* ConsultationImage */}
                <div className="py-5 flex justify-center">
                    <img
                        className="w-[423px] h-[350px] py-4"  
                        src="images/layananImage.png"/>
                </div> 
                
                <h2 className="font-semibold text-xl py-5">
                    Mengapa konsultasi di website ini?
                </h2>
                <p className="py-1">1. Psikolog terbaik siap mendengar dan membantu mendengarkan permasalahanmu</p>
                <p className="py-1">2. Dapatkan ketenangan dan solusi atas permasahanmu</p>
                <p className="py-1">3. Semua cerita dan permasahanmu terjamin kerahasiaannya</p>          
                
            </div>
            {/* right side */}
            <div className='w-[60%] h-full bg-white p-10'>
                <div className="w-full flex flex-col pt-8 mt-2">
                    <h2 className="font-bold text-2xl pb-6">
                        Layanan Konsultasi
                    </h2>
                    <div className='w-full h-[700px] shadow-xl border bg-disabledBackground mx-auto'>
                        <div className="pt-20 p-5">
                            <h3 className="font-semibold text-lg">
                                Ayo pilih layanan konsultasimu
                            </h3>
                            <p className="text-md">
                                Sesuaikan layanan konsultasi dengan kebutuhanmu  
                            </p>
                        </div>      

                        <div className="grid md:grid-cols-2 p-5 gap-5">
                            <div className="card w-90 bg-base-100 shadow-xl border border-gray-100 cursor-pointer transition duration-300 ease-in-out hover:shadow-2xl">
                                <div className="card-body">
                                    <h2 className="card-title">Tatap Muka</h2>                                    
                                </div>
                                <figure><img className="pb-6" src="/images/TatapMuka.png" /></figure>
                            </div>
                            <div className="card w-90 bg-base-100 shadow-xl border border-gray-100 cursor-pointer transition duration-300 ease-in-out hover:shadow-2xl">
                                <div className="card-body">
                                    <h2 className="card-title">Video Call</h2>
                                </div>
                                <figure><img className="pb-6" src="/images/VideoCall.png" /></figure>
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
