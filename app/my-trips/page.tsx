'use client';
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import { useUserDetail } from "@/app/Provider";
import { TripInfo } from "../create-new-trip/Components/ChatBox";
import MyTripCardItem from "./Components/MyTripCardItem";

export type Trip = {
    trip_id: any,
    tripDetail: TripInfo,
    _id: string
}
    

function MyTrips() {

    const [myTrips, setMyTrips] = useState<Trip[]>([]);
    const {userDetail, setUserDetail} = useUserDetail();
    const convex = useConvex();

    useEffect(() => {
       userDetail && GetUserTrip();
    }, [userDetail])

    const GetUserTrip = async() => {
        const result = await convex.query(api.TripDetail.GetUserTrips, {
            uid: userDetail?._id
        });
        setMyTrips(result);
        console.log(result);
    }
    
  return (
    <div className="text-white px-10 p-5 md:px-24 lg:px-48">
      <h2 className="font-bold text-3xl mb-2">My Trips</h2>

      {myTrips?.length == 0 && (
        <div className="p-7 border-2 border-gray-700 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-5">
          <h3 className="text-2xl font-bold text-gray-400 mt-4">
            You have no trips Available yet
          </h3>
           <Link href="/create-new-trip">  
                <RainbowButton className='mt-4'>Create New Trip</RainbowButton>
            </Link>
        </div>
       )}
          
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
              {myTrips?.map((trip, index) => (
                  <MyTripCardItem trip={trip} key={index} />
              ))}
        </div>
    </div>
  );
}

export default MyTrips
