import React from 'react'
import { Link } from '@inertiajs/react'

function Directory({ articleTitle }) {
    return (
        <div className="w-full bg-disabledBackground p-3 pl-6 sm:pl-6 md:pl-16 lg:pl-16">
            <p className="text-primary text-base font-semibold">
                <Link href={route('article')} className="pr-4">
                    Artikel
                </Link>
                <span className="text-hitam"> {'>'}</span>
                <span className="text-hitam pl-4">{articleTitle}</span>
            </p>
        </div>
    )
}

export default Directory
