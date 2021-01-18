import React from "react";
import Flight from "./Flight";

const FlightContainer = ({flights}) =>{
    if(flights.length < 1){
        return(
            <section className="center">
                <p className="textSmallGrey">No flights meet your requests</p>
            </section>
        )
    }
    return(
        <>
            {flights.map(flight =>(
                <Flight key={flight.id} values={flight} />
            ))}
        </>
    )
};

export default  FlightContainer;