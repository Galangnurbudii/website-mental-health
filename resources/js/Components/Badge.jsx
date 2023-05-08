import React from "react";

function Badge(props) {
    return (
        <span className="inline-block border border-1 border-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-auto w-auto max-w-xs">
            {props.titleBadge}
        </span>
    );
}

export default Badge;
