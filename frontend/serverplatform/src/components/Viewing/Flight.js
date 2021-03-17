import React,{useContext} from "react";
import "./flights.css";
import {flightContext} from "../../store/reducer";
import {TiTickOutline} from "react-icons/ti";
import {MdModeEdit} from "react-icons/md";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {openItem} from "../../store/core/Utility";


const Flight = ({values}) =>{
    const {air_flight,departure,arrival,booked} = values;
    const {setModalOpen,setModalTrigger,setModalFlight} = useContext(flightContext);

    return(
        <div className="flight center" onClick={()=>openItem(setModalOpen,setModalTrigger,setModalFlight,values,false)}>
            <span className="editBtn" onClick={()=>openItem(setModalOpen,setModalTrigger,setModalFlight,values,false)}>
                <MdModeEdit/>
            </span>
            <span className="deleteBtn" onClick={()=>openItem(setModalOpen,setModalTrigger,setModalFlight,values,true)}>
                <RiDeleteBin5Fill/>
            </span>
            <p className="flightText">{air_flight}</p>
            <p className="secondaryFlightText">{departure}</p>
            <p className="secondaryFlightText">{arrival}</p>
            {booked  &&  <p className="flightText"><TiTickOutline/></p>}
        </div>
    )
};

export default Flight;