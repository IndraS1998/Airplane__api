import React,{useContext,useState} from "react";

import CheckLogin from "../home/CheckLogin";
import SearchBar from "./SearchBar";
import FlightContainer from "./FlightContainer";
import FlightHeader from "./FlightHeader";
import {flightContext} from "../../store/reducer";
import "./flights.css";

const FlightList = () =>{
    const {logged,flightsSpaces,setFlightSpaces,setLoading} = useContext(flightContext);
    const [searchNum,setSearchNum] = useState(10);
    const blockedFlights = flightsSpaces;

    /*      $$$     will be added when fetching is done from the backend       $$$
    useEffect(()=>{});
    blocked flights will be set here
    */
    //editing the number of flights which can be viewed
    const viewFlights = flightsSpaces.slice(0 , searchNum);

    if(!logged){
        return <CheckLogin/>
    }
    return (
        <section className="height100 center">
            <div className="searchBarSection">
                <SearchBar setFlights={setFlightSpaces} setLoading={setLoading} blockedFlights={blockedFlights}/>
            </div>
            <div className="column viewSection" >
                <FlightHeader setFlights={setFlightSpaces} blockedFlights={blockedFlights}
                              setLoading={setLoading} setSearchNum={setSearchNum}/>
                <FlightContainer flights={viewFlights} />
            </div>
        </section>
    )
};

export default FlightList;