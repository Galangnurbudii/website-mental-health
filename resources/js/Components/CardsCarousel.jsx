export default function CardsCarousel({ className = "", disabled, ...props }) {
    return (        
        <div className="carousel-container">
            <div className="carousel gap-7 pb-10 overflow-x-auto">
                <div id = "item1"
                    className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300
                                w-[300px] h-[360px] 
                                md:w-[370px] md:h-[370px]"
                >
                    <div className="p-10 sm:mt-8 md:mt-8 md:ml-4">
                        <img className="pb-5" src={props.imageSrc} />
                        <h3 className="text-xl md:text-2xl font-semibold ">
                            {props.text}
                        </h3>
                        <p className="text-md md:text-lg pt-5">
                            {props.names}
                        </p>
                    </div>
                </div>
                <div id = "item2"
                    className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300
                                w-[300px] h-[360px] 
                                md:w-[370px] md:h-[370px]"
                >
                    <div className="p-10 sm:mt-8 md:mt-8 md:ml-4">
                        <img className="pb-5" src={props.imageSrc} />
                        <h3 className="text-xl md:text-2xl font-semibold ">
                            {props.text}
                        </h3>
                        <p className="text-md md:text-lg pt-5">
                            {props.names}
                        </p>
                    </div>
                </div>
                <div id = "item3"
                    className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300
                                w-[300px] h-[360px] 
                                md:w-[370px] md:h-[370px]"
                >
                    <div className="p-10 sm:mt-8 md:mt-8 md:ml-4">
                        <img className="pb-5" src={props.imageSrc} />
                        <h3 className="text-xl md:text-2xl font-semibold ">
                            {props.text}
                        </h3>
                        <p className="text-md md:text-lg pt-5">
                            {props.names}
                        </p>
                    </div>
                </div>
                <div id = "item4"
                    className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300
                                w-[300px] h-[360px] 
                                md:w-[370px] md:h-[370px]"
                >
                    <div className="p-10 sm:mt-8 md:mt-8 md:ml-4">
                        <img className="pb-5" src={props.imageSrc} />
                        <h3 className="text-xl md:text-2xl font-semibold ">
                            {props.text}
                        </h3>
                        <p className="text-md md:text-lg pt-5">
                            {props.names}
                        </p>
                    </div>
                </div>
                    
            </div>
            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 py-10 px-10">
                <a href="#slide3" className="btn btn-circle bg-transparent border border-none">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div> */}
        </div>

    );
}
