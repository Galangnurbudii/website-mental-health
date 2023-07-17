import React from 'react'

function ProfilPlaceholders(props) {
    return (
        <div className="flex flex-col gap-1">
            <p className="text-hitam font-medium text-base">{props.title}</p>
            <div className="border-2 rounded-md border-hitam w-5/6 p-2">
                <p className="text-hitam text-base">{props.contain}</p>
            </div>
        </div>
    )
}

export default ProfilPlaceholders
