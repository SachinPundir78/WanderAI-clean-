"use client";
import Header from "./Components/Header";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../context/UserDetailContext";
import Footer from "./Components/Footer";
import { TripContextType, TripDetailContext } from "@/context/TripDetailContext";
import { TripInfo } from "./create-new-trip/Components/ChatBox";


function Provider ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const CreateUser = useMutation(api.user.CreateNewUser);
  const [userDetail, setUserDetail] = useState<any>();
  const [tripDetail, setTripDetail] = useState<TripInfo|null>(null);
  const { user } = useUser();

  useEffect(() => {
    user&&CreateNewUser();
  }, [user]);

  const CreateNewUser = async () => {
    if (user) {
      const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imageURL: user?.imageUrl,
        name: user?.fullName ?? ''
      });
      setUserDetail(result);
    }
  }

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <TripDetailContext.Provider value={{ tripDetail, setTripDetail }}>
        <div>
           <Header />
           {children}
           {/* <Footer /> */}
        </div>
      </TripDetailContext.Provider>
      </UserDetailContext.Provider>
  );
};

export default Provider;

export const useUserDetail = () => {
  return useContext(UserDetailContext);
};

export const useTripDetail = (): TripContextType | undefined => {
  return useContext(TripDetailContext);
};
