'use client'

import React, { useState, useEffect } from 'react'

function TimeWidget() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate Sydney time (GMT+10)
      const now = new Date()
      const sydneyTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 10 * 3600000)
      setCurrentTime(sydneyTime)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  // Extract hours, minutes, and seconds from currentTime
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  // Adjust hours for 12-hour format
  const formattedHours = hours % 12 || 12

  return (
    <div className="">
      {formattedHours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')} {ampm}
    </div>
  )
}

export default TimeWidget
