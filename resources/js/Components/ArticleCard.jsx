import React from "react";

function ArticleCard() {
    return (
        <div className="card w-full lg:w-96 bg-putih shadow-xl">
            <figure className="h-full md:h-2/4">
                <img
                    src="images/Gambar1.png"
                    alt="Foto Berita"
                    className="w-full h-full"
                />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-semibold text-hitam">
                    Judul Berita
                </h2>
                <div className="text-base text-hitam">
                    <div className="flex gap-4">
                        <div className="badge badge-outline rounded-md border border-hitam opacity-90">
                            Mental
                        </div>
                        <div className="badge badge-outline rounded-md border border-hitam opacity-90">
                            Parimartha
                        </div>
                    </div>
                </div>
                <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce non magna vel nulla dignissim tincidunt sit amet eget
                    metus.
                </p>
                <div className="flex text-hitam font-bold text-base">
                    <p className="">
                        Penulis <span className="pl-12">3 Mei 2023</span>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;
