import NavProfil from '@/Components/ProfileNavbarAdmin'
import React from 'react'
import ProfilPlaceholders from './ProfilPlaceholders'
import PrimaryButton from '@/Components/PrimaryButton'
export default function EditProfile() {
    return (
        <>
            <NavProfil />
            <div className={`${open ? 'pl-96 pt-12' : 'pl-20'} duration-500`}>
                <div className="flex flex-col gap-4">
                    <h3 className="text-hitam font-semibold text-2xl">
                        Edit Profil
                    </h3>
                    <ProfilPlaceholders
                        title={'Nama'}
                        contain={'Putu Agus Parimartha'}
                    />
                    <ProfilPlaceholders
                        title={'Email'}
                        contain={'paparimartha@gmail.com'}
                    />
                    <ProfilPlaceholders
                        title={'No Telepon'}
                        contain={'081529588980'}
                    />
                    <ProfilPlaceholders
                        title={'Alamat'}
                        contain={
                            'Br. Busana Kelod, Desa Baha, Kecamatan Mengwi'
                        }
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
