import React,{createContext,useState} from "react";

import {flights} from "./core";
import {onLogin,onSetString} from "./core/authentication";
import {users} from "./core";

let flightContext = createContext([...flights]);
let {Provider} = flightContext;

const FlightReducer = ({children}) =>{
    const [logged,setLogged] = useState(false);
    const [loading,setLoading] = useState(false);
    const [workers,setWorkers] = useState([...users]);
    const [flightsSpaces,setFlightSpaces] = useState([...flights]);
    const [activeWorker,setActiveWorker] = useState(null);
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
            logged,loading,name,setName,password,setPassword,activeWorker,setLoading,flightsSpaces,setFlightSpaces,
            onSetString,onPerformLogin,onLogOut,
        }}>
            {children}
        </Provider>
    )
};

export {flightContext,FlightReducer}