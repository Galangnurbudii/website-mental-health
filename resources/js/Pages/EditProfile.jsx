import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import Popup from '@/Components/Popup'

const EditProfile = ({ user }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
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
        <div className="flex flex-col gap-6 md:px-16 lg:px-20">
            <h1 className="font-bold text-xl md:text-2xl text-hitam pt-12">
                Edit Profile
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="profile_photo" className="cursor-pointer">
                        <div className="rounded-full overflow-hidden w-12 h-12">
                            <img
                                src="images/fotoProfil.jpeg"
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
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="email">Email</label>
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

                <div>
                    <Popup
                        textButton={'Update'}
                        title={'Update Profil berhasil'}
                        desc="Profil Anda telah diperbarui"
                    />
                </div>
            </form>
        </div>
    )
}

export default EditProfile
