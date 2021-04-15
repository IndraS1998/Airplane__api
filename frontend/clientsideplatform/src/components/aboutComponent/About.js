import React,{useContext} from 'react';
import {flightContext} from "../../reducer/reducer";
import AboutNotLogged from "./components/AboutNotLogged";
import AboutLogged from "./components/AboutLogged";
import "./About.css";

const About = () =>{
    let {setAlertOpen,setAlertType,logged,setMessage,activeUser} = useContext(flightContext);

    if(logged){
        return(
            <AboutLogged setAlertType={setAlertType} setAlertOpen={setAlertOpen}/>
        )
    }
    return(
        <AboutNotLogged setAlertOpen={setAlertOpen} setAlertType={setAlertType} setMessage={setMessage}/>
    )

};

export default About;