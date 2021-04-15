import React from "react";
import "../MyFlights.css";

export default function Flight({flightName,seatNumber,departureAirport,destination,departureTime,arrival}){
    return(
        <section className="single-flight ">
            <div className="single-flight-head-section ">
                <h3 className="aside-section-header ml-2">{flightName}</h3>
            </div>
            <div className="col mt-3">
                <p>{departureTime}</p> TO <p>{arrival}</p>
                <div className="buttonDangerPrimary2 mt-3">Drop </div>
            </div>
        </section>
    )
}