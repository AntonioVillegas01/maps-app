import React, {ChangeEvent, useContext, useRef} from 'react';
import {PlacesContext} from "../context";
import SearchResults from "./SearchResults";

const SearchBar = () => {

    // @ts-ignore
    const debounceRef = useRef<NodeJS.Timeout>();

    const {searchPlacesByTerm} = useContext(PlacesContext);

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if(debounceRef.current){
            clearTimeout(debounceRef.current)
        }
        debounceRef.current = setTimeout(()=>{
            // console.log('DEbounced', event.target.value)
            searchPlacesByTerm(event.target.value)
        },1000)
    }

    return (
        <div className="search-container">
            <input type="text"
                   className="form-control"
                   placeholder="Buscar lugar..."
                   onChange={ onQueryChanged}
            />
            <SearchResults></SearchResults>
        </div>
    );
};

export default SearchBar;
