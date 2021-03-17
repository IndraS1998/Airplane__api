import React,{useState,useContext} from "react";
import Footer from "../navigation/Footer";

import DatePicker from "react-datepicker";
import {flightContext} from "../../store/reducer";
import CheckLogin from "../home/CheckLogin";
import "./create.css";
import "react-datepicker/dist/react-datepicker.css";
import {flightCreationHandler} from "../../store/core/CRUD";

const airportList = ["Yaounde/Nsimalen","Douala","Garoua"];
const destinationPort = ["Yaounde/Nsimalen","Douala","Garoua","Adis-Ababa/Ethiopia","Lyon/France","Bruxells/Belgium"];
const categoryList = ["Business","Economic"];

const CreateFlight = () =>{
    const {onSetString,setLoading,setModalTrigger,setMessage,
        activeWorker,setModalOpen,logged} = useContext(flightContext);
    const [departureDate,setDepartureDate] = useState(new Date());
    const [arrivalDate,setArrivalDate] = useState(new Date());
    const [price,setPrice] = useState("");
    const [plane,setPlane] = useState("");
    const [destination,setDestination] = useState(destinationPort[0]);
    const [seatNumber,setSeatNumber] = useState("");
    const [airport,setAirport] = useState(airportList[0]);
    const [category,setCategory] = useState(categoryList[0]);


    function onClear(){
        setPrice("");
        setPlane("");
        setSeatNumber("");
        setCategory(categoryList[0]);
        setDestination(destinationPort[0]);
        setAirport(airportList[0])
    }

    const onCreateFlight = async () =>{
        //restructure the data
        let errorObj = {setMessage,setModalOpen,setModalTrigger};
        let timeObj = {departureTime : departureDate, arrivalTime : arrivalDate};
        let flightObj = {price,category,planeName : plane,airport,destination,seatNumber};
        let {name,id,department} = activeWorker;
        let workerObj = {cname : name,cid : id,cdept : department};

        //run save function
        let data = await flightCreationHandler(timeObj,flightObj,workerObj,setLoading,errorObj);
        if(data){onClear()}
    };

    if(!logged){
        return(
            <CheckLogin/>
        )
    }

    return(
        <section>
            <div className="height100 column">
                <div className="column" >
                    <div className="creationSection center">
                        <div className="column">
                            <p className="textSmallGrey">departure</p>
                            <DatePicker selected={departureDate} showTimeSelect onChange={date => setDepartureDate(date)} dateFormat="Pp"/>
                            <div className="box">
                                <select onChange={event => onSetString(event,setAirport)}>
                                    {airportList.map((airport,index) =>(
                                        <option value={airport} key={index}>{airport}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="column">
                            <input type="text" value={price} onChange={event => onSetString(event,setPrice)} placeholder="enter price"/>
                            <input type="text" value={seatNumber} onChange={event => onSetString(event,setSeatNumber)} placeholder="enter seat number"/>
                            <input type="text" value={plane} onChange={event => onSetString(event,setPlane)} placeholder="enter plane number"/>
                            <p className="textSmallGrey">Category</p>
                            <div className="box">
                                <select onChange={e =>onSetString(e,setCategory)} >
                                    {categoryList.map((category,index) =>(
                                        <option value={category} key={index}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="columnStart">
                            <p className="textSmallGrey">Destination</p>
                            <DatePicker selected={arrivalDate} onChange={date => setArrivalDate(date)} showTimeSelect dateFormat="Pp"/>
                            <div className="box">
                                <select onChange={event => onSetString(event,setDestination)}>
                                    {destinationPort.map((airport,index) =>(
                                        <option value={airport} key={index}>{airport}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className="btnMain" onClick={onCreateFlight}>
                        create Flight
                    </button>
                </div>
            </div>
            <Footer />
        </section>
    )
};
{/*







*/}

export default CreateFlight;