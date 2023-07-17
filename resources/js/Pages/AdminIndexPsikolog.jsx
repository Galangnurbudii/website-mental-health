import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia'
// import { AiOutlineSearch } from 'react-icons/ai'
import SearchBar from '@/Components/SearchBar'
import SidebarAdmin from '@/Components/SidebarAdmin'

export default function AdminIndexPsikolog(props) {
    function destroy(e) {
        if (confirm('Apakah Anda yakin menghapus akun ini?')) {
            Inertia.delete(route('psikologs.destroy', e.currentTarget.id))
        }
    }

    return (
        <>
            <Head title="Buat Akun Psikolog" />
            <SidebarAdmin />
            <div className="flex flex-col gap-6 px-6 md:px-16 lg:pl-96 lg:px-0 pb-32 pt-12">
                {/* <SearchBar /> */}
                <a className="w-[134px]" href={route('psikologs.create')}>
                    <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded font-bold">
                        Create Psikolog
                    </button>
                </a>

                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 w-20">No.</th>
                            <th className="px-4 py-2">Nama</th>
                            <th className="px-4 py-2">Rating</th>
                            <th className="px-4 py-2">Bidang Keahlian</th>
                            <th className="px-4 py-2">Tahun Pengalaman</th>
                            <th className="px-4 py-2">No Str</th>
                            <th className="px-4 py-2">Negara</th>
                            <th className="px-4 py-2">Provinsi</th>
                            <th className="px-4 py-2">Kota</th>
                            <th className="px-4 py-2">Lulusan</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.psikologs.map((psikolog) => (
                            <tr key={psikolog.id}>
                                <td className="border px-4 py-2">
                                    {psikolog.id}
                                </td>
                                <td className="border px-4 py-2">
                                    {psikolog.nama}
                                </td>
                                <td className="border px-4 py-2">
                                    {psikolog.rating}
                                </td>
                                <td className="border px-4 py-2">
                                    {psikolog.bidang_keahlian}
                                </td>
                                <td className="border px-4 py-2">
                                    {psikolog.tahun_pengalaman}
                                </td>
                                <td className="border px-4 py-2">
                                    {psikolog.nomor_str}
                                </td>
                                <td className="border px-4 py-2">
                                    {psikolog.negara}
                                </td>
                                <td className="border px-4 py-2">
                                    {psikolog.provinsi}
                                </td>
                                <td className="border px-4 py-2">
                                    {psikolog.kota}
                                </td>
                                <td className="border px-4 py-2">
                                    {psikolog.lulusan}
                                </td>
                                <td className="border px-4 py-2">
                                    <div className="flex">
                                        <Link
                                            tabIndex="1"
                                            className="px-4 py-2 text-sm text-white bg-primary rounded"
                                            href={route(
                                                'psikologs.edit',
                                                psikolog.id
                                            )}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={destroy}
                                            id={psikolog.id}
                                            tabIndex="-1"
                                            type="button"
                                            className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
