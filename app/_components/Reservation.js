import React from 'react'
import DateSelector from './DateSelector'
import ReservationForm from './ReservationForm'
import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service'
import { auth } from '../_lib/auth'
import LoginMessage from './LoginMessage'



async function Reservation({cabin}) {
    const [settings, bookedDates] = await Promise.all([ getSettings(),  getBookedDatesByCabinId(cabin.id)])
    const session = await auth();

  return (
    
    <div>
      <div className="flex flex-col md:flex-row border border-primary-800 min-h-[400px] gap-6 md:gap-16">
      <DateSelector bookedDates={bookedDates} cabin={cabin} settings={settings}/>
      {session ?  <ReservationForm cabin={cabin} user={session.user} /> : <LoginMessage/>}
      </div>
    </div>
  )
}

export default Reservation