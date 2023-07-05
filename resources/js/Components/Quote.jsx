import React from 'react'


function Quote({quote}) {
    console.log(quote);

    return (
        <div className="bg-putih w-fullx-auto flex flex-col md:flex-row items-center md:py-12 md:px-16 lg:px-32">
            <div className="flex flex-wrap flex-col max-full p-6 md:w-1/2 md:p-0">
                <div className="flex flex-col justify-center gap-2 pb-4">
                    <div>
                        <span className="text-6xl md:text-8xl text-primary font-bold">
                            "
                        </span>
                    </div>
                    <h1 className="text-hitam font-bold text-2xl md:text-4xl">

                        {quote.konten}
                    </h1>
                    <div className="self-end">
                        <span className="text-6xl md:text-8xl text-primary font-bold">
                            "
                        </span>
                    </div>
                </div>
            </div>
            <div className="max-full md:flex md:justify-center md:place-items-center px-4 md:w-1/2 md:pr-10">
                <img
                    src="images/quote.png"
                    alt="quote"
                    className="max-h-80 md:max-h-fit"
                />
            </div>
        </div>
    )
}

export default Quote
