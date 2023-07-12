import React from 'react'
import { useState } from 'react'

export default function RadioButtons() {
    const [selectedOption, setSelectedOption] = useState('')

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value)
    }

    return (
        <>
            <div>
                <div className="flex items-center justify-between mb-4 border-b-2 pb-5 border-disabled-300">
                    <div className="flex items-center">
                        <img className="w-8" src="storage/images/BNI.jpg" />
                        <label
                            htmlFor="default-radio-1"
                            className="ml-2 text-sm font-medium text-disabled"
                        >
                            Bank BCA
                        </label>
                    </div>
                    <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                </div>
                <div className="flex items-center justify-between mb-4 border-b-2 pb-5 border-disabled-300">
                    <div className="flex items-center">
                        <img className="w-8" src="storage/images/BRI.png" />
                        <label
                            htmlFor="default-radio-1"
                            className="ml-2 text-sm font-medium text-disabled"
                        >
                            Bank BRI
                        </label>
                    </div>
                    <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <img className="w-8" src="storage/images/BCA.png" />
                        <label
                            htmlFor="default-radio-1"
                            className="ml-2 text-sm font-medium text-disabled"
                        >
                            Bank BNI
                        </label>
                    </div>
                    <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                </div>
            </div>
        </>
    )
}
