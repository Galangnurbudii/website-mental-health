import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// ...

const Avaibility = () => {
    const [availabilityRange, setAvailabilityRange] = useState({
        startDate: null,
        endDate: null,
    })

    const handleStartDateChange = (date) => {
        setAvailabilityRange((prevRange) => ({
            ...prevRange,
            startDate: date,
        }))
    }

    const handleEndDateChange = (date) => {
        setAvailabilityRange((prevRange) => ({
            ...prevRange,
            endDate: date,
        }))
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-sm mx-auto bg-white shadow rounded-lg overflow-hidden">
                <div className="p-6">
                    {/* ... */}
                    <div className="mt-4">
                        <label className="block text-gray-800 font-semibold mb-2">
                            Rentang Ketersediaan
                        </label>
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-gray-800 mb-2">
                                    Mulai Tanggal
                                </label>
                                <DatePicker
                                    selected={availabilityRange.startDate}
                                    onChange={handleStartDateChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-800 mb-2">
                                    Hingga Tanggal
                                </label>
                                <DatePicker
                                    selected={availabilityRange.endDate}
                                    onChange={handleEndDateChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Avaibility
