import { FaStar, FaRegCalendarAlt } from "react-icons/fa";

export default function DetailPayment({ className = "", disabled, ...props }) {
    return (
        <div className="border border-gray-100 card lg:card-side bg-base-100 shadow-sm rounded-sm overflow-x-auto">
            {/* Picture */}
            <div className="py-4 xl:px-10 lg:px-4 pr-0">
                <figure>
                    <img
                        className="w-40 h-40 lg:w-24 lg:h-24"
                        src={props.imageSrc}
                    />
                </figure>
            </div>
            {/* Information */}
            <div className="card-body lg:px-10 md:px-10 sm:px-10 xs:px-4">
                <h2 className="card-title text-lg">{props.names}</h2>
                <p className="font-semibold text-md text-disabled">{props.jobs}</p>
                <p className="text-sm">{props.text}</p>            
            </div>
        </div>
    );
}
