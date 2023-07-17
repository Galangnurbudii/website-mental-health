import { Link } from '@inertiajs/react'

export default function Guest({ children }) {
    return (
        <div className="max-h-screen flex flex-col justify-center items-center">
            <div></div>

            <div className="w-full">{children}</div>
        </div>
    )
}
