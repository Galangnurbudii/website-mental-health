import DateRangePickers from '@/Components/DateRangePickers'
import PopupEdit from '@/Components/PopupEdit'
import SidebarPsikolog from '@/Components/SidebarPsikolog'
import ValidateTextModal from '@/Components/ValidateTextModal'
import { useState } from 'react'

export default function AturKetersediaan({ psikolog }) {
    // const userId = auth.user.id

    // console.log(psikolog.id)

    const [showValidateTextModal, setShowValidateTextModal] = useState(false)
    const handleOnCloseTextValidate = () => setShowValidateTextModal(false)

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)

    const changeStartDate = (date) => {
        setStartDate(date)
    }

    const changeEndDate = (date) => {
        setEndDate(date)
    }

    const handleSubmit = (e) => {
        // console.log('Selected Start Date:', startDate)
        // console.log('Selected End Date:', endDate)

        const jsonData = {
            id_psikolog: psikolog.id,
            tanggal_mulai: startDate.toISOString().split('T')[0],
            tanggal_selesai: endDate.toISOString().split('T')[0],
        }
        axios
            .post(route('tanggalTakTersedia'), jsonData)
            .then((response) => {
                setShowValidateTextModal(true)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }

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
                        {psikolog.nama}
                    </h1>
                    <h3 className="font-semibold">
                        Nomor Surat Tanda Registrasi
                    </h3>
                    <h1
                        className="flex items-center border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none"
                        readOnly
                    >
                        {psikolog.nomor_str}
                    </h1>
                    <h3 className="font-semibold pb-2">Lokasi Praktik</h3>
                    <h1
                        className="flex items-center border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none"
                        readOnly
                    >
                        {psikolog.provinsi}, {psikolog.kota}
                    </h1>
                    <h3 className="font-semibold pb-2">Pengalaman Praktik</h3>
                    <h1
                        className="flex items-center border border-gray-500 input input-bordered w-full max-w-3xl focus:outline-none"
                        readOnly
                    >
                        {psikolog.tahun_pengalaman} Tahun
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
                        <DateRangePickers
                            changeStartDate={changeStartDate}
                            changeEndDate={changeEndDate}
                        />
                    </div>
                </div>
                <div>
                    <button
                        className="`inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-s text-white  tracking-widest hover:bg-[#2d8efd] transition ease-in-out duration-150"
                        onClick={() => handleSubmit()}
                    >
                        {' '}
                        Edit Status
                    </button>
                    {/* <PopupEdit
                        name={'Edit Status'}
                        titledesc={'Status sudah berhasil diubah'}
                    /> */}
                    <ValidateTextModal
                        route="/dashboardpsikolog"
                        text1="Edit Status Berhasil"
                        text2="Tanggal Tidak Tersedia Berhasil Diunggah"
                        onClose={handleOnCloseTextValidate}
                        visible={showValidateTextModal}
                    />
                </div>
            </div>
        </>
    )
}
