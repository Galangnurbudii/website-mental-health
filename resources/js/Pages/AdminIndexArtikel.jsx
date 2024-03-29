import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia'
import ReactHtmlParser from 'react-html-parser'
import SidebarAdmin from '@/Components/SidebarAdmin'

export default function AdminIndexArtikel(props) {
    function destroy(e) {
        if (confirm('Are you sure you want to delete this article?')) {
            Inertia.delete(route('artikels.destroy', e.currentTarget.id))
        }
    }

    function truncateText(text) {
        console.log(text)
        if (text.length > 350) {
            return text.substring(0, 350) + '...'
        }
        return text
    }

    return (
        <>
            <SidebarAdmin />
            <Head title="Buat Artikel" />
            <div className="flex flex-col gap-6 px-6 md:px-16 lg:pl-64 lg:px-0 pb-32">
                <div className="flex flex-col justify-between gap-8 md:gap-12 px-6 pt-20 pb-32 md:px-16 lg:px-20">
                    <a href={route('artikels.create')}>
                        <button className="px-4 py-2 w-[133px] text-sm text-white bg-blue-500 rounded">
                            Create Article
                        </button>
                    </a>

                    <table className="table-fixed w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2">No.</th>
                                <th className="w-2/12 py-2">Judul</th>
                                <th className="px-4 py-2">Tag</th>
                                <th className="px-4 py-2">Thumbnail</th>
                                <th className="px-4 py-2" colSpan="3">
                                    Detail
                                </th>
                                <th className="px-4 py-2">ID Admin</th>
                                <th className="w-2/12 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.artikels.map((artikel) => (
                                <tr key={artikel.id}>
                                    <td className="border px-4 py-2">
                                        {artikel.id}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {artikel.judul}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {artikel.tag}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <img
                                            src={artikel.thumbnail_url}
                                            alt=""
                                        />
                                    </td>
                                    <td
                                        className="border px-4 py-2"
                                        colSpan="3"
                                    >
                                        {truncateText(artikel.detail)}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {artikel.id_user}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="flex">
                                            <Link
                                                tabIndex="1"
                                                className="px-4 py-2 text-sm text-white bg-primary rounded"
                                                href={route(
                                                    'artikels.edit',
                                                    artikel.id
                                                )}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={destroy}
                                                id={artikel.id}
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
        </>
    )
}
