import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePickers() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const today = new Date();

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    // Perform the validation
    if (startDate && date < startDate) {
      return; // Do not update the end date if it's before the start date
    }
    setEndDate(date);
  };

  return (
    <div className="flex items-center">
      <div style={{ width: '240px' }} className="relative">        
        <DatePicker
          name="start"
          selected={startDate}
          onChange={handleStartDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsStart
          placeholderText={today.toLocaleDateString()}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"          
        />
      </div>
      <span className="mx-4 text-gray-500">-</span>
      <div style={{ width: '240px' }} className="relative">
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
  );
}

export default DateRangePickers;