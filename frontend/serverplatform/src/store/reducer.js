import React,{createContext,useState,useEffect} from "react";

import {flights,users} from "./core";
import {fetchingFlightHandler} from "./core/CRUD";
import {onLogin,onSetString} from "./core/authentication";

let flightContext = createContext([...flights]);
let {Provider} = flightContext;

const FlightReducer = ({children}) =>{
    const [logged,setLogged] = useState(false);
    const [loading,setLoading] = useState(false);
    const [modalOpen,setModalOpen] = useState(false);
    const [modalTrigger,setModalTrigger] = useState("");
    const [message,setMessage] = useState("");
    const [modalFlight,setModalFlight] = useState(null);

    const [flightsSpaces,setFlightSpaces] = useState([]);
    const [activeWorker,setActiveWorker] = useState(null);
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

    /*
    *       $$  GETTING THE FLIGHTS YAAAY   $$
    *

     */
    let getFlights = async () =>{
        let modalObj = {errorStringSetter : setMessage, setModalState : setModalOpen , setModalTrigger};
        let flights = await fetchingFlightHandler(modalObj);
        setFlightSpaces(flights);
    };

    useEffect(()=>{
        getFlights().then(r => console.log("ok"));
    },[]);


    const onPerformLogin = async (enteredName,enteredPassword) =>{
        const errObj = {setMessage,setModalOpen,setModalTrigger};
        const {log, user} = await onLogin(enteredName,enteredPassword,setLoading,errObj);
        if(log){
            setLogged(log);
            setActiveWorker(user);
        }
    };

    const onLogOut = () =>{
        setLogged(false);
        setActiveWorker(null);
    };


    return(
        <Provider value={{
            logged,loading,name,setName,password, setPassword,modalOpen,message,modalFlight,
            activeWorker,setLoading,modalTrigger,setModalFlight,flightsSpaces,
            onSetString,onPerformLogin,onLogOut,setModalOpen,setModalTrigger,setMessage,getFlights
        }}>
            {children}
        </Provider>
    )
};

export {flightContext,FlightReducer}