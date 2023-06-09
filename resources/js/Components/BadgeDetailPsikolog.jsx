import React from "react";

function Badge(props) {
    return (
        <span className="inline-block border border-1 border-gray-200 rounded-md px-3 py-1 text-xs font-semibold text-disabled mr-2 mb-2 w-auto max-w-xs">
            {props.titleBadge}
        </span>
    );
}

export default Badge;
