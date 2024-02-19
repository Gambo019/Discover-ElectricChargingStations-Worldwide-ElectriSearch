import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

interface MapComponentProps {
  apiKey: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ apiKey }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components, like markers, info windows, etc. will go here. */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;