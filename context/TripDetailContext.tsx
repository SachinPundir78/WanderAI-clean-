import { TripInfo } from "@/app/create-new-trip/Components/ChatBox";
import React, { createContext } from "react";

export type TripContextType = {
    tripDetail: TripInfo | null,
    setTripDetail: React.Dispatch<React.SetStateAction<TripInfo | null>>;
}

export const TripDetailContext = createContext<TripContextType|undefined>(undefined);