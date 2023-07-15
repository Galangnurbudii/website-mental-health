import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePickers() {
    const today = new Date()
    const [startDate, setStartDate] = useState(today)

    return (
        <div className="relative">
            <DatePicker
                className="react-datepicker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={today}
            />
        </div>
    )
}
