import React,{createContext,useState} from "react";

import {flights,users} from "./core";
import {onLogin,onSetString} from "./core/authentication";

let flightContext = createContext([...flights]);
let {Provider} = flightContext;

const FlightReducer = ({children}) =>{
    const [logged,setLogged] = useState(true);
    const [loading,setLoading] = useState(false);
    const [modalOpen,setModalOpen] = useState(false);
    const [modalTrigger,setModalTrigger] = useState("");
    const [message,setMessage] = useState("");
    const [modalFlight,setModalFlight] = useState(null);

    const [workers,setWorkers] = useState([...users]);
    const [flightsSpaces,setFlightSpaces] = useState([...flights]);
    const [activeWorker,setActiveWorker] = useState(users[1]);
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

    const onPerformLogin = (enteredName,enteredPassword) =>{
        const {log, user} = onLogin(enteredName,enteredPassword,workers,setLoading);
        if(log){
            setLogged(log);
            setActiveWorker(user);
        }
    };

    const onLogOut = () =>{
        setLogged(false);
    };


    return(
        <Provider value={{
            logged,loading,name,setName,password, setPassword,modalOpen,message,modalFlight,
            activeWorker,setLoading,flightsSpaces,setFlightSpaces,modalTrigger,setModalFlight,
            onSetString,onPerformLogin,onLogOut,setModalOpen,setModalTrigger,setMessage
        }}>
            {children}
        </Provider>
    )
};

export {flightContext,FlightReducer}