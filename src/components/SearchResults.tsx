import React, {useContext, useState} from 'react';
import {MapContext, PlacesContext} from "../context";
import LoadingPlaces from "./LoadingPlaces";
import {Feature} from "../interfaces/places";

const SearchResults = () => {

    const {places, isLoadingPlaces, userLocation} = useContext(PlacesContext);
    const {map, getRouteBetweenPoints} = useContext(MapContext);

    const [activeId, setActiveId] = useState('');

    if(isLoadingPlaces) {
        return <LoadingPlaces/>
    }

    if(places.length === 0){
        return <></>
    }


    const onPlaceClick = (place:Feature)=> {
        setActiveId(place.id)
        const [lng,lat] = place.center
        map?.flyTo({
            zoom: 14,
            center: [lng,lat]
        })
    }

    const getRoute = (place:Feature)=> {

        if(!userLocation)return;

        const [lng,lat] = place.center
        getRouteBetweenPoints(userLocation, [lng,lat] )
    }


    return (
        <ul className="list-group mt-3">

            {
                places.map(place => (
                    <li onClick={()=>onPlaceClick(place)}
                        key={place.id} className={`list-group-item list-group-item-action pointer ${activeId === place.id ? 'active' : ''}`}>
                        <h6>{place.text_es}</h6>
                        <p className="" style={{fontSize: "12px"}}>
                            {place.place_name}
                        </p>
                        <button
                            onClick={ ()=>getRoute(place)}
                            className={`btn btn-sm ${activeId === place.id ? 'btn-outline-light' :'btn-outline-primary'}`}>
                            Direcciones
                        </button>
                    </li>
                ))
            }

        </ul>
    );
};

export default SearchResults;
