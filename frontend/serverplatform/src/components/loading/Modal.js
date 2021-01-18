import React,{useContext,useState} from "react";

import {flightContext} from "../../store/reducer";
import "./modal.css";
import {deleteFlightHandler,onEditPrice} from "../../store/core/CRUD";
import {FaLocationArrow} from "react-icons/fa";
import {TiTick} from "react-icons/ti";
import {ImCancelCircle} from "react-icons/im";
import {onSetString} from "../../store/core/authentication";

const Modal = () =>{
    const {modalTrigger,setLoading,setFlightSpaces,modalOpen,
        flightsSpaces,setModalOpen,message,modalFlight,setModalTrigger} = useContext(flightContext);

    const [deleted,setDeleted] = useState(false);
    const [price,setPrice] = useState("");

    function onDelete(){
        setLoading(true);
        const data = deleteFlightHandler(modalFlight.id,flightsSpaces);
        setFlightSpaces(data);
        setDeleted(true);
        setLoading(false);
    }

    if(!modalOpen){
        return null
    }

    if(modalTrigger === "error"){
        return(
            <div className="modal column">
                <div className="textSection column">
                    <p className="modalText">{message}</p>
                    <p className="btnInnerEmpty" onClick={()=> {
                        setModalOpen(false);
                    }}>
                        Close
                    </p>
                </div>
            </div>
        )
    }
    if(modalTrigger === "delete"){
        return(
            <div className="modal center">
                <div className="deleteSection column">
                    <p className="deleteText">are you sure you want to delete this flight ticket?</p>
                    <p className="deleteTitleModal ">{modalFlight.planeName}</p>
                    <div className="center">
                        <p className="deleteTextInfo">seat number</p>
                        <p className="deleteText">{modalFlight.seatNumber}</p>
                    </div>
                    <div className="center">
                        {!deleted && <p className="btnDanger" onClick={onDelete}>DELETE</p>}
                        <p className="darkBtnEmpty" onClick={()=>{
                            setModalOpen(false);
                            setDeleted(false);
                            setModalTrigger(null);
                        }}>CLOSE</p>
                    </div>
                    <p className="deleteTextInfo">{deleted && "successfully deleted"}</p>
                </div>
            </div>
        )
    }
    return(
        <div className="modal center">
            <div className="detailModal column">
                <p className="titleMain">{modalFlight.planeName}</p>
                <div className="center">
                    <div className="column ">
                        <p className="dateEmphasis">departure</p>
                        <p className="date">{modalFlight.airport}</p>
                        <p className="date">{modalFlight.departureTime}</p>
                    </div>
                    <div>
                        <p className="dateEmphasis"><FaLocationArrow size={32}/></p>
                    </div>
                    <div className="column">
                        <p className="dateEmphasis">arrival</p>
                        <p className="date">{modalFlight.destination}</p>
                        <p className="date">{modalFlight.arrivalTime}</p>
                    </div>
                </div>
                <div className="center">
                    <p className="dateEmphasis">category</p>
                    <p className="date">{modalFlight.category}</p>
                </div>
                <div className="center">
                    <p className="dateEmphasis">booked?</p>
                    <p className="date">{modalFlight.Booked}</p>
                    {modalFlight.Booked ?
                        <p className="dateEmphasis"><TiTick size={25}/></p> :
                        <p className="dateEmphasisRed"><ImCancelCircle size={25}/></p>}
                </div>
                <div className="center">
                    <p className="dateEmphasis">price : {modalFlight.price}</p>
                    <input type="text" value={price} placeholder="price" onChange={event => onSetString(event,setPrice)}/>
                    <p className="btnMain" onClick={()=>{
                        if(price.length < 1){
                            return
                        }
                        setLoading(true);
                        onEditPrice(modalFlight,price);
                        setLoading(false);
                    }}>
                        Edit
                    </p>
                </div>
                <p className="btnInnerEmpty" onClick={()=>setModalOpen(false)}>CLOSE</p>
            </div>
        </div>
    )
};

export default Modal;