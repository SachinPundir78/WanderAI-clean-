'use client';
import React, { useState,useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useUserDetail } from '@/app/Provider'
import { useConvex } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Trip } from '@/app/my-trips/page'
import Itinerary from '@/app/create-new-trip/Components/Itinerary';
import { useTripDetail } from '@/app/Provider';

function ViewTrip() {

const { tripid } = useParams();
const { userDetail, setUserDetail } = useUserDetail();
const convex = useConvex();
const [tripData, setTripData] = useState<Trip>();
//@ts-ignore    
const { tripDetail, setTripDetail } = useTripDetail();
    
useEffect(() => {
    userDetail && GetTrip();
}, [userDetail]);
    
const GetTrip = async() => {
    const result = await convex.query(api.TripDetail.GetTripById, {
      uid: userDetail?._id,
      tripid: tripid + "",
    });
    console.log(result);
    setTripData(result);
    setTripDetail(result?.tripDetail);
}
    
  return (
    <div className=''>
     <Itinerary />
    </div>
  )
}

export default ViewTrip
