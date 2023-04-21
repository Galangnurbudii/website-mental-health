import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import BackUpButton from '@/Components/BackUpButton';
import Footer from '@/Components/Footer';
import NumberBox from '@/Components/NumberBox';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {/* Isi Content Konsultasi */}
            <div className="pt-15 bg-[#FAFAFA]] bg-opacity-">

                {/* Banner */}
                <div className="w-full h-full object-cover bg-[#B2D4FB]">
                    <div className='absolute top-[10%] left-[10%] flex flex-col'>
                        <h1 className='font-semibold text-[60px] pt-12 sm:text-[26px] sm:top-[20%] lg:text-[58px] lg:pt-36 '>
                            Konseling dengan Psikolog Terbaik
                        </h1>
                        <p className='font-semibold lg:text-[30px] sm:text[20px]'>
                            Ceritakan isi hatimu, temukan akar masalah <br/>
                            dan jadi pribadi lebih baik
                        </p>
                        <div>
                            <BackUpButton className='bg-[#4C9BF5] mt-12'>
                                Konsultasi Sekarang
                            </BackUpButton>
                        </div>
                    </div>                    
                    <img src='images/konsultasiBanner.jpg' alt=''/>                    
                    {/* <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div> */}
                </div>

                {/* 3 Langkah Melakukan Konseling */}
                <div className='absolute w-full pt-20'>
                    {/* w-full py-[6rem] px-4 */}
                    <div className='w-full py-[1rem] px-4'>
                        <h1 className='font-semibold text-[44px] px-40 pb-5'>
                            3 Langkah Melakukan Konseling
                        </h1>
                    </div>                    
                    
                    <div className='max-w-[1340px] mx-auto grid md:grid-cols-3 gap-8 pb-20'>
                        {/* First */}
                        <div className='w-full shadow-xl flex flex-col rounded-lg border border-gray-300'>
                            <img src='images/CaraKonseling1.jpg' alt=''/>
                            <div className='grid grid-cols-2 min-w-[900px]'>
                                <div className='absolute pt-7 px-10'>
                                    <NumberBox number={1} />
                                </div>                                
                                <h3 className='text-xl font-bold px-24 py-8'>Pilih Psikologmu</h3>
                            </div>                            
                            <p className='text-[#736D6D] px-10 text-[16px] pb-40 '>Pilih psikolog yang sesuai dengan permasalahanmu. Tidak perlu khawatir, psikolog kami akan senang mendengar ceritamu.</p>
                        </div>
                        {/* Second */}
                        <div className='w-full shadow-xl flex flex-col rounded-lg border border-gray-300'>
                            <img src='images/CaraKonseling2.jpg' alt=''/>
                            <div className='grid grid-cols-2 min-w-[900px]'>
                                <div className='absolute pt-7 px-10'>
                                    <NumberBox number={2} />
                                </div>                                
                                <h3 className='text-xl font-bold px-24 py-6'>Pilih Layanan dan Jadwalkan Konsultasimu</h3>
                            </div> 
                            <p className='text-[#736D6D] px-10 text-[16px] pb-40 '>Pilih layanan konsultasi sesuai kebutuhanmu. Cocokkan jadwal ketersediaanmu dengan psikolog dan pastikan jadwalmu senggang.</p>
                        </div>
                        {/* Third */}
                        <div className='w-full shadow-xl flex flex-col rounded-lg border border-gray-300'>
                            <img src='images/CaraKonseling3.png' alt=''/>
                            <div className='grid grid-cols-2 min-w-[900px]'>
                                <div className='absolute pt-7 px-10'>
                                    <NumberBox number={3} />
                                </div>                                
                                <h3 className='text-xl font-bold px-24 py-8'>Ceritakan Permasalahanmu</h3>
                            </div> 
                            <p className='text-[#736D6D] px-10 text-[16px] pb-40 '>Jangan khawatir bercerita dengan psikolog. Ceritakan semua permasalahanmu hingga kamu merasa lebih baik.</p>
                        </div>
                    </div>  

                {/* Cerita Mereka */}
                <div className='bg-[#B2D4FB] absolute w-full pt-20 px-44 pb-10'>
                    <div className='w-full py-[1rem] '>
                        <h1 className='font-semibold text-[44px] pb-5'>
                            Cerita Mereka
                        </h1>
                    </div> 
                    <div className="carousel gap-5">
                        <div className="w-[500px] h-[450px] bg-[#FAFAFA] carousel-item shadow-xl rounded-lg border border-gray-300">
                            {/* <img src="/images/CaraKonseling1.jpg" alt="" /> */}
                            <div className='p-20'>
                                <img 
                                    className='pb-10'
                                    src='images/petik.png'
                                />
                                <h3 className='text-[30px] font-bold '>Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget</h3>
                                <p className='text-[20px] pt-10'>Tatang Munajir - Mahasiswa</p>
                            </div>                            
                        </div> 
                        <div className="w-[500px] h-[450px] bg-[#FAFAFA] carousel-item shadow-xl rounded-lg border border-gray-300">
                            {/* <img src="/images/CaraKonseling1.jpg" alt="" /> */}
                            <div className='p-20'>
                                <img 
                                    className='pb-10'
                                    src='images/petik.png'
                                />
                                <h3 className='text-[30px] font-bold '>Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget</h3>
                                <p className='text-[20px] pt-10'>Tatang Munajir - Mahasiswa</p>
                            </div>                            
                        </div> 
                        <div className="w-[500px] h-[450px] bg-[#FAFAFA] carousel-item shadow-xl rounded-lg border border-gray-300">
                            {/* <img src="/images/CaraKonseling1.jpg" alt="" /> */}
                            <div className='p-20'>
                                <img 
                                    className='pb-10'
                                    src='images/petik.png'
                                />
                                <h3 className='text-[30px] font-bold '>Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget</h3>
                                <p className='text-[20px] pt-10'>Tatang Munajir - Mahasiswa</p>
                            </div>                            
                        </div> 
                        <div className="w-[500px] h-[450px] bg-[#FAFAFA] carousel-item shadow-xl rounded-lg border border-gray-300">
                            {/* <img src="/images/CaraKonseling1.jpg" alt="" /> */}
                            <div className='p-20'>
                                <img 
                                    className='pb-10'
                                    src='images/petik.png'
                                />
                                <h3 className='text-[30px] font-bold '>Berkat konsultasi di sini rasanya jadi lebih plong. Tenang dan bahagia banget</h3>
                                <p className='text-[20px] pt-10'>Tatang Munajir - Mahasiswa</p>
                            </div>                            
                        </div> 
                    </div>
                    
                </div>

                </div>

            </div>
        </AuthenticatedLayout>
        
    );
}
