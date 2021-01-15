import React,{useContext} from "react";
import "./LoadingSpinner.css"

import {flightContext} from "../../store/reducer";

const LoadingSpinner = () =>{
    const data = useContext(flightContext);

    if(!data.loading){
        return null
    }

    return(
        <div className="body center">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
};

export default LoadingSpinner;