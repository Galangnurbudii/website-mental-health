import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia'
// import { AiOutlineSearch } from 'react-icons/ai'
import SearchBar from '@/Components/SearchBar'
import ProfileNavbarPsikolog from '@/Components/ProfileNavbarPsikolog'

export default function AdminIndexPsikolog(props) {
    function destroy(e) {
        if (confirm('Are you sure you want to delete this user?')) {
            Inertia.delete(route('psikologs.destroy', e.currentTarget.id))
        }
    }

    return (
        <div className="flex">
            <ProfileNavbarPsikolog />
            <div className="flex flex-col justify-between gap-8 md:gap-12 px-6 pt-20 pb-32 md:px-16 lg:px-12">
                <SearchBar />
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
                            <th className="px-4 py-2" colSpan="2">
                                Email
                            </th>
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
                                <td className="border px-4 py-2" colSpan="2">
                                    {psikolog.email}
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
        </div>
    )
}
