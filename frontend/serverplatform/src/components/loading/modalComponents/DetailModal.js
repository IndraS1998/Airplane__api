import React from "react";
import "../modal.css";
import {onSetString} from "../../../store/core/authentication";
import {onEditPrice} from "../../../store/core/CRUD";
import {FaLocationArrow} from "react-icons/fa";
import {TiTick} from "react-icons/ti";
import {ImCancelCircle} from "react-icons/im";

const DetailModal = ({modalFlight,price,setLoading,setPrice,setModalOpen,errorObj,getFlights}) =>{
    return(
        <div className="modal center">
            <div className="detailModal column">
                <p className="titleMain py-5">{modalFlight.air_flight}/{modalFlight.air_flight_number}</p>
                <div className="center py-5">
                    <div className="column ">
                        <p className="dateEmphasis py-1">departure</p>
                        <p className="date py-1">{modalFlight.airport}</p>
                        <p className="date py-1">{modalFlight.departure}</p>
                    </div>
                    <div>
                        <p className="dateEmphasis"><FaLocationArrow size={32}/></p>
                    </div>
                    <div className="column">
                        <p className="dateEmphasis">arrival</p>
                        <p className="date">{modalFlight.destination}</p>
                        <p className="date">{modalFlight.arrival}</p>
                    </div>
                </div>
                <div className="center">
                    <p className="dateEmphasis">category</p>
                    <p className="date">{modalFlight.category}</p>
                </div>
                <div className="center">
                    <p className="dateEmphasis">booked?</p>
                    <p className="date">{modalFlight.booked}</p>
                    {modalFlight.booked ?
                        <p className="dateEmphasis"><TiTick size={25}/></p> :
                        <p className="dateEmphasisRed"><ImCancelCircle size={25}/></p>}
                </div>
                <div className="center">
                    <p className="dateEmphasis">price : {modalFlight.price} XAF</p>
                    <input type="text" value={price} placeholder="price" onChange={event => onSetString(event,setPrice)}/>
                    <p className="btnMain" onClick={async ()=>{
                        if(price.length < 1){
                            return
                        }
                        await onEditPrice(modalFlight,price,errorObj,setLoading);
                        await getFlights();
                    }}>
                        Edit
                    </p>
                </div>
                <p className="btnInnerEmpty" onClick={()=>{
                    setPrice("");
                    setModalOpen(false);
                }}>
                    CLOSE
                </p>
            </div>
        </div>
    )
};

export default DetailModal;