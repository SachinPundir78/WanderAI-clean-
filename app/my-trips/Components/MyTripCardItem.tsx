import React from "react";
import { ArrowBigRightIcon } from "lucide-react";
import { Trip } from "../page";
import Image from "next/image";
import { usePixabayImage } from "../../create-new-trip/hooks/usePixaBayImage";
import Link from "next/link";

type Props = {
  trip: Trip;
};

function MyTripCardItem({ trip }: Props) {
  const firstActivityPlace = trip?.tripDetail?.destination;

  const photoUrl = usePixabayImage(firstActivityPlace);
  return (
    <Link href={"/view-trips/" + trip?.trip_id}>
      <div
        className="p-3 
    shadow-[0_0_5px_#ff66cc,0_0_10px_#9966ff,0_0_15px_#cc33ff,0_0_20px_#33ccff] 
    hover:shadow-[2px_2px_12px_#ff66cc,4px_4px_12px_#9966ff,6px_6px_12px_#cc33ff,8px_8px_12px_#33ccff] 
    rounded-2xl"
      >
        <div className="w-full h-64 relative rounded-xl overflow-scroll">
          <Image
            src={photoUrl ? photoUrl : "/placeholder1.jpg"}
            width={400}
            height={400}
            alt={trip.trip_id || "place-image"}
            className="rounded-xl object-cover"
          />
        </div>
        <h2 className="flex gap-2 font-semibold text-xl mt-3">
          {trip?.tripDetail?.origin}
          <ArrowBigRightIcon />
          {trip?.tripDetail?.destination}
        </h2>
        <h2 className="mt-2 text-gray-400">
          {trip?.tripDetail?.duration} Trip With {trip?.tripDetail?.budget}{" "}
          Budget
        </h2>
      </div>
    </Link>
  );
}

export default MyTripCardItem;
