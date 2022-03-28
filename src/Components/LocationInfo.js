import React from 'react';
import LocationInfoStyles from '../Styles/LocationInfoStyles.css'
import ResidentsList from './ResidentsList';

const LocationInfo = ( { location } ) => {

    // console.log(location)
    
    // let residentsNum = location;
    // console.log(location.length);
    

    return (
        <div className='location'>
            <section className='locationName'>
                <h3> {location.name} </h3>
            </section>

            <section className='data'>
                <p> <b> type: </b> { location.type } </p>
                <p> <b> dimension: </b> { location.dimension } </p>
                <p> <b> population: </b> { location.residents?.length } </p>
            </section>
        </div>
    );
};

export default LocationInfo;