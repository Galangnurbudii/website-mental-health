import React from "react";

function CardArticle(props) {
    const { title, description, categories } = props;

    return (
        <div className="bg-putih rounded-lg shadow-md overflow-hidden w-full h-auto">
            <img
                src="images/Gambar1.png"
                alt="Ini Gambar Article"
                className="w-full h-56 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    Card Title
                </h2>
                <div className="mt-4">
                    <span className="inline-block border border-1 border-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Depresi
                    </span>
                    <span className="inline-block border border-1 border-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Depresi
                    </span>
                </div>
                <p className="mt-2 text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce non magna vel nulla dignissim tincidunt sit amet eget
                    metus.
                </p>

                <div className="inline-block flex flex-row flex-wrap pt-4 text-gray-800 font-bold text-base">
                    <p className="pr-10">Penulis</p>
                    <p className="">3 Mei 2023</p>
                </div>
            </div>
        </div>
    );
}

export default CardArticle;
