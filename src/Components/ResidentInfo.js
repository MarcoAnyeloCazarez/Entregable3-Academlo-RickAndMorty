import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ResidentInfoStyles from '../Styles/ResidentInfoStyles.css'

const ResidentInfo = ( { resident } ) => {

    const [ residentInfo, setResidentInfo ] = useState("")

    useEffect(() => {
        axios
            .get(resident)
            .then(answ => setResidentInfo(answ.data))
    },[resident])

    return (
        <div className='cardsContainer'>
            <div className='residentCard'>
                <section className='fotoResident' >
                    <img className='residentphoto' src={residentInfo.image} alt="imagen del residente" />
                </section>
                <section className='infoResident'>
                    <h3> {residentInfo.name} </h3>
                    <p> <b> {residentInfo.status} </b> </p>
                    <p> origin:  </p>
                    <p> <b> {residentInfo.origin?.name} </b> </p>
                    <p> episodes where appearr:  </p>
                    <p> <b> {residentInfo.episode?.length} </b> </p>
                </section>
            </div>
        </div>  
    );
};

export default ResidentInfo;