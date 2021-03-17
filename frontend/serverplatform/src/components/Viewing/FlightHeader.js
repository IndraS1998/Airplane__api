import React from "react";
import "./flights.css";
import SearchBar from "./SearchBar";
import {FiRefreshCcw} from "react-icons/fi";
import {onSetString} from "../../store/core/authentication";

const FlightHeader = ({setFlights,blockedFlights,setLoading,setSearchNum}) =>{

    const searchNumbers = [10,25,50,100,1000];

    function onRefreshFlights(){
        setLoading(true);
        setFlights(blockedFlights);
        setLoading(false);
    }

    return(
        <div className="flightHeading center">
            <div className="boxSm">
                <select onChange={event => onSetString(event,setSearchNum)}>
                    {searchNumbers.map((number,index) =>(
                        <option value={number} key={index}>{number}</option>
                    ))}
                </select>
            </div>
            <p className="textInfo">plane</p>
            <p className="textInfo">departure</p>
            <p className="textInfo">arrival</p>
            <SearchBar setFlights={setFlights} blockedFlights={blockedFlights}/>
            <span className="editBtn" onClick={onRefreshFlights}><FiRefreshCcw/></span>
        </div>
    )
};

export default FlightHeader;