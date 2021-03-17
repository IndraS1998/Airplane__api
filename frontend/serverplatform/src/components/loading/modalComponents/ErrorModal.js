import React from "react";
import "../modal.css";

const ErrorModal = ({message,setModalOpen,setModalTrigger}) =>{
    return(
        <div className="modal column">
            <div className="textSection column">
                <p className="modalText">{message}</p>
                <p className="btnInnerEmpty" onClick={()=> {
                    setModalTrigger(null);
                    setModalOpen(false);
                }}>
                    Close
                </p>
            </div>
        </div>
    )

};

export default ErrorModal;