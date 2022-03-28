import React from 'react';
import ResidentInfo from './ResidentInfo';
import ResidentsListStyles from '../Styles/ResidentsListStyles.css'

const ResidentsList = ( { residents } ) => {

    //  size = residents.length;
    // console.log(location.residents)
    // let toMap = location.residents
    
    return (
        <div className="residentsList"> 
            {
                residents.map(resident => (
                    <li key={resident}>
                        {/* <h3> {resident} </h3> */}
                        < ResidentInfo resident = {resident} key={resident}  />
                    </li>
                ) )
                }
        </div>
    ) 
};

export default ResidentsList;