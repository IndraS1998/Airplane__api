import React,{createContext,useState,useEffect} from "react";
import {Flights} from "./data";
import {fetchFLights} from "./aid/CRUD";

let flightContext = createContext(Flights);
let {Provider} = flightContext;

const FlightReducer = ({children}) =>{

    const [flights,setFlights] = useState(null);
    const [personalFlights,setPersonalFlights] = useState([]);
    const [detailFlight,setDetailFlight] = useState(null);
    const [alertOpen,setAlertOpen] = useState(false);
    const [alertType,setAlertType] = useState("");
    const [logged,setLogged] = useState(false);
    const [activeUser,setActiveUser] = useState(null);
    const [message,setMessage] = useState("");

    /*  INIT  */

    async function onFetchFlights(){
        let flights = await fetchFLights(setAlertType,setAlertOpen,setMessage);
        console.log(flights);
        setFlights(flights);
    }

    useEffect(()=>{
        onFetchFlights().then(()=>console.log("ok"));
    },[]);

    /*  INITIALIZING PERSONAL FLIGHTS ALGORITHM*/
    useEffect(()=>{
        let pFlights = [];
        if(activeUser){
            let {likedFlights} = activeUser;
            for(let i =0;i<likedFlights.length;i++ ){
                for(let j = 0;j<flights.length;j++){
                    if(likedFlights[i]===flights[j].id){
                        pFlights.push(flights[j]);
                    }
                }
            }
            setPersonalFlights([...pFlights]);
        }
    },[flights]);

    //dealing with the alert
    function onCloseAlert(){
        setAlertType("");
        setAlertOpen(false);
    }
    /*
    *   AUTHENTICATION
    * */
    function onLogOut(){
        setLogged(false);
    }

    return(
        <Provider value = {{
            flights,setFlights,alertType,setAlertType,logged,setLogged,setMessage,message,personalFlights,setPersonalFlights,
            alertOpen,setAlertOpen,detailFlight,setDetailFlight,onCloseAlert,onLogOut,setActiveUser,activeUser
        }}>
            {children}
        </Provider>
    )
};

export {FlightReducer,flightContext}