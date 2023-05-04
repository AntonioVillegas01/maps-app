import {PlacesProvider} from "./context";
import HomeScreen from "./screens/HomeScreen";


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_TOKEN


import './styles.css'
import MapProvider from "./context/map/MapProvider";

export const MapsApp = () => {

    return (
        <PlacesProvider>
            <MapProvider>
                <HomeScreen></HomeScreen>
            </MapProvider>
        </PlacesProvider>
    );
};

