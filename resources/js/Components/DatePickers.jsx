import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePickers({ changeDate }) {
    const today = new Date()
    const [startDate, setStartDate] = useState(today)
    const handleSelect = (date) => {
        setStartDate(date)
        changeDate(date)
    }

    return (
        <div className="relative">
            <DatePicker
                className="react-datepicker"
                selected={startDate}
                onChange={(date) => handleSelect(date)}
                minDate={today}
            />
        </div>
    )
}
