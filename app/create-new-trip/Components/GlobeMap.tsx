"use client";

import React, { useEffect, useRef } from "react";
import {
  Globe,
  Vector,
  GlobusRgbTerrain,
  Entity,
  OpenStreetMap,
  IGlobeParams,
  LonLat,
} from "@openglobus/og";
import { useTripDetail } from "@/app/Provider";

const GlobeMap: React.FC = () => {
  const globeRef = useRef<HTMLDivElement | null>(null);
  //@ts-ignore
  const { tripDetail } = useTripDetail();
  const globusRef = useRef<any>(null);
  const pointLayerRef = useRef<any>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    // Base map
    const osm = new OpenStreetMap("https://tile.openstreetmap.org/", {
      attribution: "",
    });

    // Marker layer
    const pointLayer = new Vector("pointLayer");

    // Create globe
    const globus = new Globe({
      target: globeRef.current,
      name: "Earth",
      terrain: new GlobusRgbTerrain(null, { heightFactor: 5 }),
      layers: [osm, pointLayer],
      sun: { active: true },
      nightTextureCoefficient: 2.0, // adds day/night effect
      compass: false,
      credits: false,
      showDebugInfo: false,
      isPlanetAxisVisible: false,
      isLatLonGridVisible: false,
      coordinates: false,
      zoomControl: false,
      scaleControl: false,
    } as IGlobeParams);

    globusRef.current = globus;
    pointLayerRef.current = pointLayer;

    // Cleanup non-canvas UI
    const innerDiv = globeRef.current.querySelector(".og-inner");
    if (innerDiv) {
      Array.from(innerDiv.children).forEach((child) => {
        if (!(child instanceof HTMLCanvasElement)) {
          innerDiv.removeChild(child);
        }
      });
    }

    // Resize canvas
    const canvas = globeRef.current.querySelector("canvas");
    if (canvas) {
      canvas.style.height = "650px";
      canvas.style.width = "100%";
    }

    return () => {
      if (globeRef.current) globeRef.current.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    if (!tripDetail || !pointLayerRef.current) return;

    const layer = pointLayerRef.current;
    layer.clear();

    // ---- Hotels ----
    tripDetail.trip_plan?.hotels?.forEach((hotel: any, idx: number) => {
      const { latitude, longitude } = hotel.geo_coordinates || {};
      if (latitude != null && longitude != null) {
        const marker = new Entity({
          name: hotel.hotel_name || `Hotel ${idx + 1}`,
          lonlat: new LonLat(longitude, latitude),
          billboard: {
            src: "https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg",
            size: [28, 42],
            offset: [0, 21],
          },
        });
        layer.add(marker);
      }
    });

    // ---- Itinerary activities ----
    tripDetail.itinerary?.forEach((day: any) => {
      day.activities?.forEach((activity: any, idx: number) => {
        const { latitude, longitude } = activity.geo_coordinates || {};
        if (latitude != null && longitude != null) {
          const marker = new Entity({
            name: activity.place_name || `Activity ${idx + 1}`,
            lonlat: new LonLat(longitude, latitude),
            billboard: {
              src: "https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg",
              size: [24, 36],
              offset: [0, 18],
            },
          });
          layer.add(marker);
        }
      });
    });
  }, [tripDetail]);

  return (
    <div
      ref={globeRef}
      style={{
        width: "100%",
        height: "82vh",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    />
  );
};

export default GlobeMap;
