import React from 'react'

export default function MyModal({visible, onClose}) {
    const handleOnClose = (e) => {
        if (e.target.id == "container") onClose();
    };

    if(!visible) return null;
    return (
        <>
            <div id='container' onClick={handleOnClose} 
                className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
                <div className="absolute border rounded-xl border-black bg-[#FFFFFF] w-[250px] h-[100px] pt-[10px]">
                    <div className="text-center">
                        Apakah Anda Yakin?
                    </div>
                    <div className="pl-[27px] pt-[6px]">
                        <a href={ route("forumHome") }>
                            <button className="w-[85px] h-[39px] bg-[#4C9BF5] rounded-lg">
                                Ya
                            </button>
                        </a>
                        <button onClick={onClose} className="w-[85px] h-[39px] bg-[#F54C60] rounded-lg ml-[25px]">
                            Tidak
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
