import { Link } from "@inertiajs/react"

export default function CardsLayanan({ className = "", disabled, ...props }){

    return(
        
<div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 p-5 gap-5">
                                    <div className="card w-90 bg-base-100 shadow-xl border border-gray-100 cursor-pointer transition duration-300 ease-in-out hover:shadow-2xl">
                                        <Link href={route("detaillayanan")}>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    Tatap Muka
                                                </h2>
                                            </div>
                                            <figure>
                                                <img
                                                    className="pb-6"
                                                    src="/images/TatapMuka.png"
                                                />
                                            </figure>
                                        </Link>                                        
                                    </div>
                                    <div className="card w-90 bg-base-100 shadow-xl border border-gray-100 cursor-pointer transition duration-300 ease-in-out hover:shadow-2xl">
                                        <Link href={route("detaillayanan")}>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    Video Call
                                                </h2>
                                            </div>
                                            <figure>
                                                <img
                                                    className="pb-6"
                                                    src="/images/VideoCall.png"
                                                />
                                            </figure>
                                        </Link>                                        
                                    </div>
                                </div>

)
}