import NavProfil from '@/Components/ProfileNavbarAdmin'
import React from 'react'
import ProfilPlaceholders from './ProfilPlaceholders'
import PrimaryButton from '@/Components/PrimaryButton'
export default function EditProfile() {
    return (
        <div>
            <h1>Edit Profil</h1>
            <label>
                Nama:
                {editing ? (
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                    />
                ) : (
                    <span>{user.name}</span>
                )}
            </label>
            <label>
                Email:
                {editing ? (
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                ) : (
                    <span>{user.email}</span>
                )}
            </label>
            <label>
                Nomor Telepon:
                {editing ? (
                    <input
                        type="tel"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                    />
                ) : (
                    <span>{user.phone}</span>
                )}
            </label>
            <label>
                Alamat:
                {editing ? (
                    <input
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleInputChange}
                    />
                    <div className="flex flex-row gap-10">
                        <ProfilPlaceholders
                            title={'Kabupaten'}
                            contain={'Badung'}
                        />
                        <ProfilPlaceholders
                            title={'Provinsi'}
                            contain={'Bali'}
                        />
                    </div>

                    <div className="flex flex-row gap-10">
                        <ProfilPlaceholders
                            title={'Password'}
                            contain={'********'}
                        />
                        <ProfilPlaceholders
                            title={'Jenis Kelamin'}
                            contain={'Laki-Laki'}
                        />
                    </div>

                    <div className="flex flex-row">
                        <PrimaryButton>Edit Profil</PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile
