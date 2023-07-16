import DateRangePickers from '@/Components/DateRangePickers'
import PopupEdit from '@/Components/PopupEdit'
import SidebarPsikolog from '@/Components/SidebarPsikolog'

export default function AturKetersediaan() {
    return (
        <>
            <SidebarPsikolog />
            <div className="flex flex-col gap-4 lg:pl-96 md:px-40 px-10 pt-12 pb-16">
                <h1 className="font-bold text-3xl pt-5 pb-8">Profil Anda</h1>
                <div className="rounded-full overflow-hidden w-32 h-32 md:w-48 md:h-48 pb-2">
                    <img
                        src="../../images/doctorImage.png"
                        alt="Profile Photo"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold">Nama</h3>
                    <h1
                        className="flex items-center border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none"
                        readOnly
                    >
                        Putu Agus Parimartha
                    </h1>
                    <h3 className="font-semibold">
                        Nomor Surat Tanda Registrasi
                    </h3>
                    <h1
                        className="flex items-center border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none"
                        readOnly
                    >
                        3321601321068534
                    </h1>
                    <h3 className="font-semibold pb-2">Lokasi Praktik</h3>
                    <h1
                        className="flex items-center border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none"
                        readOnly
                    >
                        Denpasar, Bali
                    </h1>
                    <h3 className="font-semibold pb-2">Pengalaman Praktik</h3>
                    <h1
                        className="flex items-center border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none"
                        readOnly
                    >
                        3321601321068534
                    </h1>
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
                <div>
                    <PopupEdit
                        name={'Edit Status'}
                        titledesc={'Status sudah berhasil diubah'}
                    />
                </div>
            </div>
        </>
    )
}
