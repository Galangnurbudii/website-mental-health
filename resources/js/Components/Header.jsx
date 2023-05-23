import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Header({ className = "", disabled, ...props }) {
    const [state, setState] = useState(props.currpages === 'Detail' ? 2 : 1);

    const handleStateChange = () => {
        setState(state === 1 ? 2 : 1);
    };

    return (
        <>
        {state === 1 && (
            // State 1
            <div className="w-full bg-disabledBackground p-3 pl-10 sm:pl-16 md:pl-16 lg:pl-32">
            <p className="font-semibold">
                <span className="text-primary pr-4">
                <Link href={route("dashboard")}>{props.pages}</Link>
                </span>
                {">"}
                <span className="pl-4">{props.currpages}</span>
            </p>
            </div>
        )}

        {state === 2 && (
            // State 2
            <div className="w-full bg-disabledBackground p-3 pl-10 sm:pl-16 md:pl-16 lg:pl-32">
            <p className="font-semibold">
                <span className="text-primary pr-4">
                <Link href={route("dashboard")}>{props.pages2}</Link>
                </span>
                {">"}
                <span className="pl-4 text-primary pr-4">
                <Link href={route("layanan")}>{props.currpages2}</Link>
                </span>
                {">"}
                <span className="pl-4">{props.currpages}</span>
            </p>
            </div>
        )}
        </>
    );
}
