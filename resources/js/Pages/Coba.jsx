import React from 'react'

export default function Coba() {
    return (
        <div className="carousel carousel-center w-full p-4 space-x-4 bg-cardBlue flex flex-row">
            <div className="carousel-container">
                <div
                    id="item1"
                    className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300
                                w-[300px] h-[360px] 
                                md:w-[370px] md:h-[370px]"
                >
                    <div className="p-10 sm:mt-8 md:mt-8 md:ml-4">
                        <img className="pb-5" src="images/petik.png" />
                        <h3 className="text-xl md:text-2xl font-semibold ">
                            test
                        </h3>
                        <p className="text-md md:text-lg pt-5">test</p>
                    </div>
                </div>
                <div
                    id="item1"
                    className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300
                                w-[300px] h-[360px] 
                                md:w-[370px] md:h-[370px]"
                >
                    <div className="p-10 sm:mt-8 md:mt-8 md:ml-4">
                        <img className="pb-5" src="images/petik.png" />
                        <h3 className="text-xl md:text-2xl font-semibold ">
                            test
                        </h3>
                        <p className="text-md md:text-lg pt-5">test</p>
                    </div>
                </div>
                <div
                    id="item1"
                    className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300
                                w-[300px] h-[360px] 
                                md:w-[370px] md:h-[370px]"
                >
                    <div className="p-10 sm:mt-8 md:mt-8 md:ml-4">
                        <img className="pb-5" src="images/petik.png" />
                        <h3 className="text-xl md:text-2xl font-semibold ">
                            test
                        </h3>
                        <p className="text-md md:text-lg pt-5">test</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
