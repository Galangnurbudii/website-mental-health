import React from 'react'
import BackUpButton from './BackUpButton'

function ConsultationBadge() {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-hitam text-2xl font-bold">
                Konsultasikan dengan Ahli
            </h3>
            <p className="text-hitam font-lg">
                Ingin bercerita? Psikolog siap mendengarkan
            </p>

            <div className="border border-gray-300 rounded-md shadow-md">
                <div className="flex items-center">
                    <img
                        src="../images/doctorImage.png"
                        alt="Pasangan Supportif Dapat Cegah Depresi"
                        className="pl-5"
                        style={{
                            maxWidth: '120px',
                            maxHeight: '120px',
                        }}
                    />
                    <div className="pl-5">
                        <h3 className="text-hitam text-lg font-semibold pt-4">
                            Psikolog
                        </h3>
                        <p className="text-hitam font-lg">
                            Kami siap dengarkan cerita Anda
                        </p>
                        <div className="py-4">
                            <a href={route('konsultasi')}>
                                <BackUpButton>Konsultasi</BackUpButton>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultationBadge
