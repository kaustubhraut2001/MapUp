import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { point } from 'turf';

const Map = ({ coordinates }) => {
  // console.log(coordinates);

  const turfCoordinates = [coordinates[1], coordinates[0]];
  console.log(turfCoordinates);
  const turfPoint = point(coordinates);
  console.log(turfPoint);

  return (
    <MapContainer center={coordinates} zoom={6} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

    </MapContainer>
  );
};

export default Map;
