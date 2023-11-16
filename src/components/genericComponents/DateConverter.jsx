import React, { useState } from 'react'

const DateConverter = ({date}) => {

    var isoDate = date
    var isoDay = isoDate.slice(8, 10)
    var isoMonth = (isoDate.slice(5, 7))

    const monthIndex = Number(isoMonth) - 1
    const day = Number(isoDay)
   


    var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];

  return (
    <div>
        <p className="day">{day}</p>
        <p className="month">{monthNames[monthIndex]}</p>
    </div>
  )
}

export default DateConverter