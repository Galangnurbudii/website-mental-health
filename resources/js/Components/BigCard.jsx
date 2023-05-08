import React from "react";
import SecondaryButton from "./SecondaryButton";

function BigCard() {
    return (
        <div className="bg-putih rounded-lg shadow-md overflow-hidden w-full h-1/2">
            <div className="flex flex-row justify-between gap-4">
                <img
                    src="images/Gambar2.png"
                    alt="Ini Gambar Article"
                    className="w-1/2 h-1/6 object-cover"
                />

                <div className="flex flex-col p-8">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Pasangan Supportif Dapat Cegah Depresi
                    </h2>

                    <div className="inline-block flex flex-row flex-wrap pt-4 text-gray-800">
                        <p className="pr-10">Penulis</p>
                        <p className="">3 Mei 2023</p>
                    </div>

                    <div className="mt-4">
                        <span className="inline-block border border-1 border-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            Depresi
                        </span>
                        <span className="inline-block border border-1 border-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            Depresi
                        </span>
                    </div>
                    <p className="mt-2 text-gray-600">
                        Lörem ipsum mell elingar, bevabelt, egoliga mödade.
                        Eusäse deheten obel. Gyliga stalker fixie i
                        svininfluensa. Tav infrapöning påns och kvasining
                        telingar sok nöpisa nede. Jygisk lyssna in parasport, om
                        än spetrektigt kvasisoning teleform.
                    </p>
                    <div className="pt-10 flex flex-row justify-end">
                        <SecondaryButton>Lanjut Baca</SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigCard;
