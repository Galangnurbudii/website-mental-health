import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import Popup from '@/Components/Popup'
import { Link, useForm, usePage } from '@inertiajs/react'

import ProfileNavbar from '@/Components/ProfileNavbar'
import PrimaryButton from '@/Components/PrimaryButton'

const EditProfile = () => {
    const user = usePage().props.auth.user
    console.log(user.profile_picture_url)

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            no_telepon: user.nomor_telfon,
            alamat: user.alamat,
        })

    const handleSubmit = (e) => {
        e.preventDefault()

        patch(route('profile.update'))
    }

    return (
        <>
            <ProfileNavbar />
            <div className="flex flex-col gap-6 px-6 md:px-16 lg:pl-96 lg:pr-60 pb-32">
                <h1 className="font-bold text-2xl md:text-4xl text-hitam pt-12">
                    Edit Profile
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2 items-center md:py-6">
                        <label
                            htmlFor="profile_photo"
                            className="cursor-pointer"
                        >
                            <div className="rounded-full overflow-hidden w-48 h-48 md:w-56 md:h-56">
                                <img
                                    src={user.profile_picture_url}
                                    alt="Profile Photo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </label>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-semibold text-lg">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="rounded-md"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="font-semibold text-lg"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="rounded-md"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="font-semibold text-lg"
                        >
                            No Telepon
                        </label>
                        <input
                            id="no_telepon"
                            type="text"
                            name="no_telepon"
                            className="rounded-md"
                            value={data.no_telepon}
                            onChange={(e) =>
                                setData('no_telepon', e.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="font-semibold text-lg"
                        >
                            Alamat
                        </label>
                        <input
                            id="alamat"
                            type="text"
                            name="alamat"
                            className="rounded-md"
                            value={data.alamat}
                            onChange={(e) => setData('alamat', e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex mt-2">
                        <PrimaryButton>Edit Profile</PrimaryButton>
                    </div>

                    {/* <div>
                        <Popup
                            textButton={'Update'}
                            title={'Update Profil berhasil'}
                            desc="Profil Anda telah diperbarui"
                        />
                    </div> */}
                </form>
            </div>
        </>
    )
}

export default EditProfile
