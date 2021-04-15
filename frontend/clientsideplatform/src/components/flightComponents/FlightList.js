import React,{useContext} from 'react';
import "./FlightList.css";
import {flightContext} from "../../reducer/reducer";
import Flights from "./components/Fligts";
import SortBar from "./components/SortBar";

const FlightList = () =>{
    const {flights} = useContext(flightContext);

    if(!flights){
        return(
            <section className="center section-80">
                oop! could not fetch flights
            </section>
        )
    }
    return(
        <section className="main-section col">
            <SortBar/>
            <Flights/>
        </section>
    )
};

export default FlightList;