
"use client"
import type { Metadata } from 'next';
import Header from "./../Components/Header"
import { Banner } from "../../Components/Banner"
import Menu from "./../Components/OutMenu"
import Buy from "./../Components/Buy"
import Deals from "./../Components/Deals"
import Reward from "./../Components/Reward"
import Download from "./../Components/Download"
import Career from "./../Components/Career"
import Footer from "./../Components/Footer"
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  CircleF,
} from '@react-google-maps/api';
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
  const [lat, setLat] = useState(33.8522875);
  const [lng, setLng] = useState(-118.4379945);

  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);
  const vitris = [
    {id: 1, title: "PM #2052", lat: 33.9992401, lng: -117.6650872},
    {id: 2, title: "PM GO #2017", lat: 34.0773157, lng: -117.6926479},
    {id: 3, title: "PM GO #2037", lat: 33.5259669, lng: -117.7142425},
    {id: 4, title: "PM GO #1033", lat: 33.8396226, lng: -117.8895408},
    {id: 5, title: "PM GO #2036", lat: 33.603619, lng: -117.8754979},
    {id: 6, title: "PM GO #2003", lat: 33.8242905, lng: -118.0304123},
  ];

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
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="w-full h-[500px] max-md:h-[264px] relative overflow-hidden mt-[120px] flex justify-center">
        <div className="w-[50%] h-full max-lg:w-[40%] px-[20px] flex items-center max-md:w-full">
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
        <div className="w-[50%] h-full max-lg:w-[60%] flex items-center max-md:w-full">
          <GoogleMap
            options={mapOptions}
            zoom={8}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: '100%', height: '700px' }}
            onLoad={(map) => console.log('Map Loaded')}
          >
            {vitris.map(vitri => {
              return (
                <MarkerF
                  key={vitri.id}
                  position={{ lat: vitri.lat, lng: vitri.lng}}
                  title={vitri.title}
                  onLoad={() => console.log('Marker Loaded')}
                />
              )
            })}
          </GoogleMap>
        </div>
      </div>
      <Footer />
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
      <fieldset>
        <legend className="py-5">Find a PWRmarket Near You</legend>
        <div className="flex gap-5 pb-3">
        <label className="flex cursor-pointer gap-2 text-size-4 font-bold leading-6">
          <input type="radio" name="searchMode" className="h-6 w-6 cursor-pointer accent-brand-red" value="location" checked /><span className="sr-only">Search </span>By Location
        </label>
        <label className="flex cursor-pointer gap-2 text-size-4 font-bold leading-6">
          <input type="radio" name="searchMode" className="h-6 w-6 cursor-pointer accent-brand-red" value="storeId" /><span className="sr-only">Search </span>By Store #
        </label>
        </div>
      </fieldset>
      <input
        value={value}
        className="autocompleteInput"
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter an address, city, or zip code."
      />

      {status === 'OK' && (
        <ul className="suggestionWrapper">{renderSuggestions()}</ul>
      )}
    </div>
  );
};