import React from 'react'

export default function MyModal({visible, onClose}) {
    const handleOnClose = (e) => {
        if (e.target.id == "container") onClose();
    };

    if(!visible) return null;
    return (
        <>
            <div id='container' 
                onClick={handleOnClose} 
                className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm 
                            flex justify-center items-center'>
                <div className="absolute border rounded-xl border-black bg-[#FFFFFF] 
                                w-[50%] h-[35%] 
                                md: pt-[10px]">
                    {/* 
                     sm 640
                     md 768
                     lg 1024
                     xl 1280
                    2xl 1536
                     */}
                    <div className="text-center text-md 
                                    sm:text-xl md:text-2xl
                                    px-10 py-10
                                    sm:py-20 md:py-16 2xl:py-24
                                    flex flex-col">
                        <h1>
                            Update sukses!
                        </h1>
                        <h2>
                            Data telah berhasil diperbarui 
                            dan perubahan telah disimpan.
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
