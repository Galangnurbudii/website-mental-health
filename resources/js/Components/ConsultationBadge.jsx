import React from 'react'
import PrimaryButton from './PrimaryButton'

function ConsultationBadge() {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-hitam text-2xl font-bold">
                Konsultasikan dengan Ahli
            </h3>
            <p className="text-hitam font-lg">
                Ingin bercerita? Psikolog siap mendengarkan
            </p>

            <div className="border border-disabled rounded-md shadow-md">
                <div className="flex items-center">
                    <img
                        src="../images/pasangan.jpg"
                        alt="Pasangan Supportif Dapat Cegah Depresi"
                        style={{
                            maxWidth: '160px',
                            maxHeight: '160px',
                        }}
                    />
                    <div className="pl-6">
                        <h3 className="text-hitam text-lg font-semibold pt-4">
                            Psikolog
                        </h3>
                        <p className="text-hitam font-lg">
                            Kami siap dengarkan cerita Anda
                        </p>
                        <div className="py-4">
                            <a href={route('konsultasi')}>
                                <PrimaryButton>Konsultasi</PrimaryButton>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultationBadge
