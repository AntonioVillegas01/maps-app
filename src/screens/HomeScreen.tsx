import React from 'react';
import MapView from "../components/MapView";
import ReactLogo from "../components/ReactLogo";
import BtnMyLocation from "../components/BtnMyLocation";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
    return (
        <div>
            <MapView/>
            <ReactLogo/>
            <SearchBar></SearchBar>
            <BtnMyLocation></BtnMyLocation>
        </div>
    );
};

export default HomeScreen;
