import React from 'react'
import ChatBox from './Components/ChatBox'
import Itinerary from './Components/Itinerary'

function CreateNewTrip() {
  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-5 gap-5 px-10 py-5">
      <div className="col-span-2 ">
         <ChatBox/>
      </div>
      <div className='col-span-3 relative'>
         <Itinerary/>
      </div>
    </div>
  )
}

export default CreateNewTrip
