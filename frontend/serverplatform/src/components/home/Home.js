import React,{useContext} from 'react';
import './Home.css'
import {flightContext} from "../../store/reducer";
import WorkSection from "./WorkSection";

const Home = () =>{
    const data = useContext(flightContext);
    const {setName,setPassword,name,password,onSetString,logged,onPerformLogin,onLogOut} = data;

    if(logged){
        return(
            <div className="center height100 column ">
                <p className="titleText">
                    WELCOME TO <span>PRIME MERIDIAN</span>
                </p>
                <WorkSection onLogOut={onLogOut}/>
                <p className="textSmall">enterprise edition</p>
            </div>
        )
    }

    return(
        <div className="center height100 column box animate two fadeIn">
            <p className="titleText">
                LOGIN TO <span>PRIME MERIDIAN</span>
            </p>
            <div>
                <input type="text" placeholder="name" value={name} onChange={event => onSetString(event,setName)}/>
            </div>
            <div>
                <input type="password" placeholder="password" value={password} onChange={event => onSetString(event,setPassword)}/>
            </div>
            <div className="btnMain" onClick={() => {
                if(name.length === 0 || password.length === 0){
                    return null
                }
                onPerformLogin(name,password);
                setName("");
                setPassword("");
            }}>
                LOG IN
            </div>
            <p className="textSmall">enterprise edition</p>
        </div>
    )
};

export default Home;