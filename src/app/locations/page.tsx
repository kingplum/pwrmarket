
"use client"
import type { Metadata } from 'next';
import Header from "./../Components/Header"
import Footer from "./../Components/Footer"
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  CircleF,
} from '@react-google-maps/api';
import { useMemo, useState, useEffect, useContext } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import "../maps.css";
import Data from './Data'
import { useGlobalContext } from '../context/UserLocationContext';

export default function Locations() {
  const [lat, setLat] = useState(39.76475998462829);
  const [lng, setLng] = useState(-101.18953488679679);
  const [locationList,setLocationList]=useState(Data.CategoryListData)
  const [selection, setSelection] = useState({});
  const [map,setMap]=useState<any | null>(null);

  const lengthList = locationList.features.length;

  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      gestureHandling: "cooperative",
      zoomControl: true,
    }),
    []
  );

  useEffect(()=>{  
    if(selection)
    { console.log('lat' in selection); 
    if ('lat' in selection && 'lng' in selection) {
      map.panTo({lat: selection.lat as number, lng: selection.lng as number});
    }

    }
  },[selection])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCyBQF87ZvsJgklNX4WQ4OSKuvSIlOlVMQ",
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const scrollFunction = (index: number) => {
    const elements = document.getElementsByClassName("store-list-card_root") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.border = "1px solid rgb(217 217 214)";
    }
    let e = document.getElementById("card-"+index);
    let f = document.getElementById("store-list-card_root-"+index);
    let h = document.getElementById("store-locator_store-search-pane");
    if(e&&f&&h){
      let g = e.parentElement;
      if(g){
        var now_top = e.getBoundingClientRect().top;
        var top = h.getBoundingClientRect().top;
        h.scrollTo({ 
          top: (h.scrollHeight-h.clientHeight)/(lengthList-1)*index, 
        // left: scrolling_parent.clientWidth / 2, 
          behavior: "smooth" 
        }); // tr.offsetTop;
        f.style.border = "1px solid #0063a9";
    }}
  }

  const ensure_visible=(element_id:number) =>
    {
        // adjust these two to match your HTML hierarchy
        const element_to_show  = document.getElementById('card-'+element_id);
        if(element_to_show){
          var scrolling_parent = element_to_show.parentElement;
        if(scrolling_parent){
        var top = scrolling_parent.getBoundingClientRect().top;
        var bot = scrolling_parent.getBoundingClientRect().bottom;

        var now_top = element_to_show.getBoundingClientRect().top;
        var now_bot = element_to_show.getBoundingClientRect().bottom;
        
        // console.log("Element: "+now_top+";"+(now_bot)+" Viewport:"+top+";"+(bot) );

        var scroll_by = 0;
        if(now_top < top)
            scroll_by = -(top - now_top);
        else if(now_bot > bot)
            scroll_by = now_bot - bot;
        if(scroll_by != 0)
        {
          element_to_show.scrollTo({ 
            top: scrolling_parent.clientHeight / 2, 
           // left: scrolling_parent.clientWidth / 2, 
            behavior: "smooth" 
          }); // tr.offsetTop;
        }
      }}
    }

  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="w-full mt-[120px] flex justify-center">
        <div className="w-[40%] max-lg:w-[40%] px-4">
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
        <div className="w-[60%] max-lg:w-[60%]">
          <GoogleMap
            options={mapOptions}
            zoom={10}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            onLoad={map=>setMap(map)}
          >
            {locationList.features.map((vitri,index) => {
              return (
                <MarkerF
                  key={index}
                  position={{lat: vitri.lat as number, lng: vitri.lng as number}}
                  title={vitri.properties.address}
                  //onLoad={map=>setMap(map)}
                  onClick={()=>{setSelection(vitri), scrollFunction(index)}}
                  icon=''
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
 
  });

  const [locationList,setLocationList]=useState(Data.CategoryListData)
  const [radioSearch, setRadioSearch] = useState("location")
  const [distance,setDistance]=useState<string[]>([])
  const {userLocation,setUserLocation}=useGlobalContext()
  const [currentLocation,setCurrentLocation]=useState({});
  const [currentLocationLoaded, setCurrentLocationLoaded] = useState(false);
  let arrDistance: Array<string>;
  arrDistance = [...distance];
  const onOptionChange = (e:React.ChangeEvent<any>) => {
    setRadioSearch(e.target.value)
  }

  useEffect(()=>{
    getUserLocation();
  },[])
  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      setCurrentLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
      setCurrentLocationLoaded(true)
    })
  }

  const calculateDistance = (lat1:number, lon1:number, lat2:number, lon2:number) => {
  
    const earthRadius = 6371; // in kilometers

    const degToRad = (deg:number) => {
      return deg * (Math.PI / 180);
    };

    const rlat1 = degToRad(lat1);
    const rlat2 = degToRad(lat2);

    const difflat = rlat2-rlat1;

    const difflon = degToRad(lon2 - lon1);

    const c = 2 * earthRadius * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));

    const distance = c;

    return distance.toFixed(2); // Return the distance with 2 decimal places
  };

  useEffect(()=>{
    if(currentLocationLoaded){
    locationList.features.map((item,index)=>(
      arrDistance.push(calculateDistance(
       item.lat as number,
       item.lng as number,
       Object.values(currentLocation)[0]?Object.values(currentLocation)[0]:Object.values(userLocation)[0],
       Object.values(currentLocation)[1]?Object.values(currentLocation)[1]:Object.values(userLocation)[1]
       ))
    ))}
    setDistance(arrDistance) 

    
   },[currentLocationLoaded])

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
        <legend className="py-4">Find a PWRmarket Near You</legend>
        <div className="flex gap-5 pb-3">
        <label className="flex cursor-pointer gap-2 text-size-4 font-bold leading-6">
          <input type="radio" name="searchMode" className="h-6 w-6 cursor-pointer accent-brand-red" value="location" checked={radioSearch === "location"}
        onChange={onOptionChange} /><span className="sr-only">Search </span>By Location
        </label>
        <label className="flex cursor-pointer gap-2 text-size-4 font-bold leading-6">
          <input type="radio" name="searchMode" className="h-6 w-6 cursor-pointer accent-brand-red" value="storeId" checked={radioSearch === "storeId"}
        onChange={onOptionChange} /><span className="sr-only">Search </span>By Store #
        </label>
        </div>
      </fieldset>
      <input
        value={value}
        className="autocompleteInput"
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder={radioSearch === "location"?"Enter an address, city, or zip code.":"Enter store #"}
      />

      {status === 'OK' && (
        <ul className="suggestionWrapper">{renderSuggestions()}</ul>
      )}

      <div className='store-locator_search-pane-container'>
        <div className='grid mg-top store-locator_store-search-pane' id='store-locator_store-search-pane'>
          <div></div>
          <ul className='store-locator_store-list-ul' >
          {locationList.features.map((item,index)=>(
            <li key={index} id={'card-'+index} className="store-locator_store-list-li">
              <a>
                <div className='store-list-card_root' id={'store-list-card_root-'+index}>
                  <div className='store-list-card_content'>
                    {item.properties.storeId}<br></br>
                    {item.properties.address}<br></br>
                    {item.properties.city}<br></br>
                    {distance[index]} Km
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 12" className="store-list-card_icon"><path d="M1.29.71a.996.996 0 0 0 0 1.41L5.17 6 1.29 9.88a.996.996 0 1 0 1.41 1.41L7.29 6.7a.996.996 0 0 0 0-1.41L2.7.7C2.32.32 1.68.32 1.29.71Z"></path></svg>
                </div>
              </a>
            </li>
                  
                  
              ))}
          </ul>
        </div>
      </div>
    </div>
  
  );
};
