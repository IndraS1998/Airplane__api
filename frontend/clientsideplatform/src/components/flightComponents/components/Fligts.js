import React,{useContext} from "react";
import "../FlightList.css";
import SingleFlight from "./SingleFlight";
import {flightContext} from "../../../reducer/reducer";

const Flights= () =>{
    let {flights,alertType,setAlertType,alertOpen,setDetailFlight,setAlertOpen} = useContext(flightContext);

    return (
        <section className="flightContainer center mt-5">
            {flights.map((flight,index)=><SingleFlight key={index} flight={flight} departureAirport={flight.departureAirport}
                departureTime={flight.departureTime} destination={flight.destination} flightName={flight.flightName}
                price={flight.price} setDetailFlight={setDetailFlight} setAlertType={setAlertType} setAlertOpen={setAlertOpen}/>)}
        </section>
    )
};

export default Flights;