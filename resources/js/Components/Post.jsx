import React from "react";

export default function Post() {
    return (
        <div className="relative flex items-center justify-center">
            <div className="bg-blurPost bg-opacity-50 mt-[50px] text-base w-5/6 lg:w-[900px] h-[236px]">
                <h6 className="mt-[15px] ml-[15px]">Anonymous</h6>
                <h6 className="my-[25px] mx-[50px] text-justify leading-4 line-clamp-5">
                    Lorem ipsum dolor sit amet consectetur. Nulla enim ipsum in
                    augue integer scelerisque massa. Auctor est libero ut mus
                    at. Feugiat sem iaculis elementum dictum aliquet pharetra
                    id. Donec ut arcu turpis condimentum habitant volutpat.
                    Lectus elementum posuere tincidunt sed sed nunc risus. Erat
                    in nunc parturient bibendum at tincidunt ut. Vestibulum diam
                    amet duis at scelerisque. Ipsum massa mi massa viverra
                    volutpat leo mauris. Pulvinar quis ultricies sed faucibus.
                </h6>
                <div className="relative">
                    <button className="absolute border-2 border-fourthPost text-primaryPost w-[157px] h-[42px] text-base rounded-lg right-12">
                        Lanjut Baca
                    </button>
                </div>
            </div>
        </div>
    );
}

// export default Post;
