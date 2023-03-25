import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

// import * as React from 'react';
import './style.css';

export default function App() {

  // const map = L.map('map').setView([51.505, -0.09], 13);

  const [geojson, setGeoJSON] = useState(null);

  useEffect(() => {
    const fetchData:any = async () => {
      try {
        const response:any = await axios.get('https://www.localhost:3000/api/polygons');
        setGeoJSON(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  
  const getPolygonStyle = (feature:any) => {
    return {
      fillColor: feature.properties.fillColor,
      color: feature.properties.strokeColor,
      weight: feature.properties.strokeWidth,
      fillOpacity: feature.properties.fillOpacity,
    };
  };
  

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  {geojson && (
    <GeoJSON data={geojson} style={getPolygonStyle} />
  )}
</MapContainer>

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
