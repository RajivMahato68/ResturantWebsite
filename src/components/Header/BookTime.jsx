import React, { useState } from 'react';

function BookingForm() {
  const [personCount, setPersonCount] = useState(2);
  const [date, setDate] = useState('2024-06-24'); // format: YYYY-MM-DD
  const [time, setTime] = useState('12:00 pm');

  const personOptions = Array.from({ length: 10 }, (_, i) => i + 1); // creates an array from 1 to 10

  const timeOptions = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = i % 2 === 0 ? '00' : '30';
    const ampm = hour < 12 ? 'am' : 'pm';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:${minute} ${ampm}`;
  }); // creates an array of time options from 12:00 am to 11:30 pm

  const handlePersonChange = (event) => {
    setPersonCount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className='pt-10'> {/* Increased top padding */}
      <h1
        className='text-center font-bold md:mt-[50px] text-[36px] font-["Plus_Jakarta_Sans"] relative mb-6 underline-offset-8'
        style={{ textDecoration: 'underline #f38220 2px ' }} // Customize color and thickness
      >
        Book A Table
      </h1>
      <div className="flex flex-col items-center gap-5 mt-20">
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <select
              className="border border-orange-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 w-[250px] h-[46px] hover:text-orange-500"
              value={personCount}
              onChange={handlePersonChange}
            >
              {personOptions.map((option) => (
                <option key={option} value={option}>
                  {option} Person
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="border border-orange-500 rounded-md md:ml-[100px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 w-[250px] h-[46px] hover:text-orange-500"
            />
          </div>
          <div>
            <select
              className="border border-orange-500 rounded-md px-4 md:ml-[100px] py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 w-[250px] h-[46px] hover:text-orange-500"
              value={time}
              onChange={handleTimeChange}
            >
              {timeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 mt-[50px]">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default BookingForm;
