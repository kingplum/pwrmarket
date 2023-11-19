
"use client"
import type { Metadata } from 'next';
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  CircleF,
} from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import "../maps.css";

// export const metadata: Metadata = {
//   title: 'Find A Locations | Power Market',
//   description: 'Everything you need right around the corner',
// }

export default function Locations() {
  const [lat, setLat] = useState(27.672932021393862);
  const [lng, setLng] = useState(85.31184012689732);

  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCyBQF87ZvsJgklNX4WQ4OSKuvSIlOlVMQ",
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div class="row">
       <div class="col-md-5 col-lg-4">
        {/* render Places Auto Complete and pass custom handler which updates the state */}
        <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address: address }).then((results) => {
              const { lat, lng } = getLatLng(results[0]);

              setLat(lat);
              setLng(lng);
            });
          }}
        />
      </div>
      <div class="col-md-7 col-lg-8">
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          onLoad={(map) => console.log('Map Loaded')}
        >
          <MarkerF
            position={mapCenter}
            onLoad={() => console.log('Marker Loaded')}
          />

          {[1000, 2500].map((radius, idx) => {
            return (
              <CircleF
                key={idx}
                center={mapCenter}
                radius={radius}
                onLoad={() => console.log('Circle Load...')}
                options={{
                  fillColor: radius > 1000 ? 'red' : 'green',
                  strokeColor: radius > 1000 ? 'red' : 'green',
                  strokeOpacity: 0.8,
                }}
              />
            );
          })}
        </GoogleMap>
      </div>
    </div>
  );
};

const PlacesAutocomplete = ({
  onAddressSelect,
}: {
  onAddressSelect?: (address: string) => void;
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: 'us' } },
    debounce: 300,
    cache: 86400,
  });

  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className="autocompleteWrapper">
      <input
        value={value}
        className="autocompleteInput"
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="123 Stariway To Heaven"
      />

      {status === 'OK' && (
        <ul className="suggestionWrapper">{renderSuggestions()}</ul>
      )}
    </div>
  );
};