import { FaStar, FaRegCalendarAlt } from "react-icons/fa";
import BadgeDetailPsikolog from "./BadgeDetailPsikolog";

export default function DetailPsikolog({ psikolog, className = "", disabled, ...props }){
    return(
        
        <div className=" h-full flex-col
                        pt-4 md:pt-8 lg:pt-12 mt-8
                        lg:pl-32 lg:pr-10 md:pl-16 p-6
                        xs:w-full
                        sm:w-full flex
                        md:w-[50%]
                        lg:w-[50%]
                        xl:w-[40%]">
            
            <h2 className="font-bold text-2xl pb-6">Detail Psikolog</h2>
            {/* Cards */}
            <div className="flex sm:items-center pb-10">
            
            <div className="w-full shadow-xl border bg-white mx-auto my-auto rounded-lg">
                <figure className="px-6 sm:px-8 md:px-8 lg:px-8 py-5 flex justify-center"><img src={psikolog.foto_profil} alt="" /></figure>
                <div className="pl-6 sm:pl-8 md:pl-8 lg:pl-8 pb-4">
                    <h2 className="font-bold text-xl pb-0">{psikolog.nama}</h2>
                    <p className="text-disabled font-bold">Psikolog</p>
                </div>

                {/* Year and Rating Badge */}
                <div className="card-body pl-6 sm:pl-8 md:pl-8 lg:pl-8 pt-0 pb-2">
                    {/* Badge */}
                    <div className="pt-0 pb-4 flex flex-row gap-2">
                        <div className="badge badge-outline py-3 rounded-md border border-primary">
                            <div className="pb-1 pr-2">
                                <FaRegCalendarAlt
                                    size={14}
                                    style={{ color: "#4C9BF5" }}
                                />
                            </div>
                            <p className="text-primary font-semibold text-xs">
                                {psikolog.tahun_pengalaman} tahun
                            </p>
                        </div>
                        <div className="badge badge-outline py-3 rounded-md border border-primary">
                            <div className="pb-1 pr-2 ">
                                <FaStar size={14} 
                                style={{ color: "orange" }} />
                            </div>
                            <p className="text-primary font-semibold text-xs">
                                {psikolog.rating}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Price */}
                <h1 className="pl-6 sm:pl-8 md:pl-8 lg:pl-8 py-2 card-title text-md font-bold bg-disabledBackground">Rp {psikolog.harga}</h1>

                {/* Bidang Keahlian */}
                <p className="text-disabled font-bold pl-8 pt-4 pb-2">Bidang Keahlian</p>
                <div className="pl-6 sm:pl-8 md:pl-8 lg:pl-8 flex gap-0 pb-4 shrink overflow-x-auto flex-wrap">
                                                  
                    <BadgeDetailPsikolog titleBadge={psikolog.bidang_keahlian} />
                </div>

                {/* Other Information */}
                <div className="px-6 sm:px-8 md:px-8 lg:px-8  flex items-start">
                    <img className="pt-2" src="../images/nstk.jpg" width={24}/>
                    <div>
                        <h1 className="pl-3 font-bold">Nomor Surat Tanda Registrasi</h1>
                        <p className="pl-3 pb-3 text-xs">{psikolog.nomor_str}</p>
                    </div>                     
                </div>

                <div className="px-6 sm:px-8 md:px-8 lg:px-8  flex items-start">
                    <img className="pt-2" src="../images/lokasi.png" width={24}/>
                    <div>
                        <h1 className="pl-3 font-bold">Lokasi Praktik</h1>
                        <p className="pl-3 pb-3 text-xs">{psikolog.kota}, {psikolog.provinsi}</p>
                    </div>                     
                </div>

                <div className="px-6 sm:px-8 md:px-8 lg:px-8  flex items-start">
                    <img className="pt-2" src="../images/alumnus.png" width={24}/>
                    <div>
                        <h1 className="pl-3 font-bold">Alumnus</h1>
                        <p className="pl-3 pb-7 text-xs">{psikolog.lulusan}</p>
                    </div>                     
                </div>

            </div>
            </div>
            
    </div>
    )

}