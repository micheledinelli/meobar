import React, { useRef, useEffect, useState } from 'react'
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(11.2963199);
  const [lat] = useState(44.7433668);
  const [zoom] = useState(12);
  const [API_KEY] = useState(import.meta.env.VITE_SECRET_API_KEY);

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([11.2963199,44.7433668])
      .addTo(map.current);

  }, [API_KEY, lng, lat, zoom]);

  return (
    <div className="w-full h-full md: relative bg-green-300">
      <div ref={mapContainer} className=" w-full h-full md: relative" />
    </div>
  );
}