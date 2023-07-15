import NavProfil2 from '@/Components/NavProfil2'

export default function HapusProfil(){

    return(
        <div>
            <NavProfil2 />
            <div className='lg:px-96 md:px-40 pl-10 py-20'>
                <h1 className="font-bold text-3xl pt-5 pb-10">
                    Jadwal Konsultasi Hari Ini
                </h1>
                <div className='border-l-4 border-primary px-10'>
                    <div className='w-full shadow-xl rounded-lg border border-gray-400 bg-white mx-auto mb-8'>
                        <div className='p-10'>
                            <h2 className='font-semibold pb-4 text-lg'>
                                Senin, 18 Juli 2023 - 09.00 AM
                            </h2>  
                            <h3 className='font-semibold pb-2'>
                                Nama Pasien: Putu Agus Parimartha
                            </h3> 
                            <h3 className='font-medium pb-2'>
                                Tipe Konsultasi: Online
                            </h3> 
                            <h3 className='font-medium'>
                                Status: Confirmed
                            </h3> 
                        </div>                                      
                    </div>        
                </div>                
            </div>
        </div>
    )    

}