export default function LeftSideLayanan({
    className = '',
    disabled,
    ...props
}) {
    return (
        <div
            className="hidden
                            sm:hidden 
                            md:hidden 
                            lg:block 
                            relative h-full flex-col py-20 lg:pl-32 lg:pr-10 md:pl-16
                            sm:w-full 
                            md:w-[40%]
                            lg:w-[40%]"
        >
            <h1 className="font-bold text-3xl xl:text-4xl">
                Ceritakan Masalahmu
            </h1>
            <p className="text-lg lg:text-base py-3">
                Ceritakan semua masalahmu ke psikolog, buat dirimu lega dan
                temukan solusi atas permasalahanmu
            </p>
            {/* ConsultationImage */}
            <div className="py-5 flex justify-center">
                <img
                    className="md:w-80 md:h-30 
                                    w-[423px] py-4"
                    src="storage/images/layananImage.png"
                />
            </div>

            <h2 className="font-semibold text-xl py-5">
                Mengapa konsultasi di website ini?
            </h2>
            <p className="py-1">
                1. Psikolog terbaik siap mendengar dan membantu mendengarkan
                permasalahanmu
            </p>
            <p className="py-1">
                2. Dapatkan ketenangan dan solusi atas permasahanmu
            </p>
            <p className="py-1 pb-10">
                3. Semua cerita dan permasahanmu terjamin kerahasiaannya
            </p>
        </div>
    )
}
