// import React from "react";
// import { IoArrowForwardOutline } from 'react-icons/io5'

// export default function Post() {
//     return (
//         <div className="relative">
//             <div className="mt-[50px] text-base 
//                             md:w-[400px] lg:w-[78%] h-[236px] 
//                             border border-black rounded-lg">
//                 <h6 className="mt-[15px] ml-[15px]">Anonymous</h6>
//                 <h6 className="my-[25px] mx-[50px] text-justify leading-4  line-clamp-5">
//                     Lorem ipsum dolor sit amet consectetur. Nulla enim ipsum in
//                     augue integer scelerisque massa. Auctor est libero ut mus
//                     at. Feugiat sem iaculis elementum dictum aliquet pharetra
//                     id. Donec ut arcu turpis condimentum habitant volutpat.
//                     Lectus elementum posuere tincidunt sed sed nunc risus. Erat
//                     in nunc parturient bibendum at tincidunt ut. Vestibulum diam
//                     amet duis at scelerisque. Ipsum massa mi massa viverra
//                     volutpat leo mauris. Pulvinar quis ultricies sed faucibus.
//                 </h6>
//                 <div className="relative">
//                     <button className="absolute w-[125px] h-[35px] right-16
//                                         text-primary font-bold text-base">
//                         Lanjut Baca
//                     </button>
//                     <IoArrowForwardOutline
//                         className='absolute cursor-pointer right-12 top-2'
//                         size={20}
//                         color="#4C9BF5"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

import React from "react";
import { IoArrowForwardOutline } from 'react-icons/io5'

export default function Post({ post }) {
    
    console.log(post)
    return (
        <div className="relative">
            <div className="h-[209px] lg:h-[245px] bg-primary rounded-lg mt-5">
            </div>
            <div id="kotak-content" 
                className="bg-white
                            text-base border border-black rounded-lg
                            h-[200px] lg:h-[236px]
                            mb-7 
                            -mt-[209px] lg:-mt-[245px]">
                <h6 className="mt-[15px] ml-[25px] font-semibold text-xl">
                    Anonymous
                </h6>
                <h6 className="my-[25px] mx-[50px] text-justify 
                                leading-4 line-clamp-3 sm:line-clamp-4 lg:line-clamp-5 text-md">
                    {post.konten}
                </h6>
                <a href="">
                    <div className="relative">
                        <button className="absolute w-[125px] h-[35px] right-16
                                            text-primary font-bold text-base">
                            Lanjut Baca
                        </button>
                        <IoArrowForwardOutline
                            className='absolute cursor-pointer right-12 top-2'
                            size={20}
                            color="#4C9BF5"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
}
