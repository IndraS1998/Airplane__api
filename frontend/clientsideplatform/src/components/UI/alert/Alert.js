import React,{useContext} from "react";
import {flightContext} from "../../../reducer/reducer";
import MessageAlert from "./components/MessageAlert";
import DetailAlert from "./components/DetailAlert";
import "./alert.css";

const Alert = () =>{

    const {alertOpen,alertType,onCloseAlert,message} = useContext(flightContext);

    if(alertOpen){
        //message submission alert
        if( alertType === "message"){
            return(
                <MessageAlert onCloseAlert={onCloseAlert} message={message}/>
            )
        }
        //detail view alert
        if(alertType === "detail"){
            return(
                <DetailAlert onCloseAlert={onCloseAlert}/>
            )
        }
    }else{
        return null
    }
};

export default Alert;