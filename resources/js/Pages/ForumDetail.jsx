import React from 'react'
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

export default function ForumDetail() {
  return (
    <>
        <NavBar />
        <div className='h-auto px-6 sm:px-0'>
            <div className="bg-white text-base
                            border-x border-t border-black rounded-t-lg
                            h-auto sm:mx-52 w-full sm:w-auto
                            -mb-[10px]">
                <h6 className="mt-[15px] ml-[25px] font-semibold text-xl line-clamp-1 mr-[50px]">
                    Anonymous
                </h6>
                <h6 className="my-[25px] mx-[50px] text-justify
                                leading-6 text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum magni tempore quaerat unde rerum vel, perspiciatis 
                    quibusdam voluptatibus nostrum consectetur sit tenetur 
                    explicabo dolores. Voluptas quisquam eaque nisi consectetur nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum magni tempore quaerat unde rerum vel, perspiciatis 
                    quibusdam voluptatibus nostrum consectetur sit tenetur 
                    explicabo dolores. Voluptas quisquam eaque nisi consectetur nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum magni tempore quaerat unde rerum vel, perspiciatis 
                    quibusdam voluptatibus nostrum consectetur sit tenetur 
                    explicabo dolores. Voluptas quisquam eaque nisi consectetur nulla.
                </h6>
            </div>
            <div className="h-[30px] bg-primary min-w-fit text-transparent
                            rounded-b-lg -mb-[30px] 
                            sm:mx-52 w-full sm:w-auto
                            ">
            </div>
            <div className="h-[30px] bg-white min-w-fit
                            border-x border-b border-black text-transparent
                            rounded-b-lg mb-[50px] -mt-[45px]
                            sm:mx-52 w-full sm:w-auto">
            </div>
        </div>
        <Footer />
    </>
  )
}
