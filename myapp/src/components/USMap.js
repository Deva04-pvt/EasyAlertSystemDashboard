import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function USMap() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <MapContainer
        center={[37.0902, -95.7129]} // Center of the United States
        zoom={4} // Initial zoom level
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default USMap;
