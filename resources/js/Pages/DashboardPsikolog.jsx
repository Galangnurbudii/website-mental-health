import SidebarPsikolog from '@/Components/SidebarPsikolog'
import ProfileNavbarPsikolog from '@/Components/SidebarPsikolog'
import { TransactionCard } from '@/Components/TransactionCard'
export default function DashboradPsikolog({ list_janji }) {
    return (
        <div>
            <SidebarPsikolog />
            {list_janji.length == 0 ? (
                <div className="flex flex-col gap-6 px-6 md:px-16 lg:pl-96 lg:pr-60 pb-32">
                    <h1 className="text-hitam font-bold text-2xl mt-10 md:text-4xl pb-4">
                        Anda Belum Memiliki Janji
                    </h1>
                    <img
                        src="/images/NoJadwalKonsultasi.png"
                        className="w-3/4 m-auto"
                        alt=""
                    />
                </div>
            ) : (
                <div className="flex flex-col gap-6 px-6 md:px-16 lg:pl-96 lg:pr-60 pb-32">
                    <h1 className="font-bold text-3xl pt-5 pb-10">
                        Jadwal Konsultasi
                    </h1>
                    {list_janji.map((janji, key) => (
                        <TransactionCard key={key} janji={janji} />
                    ))}
                </div>
            )}
        </div>
    )
}
