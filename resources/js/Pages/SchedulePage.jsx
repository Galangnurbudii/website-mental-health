import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const SchedulePage = () => {
    const scheduleData = [
        {
            title: 'Konsultasi dengan John Doe',
            start: new Date(2023, 6, 8, 9, 0),
            end: new Date(2023, 6, 8, 10, 0),
        },
        {
            title: 'Konsultasi dengan Jane Smith',
            start: new Date(2023, 6, 8, 11, 30),
            end: new Date(2023, 6, 8, 12, 30),
        },
        // ...data jadwal lainnya
    ]

    const localizer = momentLocalizer(moment)

    return (
        <div className="container mx-auto py-6">
            <h1 className="text-2xl font-bold mb-4">
                Jadwal Konsultasi Hari Ini
            </h1>
            <Calendar
                localizer={localizer}
                events={scheduleData}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}

export default SchedulePage
