import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DateRangePickers({ changeStartDate, changeEndDate }) {
    const today = new Date()
    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(null)

    const handleStartDateChange = (date) => {
        setStartDate(date)
        changeStartDate(date)
    }

    const handleEndDateChange = (date) => {
        // Perform the validation
        if (startDate && date < startDate) {
            return // Do not update the end date if it's before the start date
        }
        setEndDate(date)
        changeEndDate(date)
    }

    return (
        <div className="lg:flex md:flex sm:grid items-center">
            <div style={{ width: '240px' }} className="relative">
                <h3 className="pb-4 font-semibold text-lg">Dari Tanggal:</h3>
                <DatePicker
                    name="start"
                    selected={startDate}
                    onChange={handleStartDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsStart
                    placeholderText={today.toLocaleDateString()}
                    minDate={today}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                />
            </div>
            <span className="mx-4 mt-10 text-gray-500 hidden md:block lg:block">
                -
            </span>
            <div style={{ width: '240px' }} className="relative">
                <h3 className="pb-4 font-semibold text-lg pt-5 lg:pt-0 md:pt-0">
                    Sampai Tanggal:
                </h3>
                <DatePicker
                    name="end"
                    selected={endDate}
                    onChange={handleEndDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsEnd
                    minDate={startDate}
                    placeholderText="7/20/2023"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
        </div>
    )
}

export default DateRangePickers
