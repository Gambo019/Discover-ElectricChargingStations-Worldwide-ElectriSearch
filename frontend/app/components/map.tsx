'use_client'

import React, { useRef, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly',
      });

      await loader.load();

      const { Map } = await loader.importLibrary('maps')

      const position = {
        lat: 49.283056,
        lng: -123.116226,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: 'MY_NEXTJS_MAPID',
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
    };
    console.log(process.env.NEXT_PUBLIC_MAPS_API_KEY as string);
    

    initMap();
  }, []);

  return <div style={{ height: '600px' }} ref={mapRef}></div>;
}