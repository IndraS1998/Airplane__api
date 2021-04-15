import React,{useContext,useState,useEffect} from "react";
import "./PurchaseFlight.css";
import {RiVisaFill} from "react-icons/ri";
import {onSetString} from "../../reducer/aid/Utility";
import "../authentication/Authentication.css";
import {flightContext} from "../../reducer/reducer";

let PurchaseFlight = () =>{

    const {detailFlight,logged} = useContext(flightContext);
    const [ccName,setCcName] = useState("");
    const [ccNum,setCcNum] = useState("");
    const [t,setT] = useState(false);

    function onToggle(){
        setT(!t)
    }

    if(!logged){
        return(
            <section className="col purchase-section">
                please log in
            </section>
        )
    }
    return(
        <section className="col purchase-section mt-5">
            <h3 className="purchase-header">your total is {detailFlight.price} fcfa</h3>
            <p className="purchase-txt mt-5">Pay securely through your credit card</p>
            <div className="icon-background center mt-5">
                <RiVisaFill size={100} className="icon"/>
            </div>
            <form className="purchase-card mt-5 col">
                <input type="text" className="sort-input" placeholder="name on the card" value={ccName} onChange={event => onSetString(event,setCcName)}/>
                <input type="text" className="sort-input" placeholder="credit card number" value={ccNum} onChange={event => onSetString(event,setCcNum)}/>
                <div className="check-section mt-5 center">
                    <input type="checkbox" className=" ml-3" checked={t} onClick={onToggle}/>
                    <p className="check-text ml-5">use this account number for all my transactions</p>
                </div>
                <div className="buttonPrimary mt-5">PAY {detailFlight.price} fcfa</div>
            </form>
        </section>
    )
};

export default PurchaseFlight;