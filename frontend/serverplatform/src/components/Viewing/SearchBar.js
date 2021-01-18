import React,{useState} from "react";

import "./flights.css";
import DatePicker from "react-datepicker";
import {filterFlight} from "../../store/core/CRUD";
import {onSetString} from "../../store/core/authentication";

const SearchBar = ({setFlights,setLoading,blockedFlights}) =>{
    const [departureDate,setDepartureDate] = useState(null);
    const [arrivalDate,setArrivalDate] = useState(null);
    const [searchString,setSearchString] = useState("");

    const onFilterFlight = () =>{
        setFlights(blockedFlights);
        let criteriaObj = {};
        let searchBy;
        //verification
        if(!(arrivalDate && departureDate) && searchString.length < 1){
            return
        }
        if(arrivalDate < departureDate ){
            alert ("wrong date");
            return null
        }
        //constitute req components

        if(searchString.length > 0 && !(arrivalDate && departureDate)){
            searchBy = "String";
            criteriaObj = {searchString};
            console.log("string");
        }
        if(searchString.length < 1 && (arrivalDate && departureDate)){
            searchBy = "Date";
            console.log("date");
            criteriaObj = {
                departure : departureDate.toLocaleString(),
                arrival : arrivalDate.toLocaleString()
            }
        }
        if(searchString.length > 0 && (arrivalDate && departureDate)){
            searchBy = "Both";
            criteriaObj = {
                departure : departureDate.toLocaleString(),
                arrival : arrivalDate.toLocaleString(),searchString
            }
        }
        const data = filterFlight(blockedFlights,criteriaObj,searchBy,setLoading);
        setFlights(data);
    };

    return(
        <div className="column">
            <p className="searchBarTitle">Search section</p>
            <input className="searchBar" type="text" onChange={event => onSetString(event,setSearchString)}
                   placeholder="plane number,category, seat number etc" value={searchString}/>
            <label >Departure:</label>
            <DatePicker showTimeSelect  dateFormat="Pp" selected={departureDate} onChange={date => setDepartureDate(date)}/>
            <label >Arrival:</label>
            <DatePicker  showTimeSelect dateFormat="Pp" selected={arrivalDate} onChange={date => setArrivalDate(date)}/>
            <p className="btnInnerEmpty" onClick={onFilterFlight}>Search</p>
        </div>
    )
};

export default SearchBar;