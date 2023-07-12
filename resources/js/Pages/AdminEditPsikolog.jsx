import React, { useState, useEffect } from 'react';
import EditPsikologModal from "@/Components/EditPsikologModal";
import { Head, useForm, usePage, Link } from '@inertiajs/react';

export default function AdminEditPsikolog(props) {
    const { psikologs } = usePage().props;
    // console.log(psikologs);
    const { data, setData, put, errors } = useForm({
        nama: psikologs.nama || "",
        email: psikologs.email || "",
        password: psikologs.password || "",
        rating: psikologs.rating || "",
        bidang_keahlian: psikologs.bidang_keahlian || "",
        tahun_pengalaman: psikologs.tahun_pengalaman || "",
        nomor_str: psikologs.nomor_str || "",
        lokasi_praktik: psikologs.lokasi_praktik || "",
        lulusan: psikologs.lulusan || "",
    });
  
    function handleSubmit(e) {
        e.preventDefault();
        put(route("psikologs.update", psikologs.id), {
            onSuccess: () => setShowEditPsikologModal(true)
        });
    }

    const [showEditPsikologModal, setShowEditPsikologModal] = useState(false)
    // const handleOnCloseUpdate = () => setShowEditPsikologModal(false)
    const [shouldRedirect, setShouldRedirect] = useState(false)

    useEffect(() => {
        if (shouldRedirect) {
            const timer = setTimeout(() => {
                window.location.href = route("psikologs.index");
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [shouldRedirect]);

    const handleOnCloseUpdate = () => {
        setShowEditPsikologModal(false);
        setShouldRedirect(true);
    };

    return (
        <div className="flex flex-col justify-between gap-8 md:gap-12 px-6 pt-20 pb-32 md:px-16 lg:px-20">
            <a href={route("psikologs.index")}>
                <button className='bg-white border-black border-2 rounded-lg py-1 px-4'>
                    Back
                </button>
            </a>

             <Head title="Psikologs" />

             <form name="createForm" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <div className="mb-4">
                        <label className="">Nama</label>
                        <input
                            id="nama"
                            placeholder="Nama"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg"
                            label="nama"
                            name="nama"
                            isFocused={true}
                            value={data.nama}
                            onChange={(e) =>
                                setData("nama", e.target.value)
                            }
                            required
                        />
                        <span className="text-red-600">
                            {errors.nama}
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="">Email</label>
                        <input
                            id="email"
                            placeholder="Email"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg"
                            label="email"
                            name="email"
                            isFocused={true}
                            value={data.email}
                            onChange={(e) =>
                                setData("email", e.target.value)
                            }
                            required
                        />
                        <span className="text-red-600">
                            {errors.email}
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="">Password</label>
                        <input
                            id="password"
                            placeholder="Password"
                            type="password"
                            className="w-full px-4 py-2 rounded-lg"
                            label="password"
                            name="password"
                            isFocused={true}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />
                        <span className="text-red-600">
                            {errors.password}
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="">Rating</label>
                        <input
                            id="rating"
                            placeholder="rating"
                            type="number"
                            step="0.01"
                            className="w-full px-4 py-2 rounded-lg"
                            label="rating"
                            name="rating"
                            isFocused={true}
                            value={data.rating}
                            onChange={(e) =>
                                setData("rating", e.target.value)
                            }
                            required
                        />
                        <span className="text-red-600">
                            {errors.rating}
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="">Bidang Keahlian</label>
                        <input
                            id="bidang_keahlian"
                            placeholder="Bidang Keahlian"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg"
                            label="bidang_keahlian"
                            name="bidang_keahlian"
                            isFocused={true}
                            value={data.bidang_keahlian}
                            onChange={(e) =>
                                setData("bidang_keahlian", e.target.value)
                            }
                            required
                        />
                        <span className="text-red-600">
                            {errors.bidang_keahlian}
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="">Tahun Pengalaman</label>
                        <input
                            id="tahun_pengalaman"
                            placeholder="Tahun Pengalaman"
                            type="number"
                            className="w-full px-4 py-2 rounded-lg"
                            label="tahun_pengalaman"
                            name="tahun_pengalaman"
                            isFocused={true}
                            value={data.tahun_pengalaman}
                            onChange={(e) =>
                                setData("tahun_pengalaman", e.target.value)
                            }
                            required
                        />
                        <span className="text-red-600">
                            {errors.tahun_pengalaman}
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="">Nomor Str</label>
                        <input
                            id="nomor_str"
                            placeholder="Nomor Str"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg"
                            label="nomor_str"
                            name="nomor_str"
                            isFocused={true}
                            value={data.nomor_str}
                            onChange={(e) =>
                                setData("nomor_str", e.target.value)
                            }
                            required
                        />
                        <span className="text-red-600">
                            {errors.nomor_str}
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="">Lokasi Praktik</label>
                        <textarea
                            id="lokasi_praktik"
                            placeholder="Lokasi Praktik"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg"
                            label="lokasi_praktik"
                            name="lokasi_praktik"
                            isFocused={true}
                            value={data.lokasi_praktik}
                            onChange={(e) =>
                                setData("lokasi_praktik", e.target.value)
                            }
                            required
                        />
                        <span className="text-red-600">
                            {errors.lokasi_praktik}
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="">Lulusan</label>
                        <input
                            id="lulusan"
                            placeholder="Lulusan"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg"
                            label="lulusan"
                            name="lulusan"
                            isFocused={true}
                            value={data.lulusan}
                            onChange={(e) =>
                                setData("lulusan", e.target.value)
                            }
                            required
                        />
                        <span className="text-red-600">
                            {errors.lulusan}
                        </span>
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="px-6 py-2 font-bold text-white bg-primary rounded"
                    >
                        Update
                    </button>
                </div>
            </form>
            <EditPsikologModal onClose={handleOnCloseUpdate} visible={showEditPsikologModal} />
        </div>
    );
}