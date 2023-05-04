export default function CardsCarousel({ className = '', disabled, ...props }) {
    return (
        <div className="carousel gap-5 pb-10 ">
                            <div className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300
                            sm:w-[330px] h-[360px] 
                            md:w-[500px] md:h-[400px]                            
                            lg:w-[500px] lg:h-[450px]">                                
                                <div className='p-10 lg:p-20'>
                                    <img 
                                        className='pb-15'
                                        src={props.imageSrc}
                                    />
                                    <h3 className='text-2xl md:text-3xl lg:text-3xl font-semibold '>{props.text}</h3>
                                    <p className='text-lg md:text-xl lg:text-xl pt-10'>{props.names}</p>
                                </div>                            
                            </div> 
                            <div className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300
                            w-[330px] h-[360px] 
                            md:w-[500px] md:h-[400px]      
                            lg:w-[500px] lg:h-[450px]">                                
                                <div className='p-10 lg:p-20'>
                                    <img 
                                        className='pb-10'
                                        src={props.imageSrc}
                                    />
                                    <h3 className='text-2xl md:text-3xl lg:text-3xl font-semibold '>{props.text}</h3>
                                    <p className='text-lg md:text-xl lg:text-xl pt-10'>{props.names}</p>
                                </div>                            
                            </div> 
                            <div className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300
                            w-[330px] h-[360px] 
                            md:w-[500px] md:h-[400px]      
                            lg:w-[500px] lg:h-[450px]">                                
                                <div className='p-10 lg:p-20'>
                                    <img 
                                        className='pb-10'
                                        src={props.imageSrc}
                                    />
                                    <h3 className='text-2xl md:text-3xl lg:text-3xl font-semibold '>{props.text}</h3>
                                    <p className='text-lg md:text-xl lg:text-xl pt-10'>{props.names}</p>
                                </div>                            
                            </div> 
                            <div className="bg-whiteFABackground carousel-item shadow-xl rounded-lg border border-gray-300
                            w-[330px] h-[360px] 
                            md:w-[500px] md:h-[400px]      
                            lg:w-[500px] lg:h-[450px]">
                                {/* <img src="/images/CaraKonseling1.jpg" alt="" /> */}
                                <div className='p-10 lg:p-20'>
                                    <img 
                                        className='pb-10'
                                        src={props.imageSrc}
                                    />
                                    <h3 className='text-2xl md:text-3xl lg:text-3xl font-semibold '>{props.text}</h3>
                                    <p className='text-lg md:text-xl lg:text-xl pt-10'>{props.names}</p>
                                </div>                            
                            </div> 
                        </div>
    );
}
