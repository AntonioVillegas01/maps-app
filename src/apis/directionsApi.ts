import axios from "axios";


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives:false,
        geometries:'geojson',
        language:'es',
        overview:'simplified',
        steps:false,
        access_token: import.meta.env.VITE_MAP_BOX_TOKEN
    }
})

export default directionsApi;

