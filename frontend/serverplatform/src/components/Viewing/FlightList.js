import React, {useContext, useEffect, useState} from "react";

import CheckLogin from "../home/CheckLogin";
import Footer from "../navigation/Footer";
import FlightContainer from "./FlightContainer";
import FlightHeader from "./FlightHeader";
import {flightContext} from "../../store/reducer";
import {fetchingFlightHandler} from "../../store/core/CRUD";
import "./flights.css";

const FlightList = () =>{
    const {logged,flightsSpaces,setLoading,setMessage,setModalOpen,setModalTrigger} = useContext(flightContext);
    const [searchNum,setSearchNum] = useState(10);
    const [actualFLights,setActualFlights] = useState(flightsSpaces);
    let blockedFlights = flightsSpaces;

    const modalObj = {errorStringSetter : setMessage,setModalState : setModalOpen,setModalTrigger};

    /*      $$$     will be added when fetching is done from the backend       $$$      */
    useEffect(()=>{
        async function onFetchFlights(){
            let data = await fetchingFlightHandler(modalObj);
            setActualFlights(data);
            blockedFlights = actualFLights;
        }
        onFetchFlights().then(r => console.log('ok'));
    },[flightsSpaces]);
    //editing the number of flights which can be viewed
    const viewFlights = actualFLights.slice(0 , searchNum);

    if(!logged){
        return <CheckLogin/>
    }
    return (
        <div>
            <section className="height100 column viewSection">
                <FlightHeader setFlights={setActualFlights} blockedFlights={blockedFlights}
                              setLoading={setLoading} setSearchNum={setSearchNum}
                />
                <FlightContainer flights={viewFlights} />
            </section>
            <Footer/>
        </div>
    )
};

export default FlightList;