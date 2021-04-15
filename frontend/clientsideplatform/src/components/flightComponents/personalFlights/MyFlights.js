import React,{useContext} from "react";
import "./MyFlights.css";
import Flight from "./components/Flight";
import {flightContext} from "../../../reducer/reducer";

export default function MyFlights(){
    let {logged,personalFlights} = useContext(flightContext);
    if(!logged){
        return(
            <section className="flight-section center">
                login please
            </section>
        )
    }
    if(!personalFlights){
        return(
            <section className="center">
                no flights yet
            </section>
        )
    }
    return(
        <section className="flight-section">
            <section className="main-section center">
                {personalFlights.map((flight,index)=> <Flight key={index} flightName={flight.flightName} seatNumber={flight.seatNumber}
                                                      destination={flight.destination} departureTime={flight.departureTime}
                                                      departureAirport={flight.departureAirport} arrival={flight.arrival}
                />)}
            </section>
            <section>
                <aside className="aside-section col">
                    <h3 className="aside-section-header">OUR SUGGESTION</h3>
                    <div className="border-bottom-grey mt-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                            . Deserunt dolores expedita magni perspiciatis quo vel.</p>
                    </div>
                </aside>
                <aside className="aside-section col">
                    <h3 className="aside-section-header">want a benefit package?</h3>
                    <div className="border-bottom-grey mt-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                            . Deserunt dolores expedita magni perspiciatis quo vel.</p>
                    </div>
                </aside>
            </section>
        </section>
    )
}