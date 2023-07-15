import React from 'react'

function Badge(props) {
    return (
        <button className="inline-block border border-1 border-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-auto max-w-xs hover:border-hoverBackground hover:text-hoverBackground">
            {props.titleBadge}
        </button>
    )
}

export default Badge
