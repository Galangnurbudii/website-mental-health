import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        // mx-auto max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl
        <div className="max-h-screen flex flex-col sm:justify-center items-center sm:pt-0">
            <div>
                {/* <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link> */}
            </div>

            <div className="w-full">{children}</div>
        </div>
    );
}
