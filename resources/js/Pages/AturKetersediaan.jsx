import NavProfil2 from "@/Components/NavProfil2";
import DateRangePickers from "@/Components/DateRangePickers";
import PrimaryButton from "@/Components/PrimaryButton";
import PopupEdit from '@/Components/PopupEdit'

export default function AturKetersediaan(){

    return(        
        <div>
            <NavProfil2 />
            <div className='lg:pl-96 md:px-40 px-10 py-20'>
                <h1 className="font-bold text-3xl pt-5 pb-8">
                    Profil Anda
                </h1>
                <div>
                    <div className="pb-5">
                        <h3 className="font-semibold pb-2">Nama</h3>
                        <input placeholder="Putu Agus Parimartha" className="border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none" readOnly />
                    </div>
                    <div className="pb-5">
                        <h3 className="font-semibold pb-2">Nomor Surat Tanda Registrasi</h3>
                        <input placeholder="3321601321068534" className="border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none" readOnly />
                    </div>
                    <div className="pb-5">
                        <h3 className="font-semibold pb-2">Lokasi Praktik</h3>
                        <input placeholder="Denpasar, Bali" className="border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none" readOnly />
                    </div>
                    <div className="pb-5">
                        <h3 className="font-semibold pb-2">Pengalaman Praktik</h3>
                        <input placeholder="3321601321068534" className="border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none" readOnly />
                    </div>
                </div>
               
                <h1 className="font-bold text-3xl pt-10 pb-8">
                    Atur Ketidaktersediaan
                </h1>
                <h2 className='pb-5 text-xl font-semibold'>
                    Periode Konsultasi
                </h2>
                <div className='pb-10'>
                    <div className='flex justify-between'>
                        <DateRangePickers />                        
                    </div>                                                   
                </div>   
                <PopupEdit 
                    name={"Edit Status"}
                    titledesc={"Status sudah berhasil diubah"}
                />
            </div>            
        </div>
    )

}