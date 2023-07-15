import NavProfil2 from '@/Components/ProfileNavbarPsikolog'
import DateRangePickers from '@/Components/DateRangePickers'
import PrimaryButton from '@/Components/PrimaryButton'
import PopupEdit from '@/Components/PopupEdit'

export default function AturKetersediaan() {
    return (
        <div>
            <NavProfil2 />
            <div className="lg:pl-96 md:px-40 px-10 pt-12 pb-16">
                <h1 className="font-bold text-3xl pt-5 pb-8">Profil Anda</h1>
                <div>
                    <div className="pb-5">
                        <h3 className="font-semibold pb-2">Nama</h3>
                        <h1
                            className="flex items-center border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none"
                            readOnly
                        >
                            Putu Agus Parimartha
                        </h1>
                    </div>
                    <div className="pb-5">
                        <h3 className="font-semibold pb-2">
                            Nomor Surat Tanda Registrasi
                        </h3>
                        <h1
                            className="flex items-center border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none"
                            readOnly
                        >
                            3321601321068534
                        </h1>
                    </div>
                    <div className="pb-5">
                        <h3 className="font-semibold pb-2">Lokasi Praktik</h3>
                        <h1
                            className="flex items-center border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none"
                            readOnly
                        >
                            Denpasar, Bali
                        </h1>
                    </div>
                    <div className="pb-5">
                        <h3 className="font-semibold pb-2">
                            Pengalaman Praktik
                        </h3>
                        <h1
                            className="flex items-center border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none"
                            readOnly
                        >
                            3321601321068534
                        </h1>
                    </div>
                </div>

                <h1 className="font-bold text-3xl pt-10 pb-8">
                    Atur Ketidaktersediaan
                </h1>
                <h2 className="pb-5 text-xl font-semibold">
                    Periode Konsultasi
                </h2>
                <div className="pb-10">
                    <div className="flex justify-between">
                        <DateRangePickers />
                    </div>
                </div>
                <PopupEdit
                    name={'Edit Status'}
                    titledesc={'Status sudah berhasil diubah'}
                />
            </div>
        </div>
    )
}
