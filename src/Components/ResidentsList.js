import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ( { residents } ) => {
   
    return (
        <div className="residentsList"> 
            {
                residents.map(resident => (
                    <li key={resident}>
                        < ResidentInfo resident = {resident} key={resident} />
                    </li>
                ) )
                }
        </div>
    ) 
};

export default ResidentsList;