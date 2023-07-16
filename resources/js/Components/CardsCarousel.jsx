export default function CardsCarousel({ className = '', disabled, ...props }) {
    return (
        <div className="carousel-item">
            <div className="gap-7 pb-10">
                <div className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300 w-[360px] h-[360px] md:w-[370px] md:h-[370px]">
                    <div className="p-10 mt-8 md:ml-4">
                        <img className="pb-5" src={props.imageSrc} />
                        <h3 className="text-xl md:text-2xl font-semibold ">
                            {props.text}
                        </h3>
                        <p className="text-md md:text-lg pt-5">{props.names}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
