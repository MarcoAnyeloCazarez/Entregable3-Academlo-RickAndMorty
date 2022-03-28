import React from 'react';

const LocationInfo = ( { location } ) => {    

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