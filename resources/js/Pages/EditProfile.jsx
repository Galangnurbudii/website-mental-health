import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import Popup from '@/Components/Popup'
import ProfileNavbar from '@/Components/ProfileNavbar'
import PrimaryButton from '@/Components/PrimaryButton'

const EditProfile = ({ user }) => {
    console.log(user)
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        no_telepon: '081529518xxx',
        alamat: 'Ponorogo, Jawa Timur',
        profile_photo: null,
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target

        if (name === 'profile_photo') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: files[0],
            }))
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        Inertia.put(`/users/${user.id}`, formData)
    }

    return (
        <>
            <ProfileNavbar />
            <div className="flex flex-col gap-6 px-6 md:px-16 lg:pl-96 lg:pr-60 pb-32">
                <h1 className="font-bold text-xl md:text-2xl text-hitam pt-12">
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
                                    src="../../images/fotoProfil.jpeg"
                                    alt="Profile Photo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <input
                                id="profile_photo"
                                type="file"
                                name="profile_photo"
                                accept="image/*"
                                onChange={handleChange}
                                className="hidden"
                            />
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
                            value={formData.name}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.no_telepon}
                            onChange={handleChange}
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
                            value={formData.alamat}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex justify-end mt-2">
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
