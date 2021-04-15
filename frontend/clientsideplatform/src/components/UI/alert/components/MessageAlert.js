import React from "react";
import {GiScallop} from "react-icons/gi";
import {FaSmile} from "react-icons/fa"
import "../alert.css";

const MessageAlert = ({onCloseAlert,message}) =>{
    return(
        <section className="alert-body">
            <div className="center">
                <div className="message-body col">
                    <p>{message}</p>
                    <span className="mt-5 the-icon"><FaSmile size={42}/></span>
                    <button className="buttonSuccessPrimary mt-4" onClick={onCloseAlert}>Close</button>
                </div>
            </div>
        </section>
    )
};

export default MessageAlert;