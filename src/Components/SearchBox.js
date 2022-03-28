import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const SearchBox = ( { setLocation, setResidents } ) => {

    const [ locationId, setlocationId ] = useState("Type a location id") 

    const searchId = () => {
        // se hace la peticion con a la API con el nuevo ID
        axios
        .get(`https://rickandmortyapi.com/api/location/${locationId}`)
        .then(answ => { 
            setLocation(answ.data)
            setResidents(answ.data.residents)
        })
    }


    return (
        <div className='searchBox'>
            <input 
                type="text"
                value={locationId}
                onChange={(e) => setlocationId(e.target.value)}
            />
            <button onClick={searchId} >Search</button>  
        </div>
    );
};

export default SearchBox;