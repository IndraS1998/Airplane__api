import React,{useState,useContext} from "react";
import {Link} from "react-router-dom"

import DatePicker from "react-datepicker";
import {flightContext} from "../../store/reducer";
import "./create.css";
import "react-datepicker/dist/react-datepicker.css";
import {flightCreationHandler} from "../../store/core/CRUD";

const CreateFlight = () =>{
    const {onSetString,setLoading,activeWorker,flightsSpaces,setFlightSpaces,logged} = useContext(flightContext);
    const [departureDate,setDepartureDate] = useState(new Date());
    const [arrivalDate,setArrivalDate] = useState(new Date());
    const [price,setPrice] = useState("");
    const [plane,setPlane] = useState("");
    const [airport,setAirport] = useState("Yaounde/Nsimalen");
    const [category,setCategory] = useState("A");

    const airportList = ["Yaounde/Nsimalen","Douala","Garoua"];
    const categoryList = ["A","B","C"];

    const onCreateFlight = () =>{
        //restructure the data
        let timeObj = {departureTime : departureDate.toLocaleString(), arrivalTime : arrivalDate.toLocaleString()};
        let flightObj = {price,category,planeName : plane,airport};
        let {name,id,department} = activeWorker;
        let workerObj = {cname : name,cid : id,cdept : department};
        //run save function
        let data = flightCreationHandler(timeObj,flightObj,workerObj,setLoading);
        //validate return
        if(!data){
            console.log("here :)");
            setLoading(false);
            return
        }
        setLoading(true);
        setFlightSpaces([...flightsSpaces,data]);
        console.log("success");
        //return all flight
        setLoading(false);
    };

    if(!logged){
        return(
            <section className="height100 center">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <p className="loginHead">please log in</p>
                </Link>
            </section>
        )
    }

    return(
        <section className="height100 column">
            <form onSubmit={event => {
                event.preventDefault();
                onCreateFlight();
            }}>
                <p className="btnMain" onClick={onCreateFlight}>
                    create Flight
                </p>
                <div className="creationSection column">
                    <div>
                        <label >Departure:</label>
                        <DatePicker selected={departureDate} showTimeSelect onChange={date => setDepartureDate(date)} dateFormat="Pp"/>
                    </div>
                    <div>
                        <label >Arrival:</label>
                        <DatePicker selected={arrivalDate} onChange={date => setArrivalDate(date)} showTimeSelect dateFormat="Pp"/>
                    </div>
                    <input type="text" value={price} onChange={event => onSetString(event,setPrice)} placeholder="enter price"/>
                    <div className="box">
                        <label >category: </label>
                        <select onChange={e =>onSetString(e,setCategory)} >
                            {categoryList.map((category,index) =>(
                                <option value={category} key={index}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <input type="text" value={plane} onChange={event => onSetString(event,setPlane)} placeholder="enter plane number"/>
                    <div className="box">
                        <label>Airport: </label>
                        <select onChange={event => onSetString(event,setAirport)}>
                            {airportList.map((airport,index) =>(
                                <option value={airport} key={index}>{airport}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
        </section>
    )
};

export default CreateFlight;