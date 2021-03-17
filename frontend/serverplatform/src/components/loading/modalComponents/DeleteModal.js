import React from "react";
import "../modal.css";

const DeleteModal = ({modalFlight,setModalOpen,setModalTrigger,onDelete}) =>{
    return(
        <div className="modal center">
            <div className="deleteSection column">
                <p className="deleteText">are you sure you want to delete this flight ticket?</p>
                <p className="deleteTitleModal ">{modalFlight.air_flight}</p>
                <div className="center">
                    <p className="deleteTextInfo">seat number</p>
                    <p className="deleteText">{modalFlight.air_flight_number}</p>
                </div>
                <div className="center">
                    <p className="btnDanger" onClick={onDelete}>DELETE</p>
                    <p className="darkBtnEmpty" onClick={()=>{
                        setModalOpen(false);
                        setModalTrigger(null);
                    }}>CLOSE</p>
                </div>
            </div>
        </div>
    )
};

export default DeleteModal;