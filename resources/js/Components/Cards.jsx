import NumberBox from "./NumberBox";

export default function Cards({ className = "", disabled, ...props }) {
    return (
        <div className="overflow-x-auto scrollbar">        
        <div
            className="
            grid mx-auto gap-6 pb-10 
                    md:grid-cols-2 
                    sm:grid-cols-1 
                    lg:grid-cols-3
                    px-8                                        
                    md:px-16
                    lg:px-32"
        >
            <div className="card w-100 h-[480px] bg-base-100 shadow-xl border border-gray-300">
                <figure className="bg-counselingBackground">
                    <img src="images/CaraKonseling1.jpg" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-cols-2">
                        <div className="pr-4">
                            <NumberBox number={1} />
                        </div>
                        <h2 className="card-title">{props.title1}</h2>
                    </div>
                    <p className="pb-6">{props.desc1}</p>
                </div>
            </div>
            <div className="card w-100 h-[480px] bg-base-100 shadow-xl border border-gray-300">
                <figure className="bg-counselingBackground">
                    <img src="images/CaraKonseling2.jpg" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-cols-2">
                        <div className="pr-4">
                            <NumberBox number={2} />
                        </div>
                        <h2 className="card-title">{props.title2}</h2>
                    </div>
                    <p className="pb-6">{props.desc2}</p>
                </div>
            </div>
            <div className="card w-100 h-[480px] bg-base-100 shadow-xl border border-gray-300">
                <figure className="bg-counselingBackground">
                    <img src="images/CaraKonseling3.png" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-cols-2">
                        <div className="pr-4">
                            <NumberBox number={3} />
                        </div>
                        <h2 className="card-title">{props.title3}</h2>
                    </div>
                    <p className="pb-6">{props.desc3}</p>
                </div>
            </div>
        </div>
        </div>
    );
}
