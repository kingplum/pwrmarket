import type { Metadata } from 'next'
import { useLoadScript } from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo } from 'react';
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Find A Locations | Power Market',
  description: 'Everything you need right around the corner',
}

export default function Locations() {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCyBQF87ZvsJgklNX4WQ4OSKuvSIlOlVMQ' as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <GoogleMap
      options={mapOptions}
      zoom={14}
      center={mapCenter}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{ width: '800px', height: '800px' }}
      onLoad={(map) => console.log('Map Loaded')}
    >
      <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
    </GoogleMap>
  )
}
