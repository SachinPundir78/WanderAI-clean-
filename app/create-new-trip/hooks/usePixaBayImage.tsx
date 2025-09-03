"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export const usePixabayImage = (query: string) => {
  const [photoUrl, setPhotoUrl] = useState<string>("/placeholder2.jpg");

  useEffect(() => {
    if (!query) return;

    const fetchImage = async () => {
      try {
        const result = await axios.post("/api/pixabay-place-detail", {
          placeName: query,
        });

        if (result?.data && result.data.length > 0) {
          const randomIndex = Math.floor(Math.random() * result.data.length);
          setPhotoUrl(result.data[randomIndex].largeImageURL);
        } else {
          setPhotoUrl("/placeholder3.jpg");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
        setPhotoUrl("/placeholder2.jpg");
      }
    };

    fetchImage();
  }, [query]);

  return photoUrl;
};
