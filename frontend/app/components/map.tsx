'use client';

import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import { useMemo } from 'react';

// import maps api key from env
const NEXT_PUBLIC_GOOGLE_MAPS_KEY = process.env.GOOGLE_MAPS_API;

const MapComponent = () => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 49.26083, lng: -123.11389 }),
    []
  );

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      mapTypeId: "terrain",
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries as any,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      options={mapOptions}
      zoom={14}
      center={mapCenter}
      mapContainerStyle={{ width: '100%', height: '100vh' }}
      onLoad={() => console.log('Map Component Loaded...')}
    />
  );
};

export default MapComponent;
