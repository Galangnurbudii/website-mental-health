import React, { useState } from 'react'

const EditProfile = () => {
    const [user, setUser] = useState({
        nama: 'Putu Agus Parimartha',
        email: 'parimartha@example.com',
        telepon: '1234567890',
        alamat: 'Br. Busana Kelod, Baha',
        kabupaten: 'Badung',
        provinsi: 'Bali',
        password: '********',
        gender: 'Laki-Laki',
    })
    const [editing, setEditing] = useState(false)

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleEditClick = () => {
        setEditing(true)
    }

    const handleSaveClick = () => {
        setEditing(false)
        console.log('Profil disimpan:', user)
    }

    return (
        <div>
            <h1>Edit Profil</h1>
            <label>
                Nama:
                {editing ? (
                    <input
                        type="text"
                        name="name"
                        value={user.nama}
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
                ) : (
                    <span>{user.address}</span>
                )}
            </label>
            <label>
                Kabupaten:
                {editing ? (
                    <input
                        type="text"
                        name="city"
                        value={user.city}
                        onChange={handleInputChange}
                    />
                ) : (
                    <span>{user.city}</span>
                )}
            </label>
            <label>
                Provinsi:
                {editing ? (
                    <input
                        type="text"
                        name="province"
                        value={user.province}
                        onChange={handleInputChange}
                    />
                ) : (
                    <span>{user.province}</span>
                )}
            </label>
            <label>
                Password:
                {editing ? (
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                    />
                ) : (
                    <span>{user.password}</span>
                )}
            </label>
            <label>
                Jenis Kelamin:
                {editing ? (
                    <select
                        name="gender"
                        value={user.gender}
                        onChange={handleInputChange}
                    >
                        <option value="Male">Laki-laki</option>
                        <option value="Female">Perempuan</option>
                    </select>
                ) : (
                    <span>{user.gender}</span>
                )}
            </label>
            {editing ? (
                <button onClick={handleSaveClick}>Simpan</button>
            ) : (
                <button onClick={handleEditClick}>Edit Profil</button>
            )}
        </div>
    )
}

export default EditProfile
