import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

function Directory({ articleTitle }) {
    return (
        <div className="bg-primaryDisabled px-6 md:px-16 lg:px-20">
            <p className="text-primary text-base">
                <InertiaLink href={route('article')}>Article &gt;</InertiaLink>
                <span className="text-hitam">{articleTitle}</span>
            </p>
        </div>
    )
}

export default Directory
