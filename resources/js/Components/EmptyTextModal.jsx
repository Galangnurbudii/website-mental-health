import React from 'react'

export default function EmptyTextModal({visible, onClose}) {
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
                        Text Area Kosong
                    </div>
                    <div className="pt-[6px] pl-14">
                        <button onClick={onClose} className="w-[85px] h-[39px] bg-[#F54C60] rounded-lg ml-[25px]">
                            Oke
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
