export default function CardsCarousel({ className = '', disabled, ...props }) {
    return (
        <div
            id="item1"
            className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300 w-full md:w-[300px] lg:w-[380px] lg:h-[370px]"
        >
            <div className="p-10 sm:mt-8 md:mt-8 md:ml-4">
                <img className="pb-5" src={props.imageSrc} />
                <h3 className="text-xl md:text-2xl font-semibold ">
                    {props.text}
                </h3>
                <p className="text-md md:text-lg pt-5">{props.names}</p>
            </div>
        </div>
    )
}
