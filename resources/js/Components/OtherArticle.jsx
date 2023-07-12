import React from 'react'
import Badge from './Badge'

function OtherArticle() {
    return (
        <div className="flex items-center">
            <img
                src="storage/images/pasangan.jpg"
                alt="Pasangan Supportif Dapat Cegah Depresi"
                style={{
                    maxWidth: '160px',
                    maxHeight: '160px',
                }}
            />
            <div className="pl-6">
                <h3 className="text-hitam text-lg font-semibold">
                    Pacar Selingkuh?
                </h3>
                <Badge titleBadge="Depresi" />
            </div>
        </div>
    )
}

export default OtherArticle
