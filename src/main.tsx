import React from 'react'
import ReactDOM from 'react-dom/client'
import {MapsApp} from "./MapsApp";

if(!navigator.geolocation){
    alert('Permitir Geolocalizacion')
    throw new Error('Permitir Geolocalizacion')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
