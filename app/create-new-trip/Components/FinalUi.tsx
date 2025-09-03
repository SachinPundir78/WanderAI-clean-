import { Button } from "@/components/ui/button"
import { Globe2 } from 'lucide-react'

function FinalUi({viewTrip, disable}:any) {
  return (
    <div className='flex flex-col items-center justify-center mt-6 p-6 bg-white rounded-2xl shadow-lg'>
          <Globe2 className="text-4xl animate-bounce text-amber-900" />
          <h2 className='mt-3 text-lg font-semibold text-black'>
              Planning your dream trip...
          </h2>
          <p className="text-gray-500 text-sm text-center mt-1"> 
              Gathering best destination, activities, and travel details for you.
          </p>
          <Button disabled={disable} onClick={viewTrip} className='mt-2 w-[30%] bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-red-400 hover:to-purple-700'>View Trip</Button>
          <div className="w-48 h2 bg-green-300 rounded-full mt-4 overflow-hidden">
              <div className="h-2 bg-gray-600 animate-pulse w-3/4"></div>
          </div>
    </div>
  )
}

export default FinalUi
