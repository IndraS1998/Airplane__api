import React,{useContext,useState,useEffect} from 'react';
import './Home.css'
import {flightContext} from "../../store/reducer";
import Footer from "../navigation/Footer";
import WorkSection from "./WorkSection";

const Home = () =>{
    const {setName,setPassword,name,password,
        onSetString,logged,onPerformLogin,onLogOut} = useContext(flightContext);
    let [legit1,setLegit1] = useState(false);
    let [legit2,setLegit2] = useState(false);

    useEffect(function () {
        if(name.length > 0){
            setLegit1(true);
        }
        if(password.length > 0){
            setLegit2(true);
        }
        if(name.length < 1){
            setLegit1(false);
        }
        if(password.length < 1){
            setLegit2(false);
        }
    },[name,password]);

    if(logged){
        return(
            <section>
                <div className="height100 column ">
                    <p className="titleText">
                        WELCOME TO <span>PRIME MERIDIAN</span>
                    </p>
                    <WorkSection onLogOut={onLogOut}/>
                    <p className="textSmall">enterprise edition</p>
                </div>
                <Footer />
            </section>
        )
    }

    return(
        <form className="center height100 py-1 animate two fadeIn" onSubmit={ event => {
            event.preventDefault();
            if(name.length < 4 || password.length < 6){
                return null
            }
            onPerformLogin(name,password);
            setName("");
            setPassword("");
        }}>
            <div>
                <p className="titleText">
                    LOGIN TO <span>PRIME MERIDIAN</span>
                </p>
                <div>
                    <input type="text" placeholder="name" value={name} onChange={event => onSetString(event,setName)}/>
                </div>
                <div>
                    <input type="password" placeholder="password" value={password} onChange={event => onSetString(event,setPassword)}/>
                </div>
                {legit1 && legit2 && <button className="btnMain animate two fadeIn" onClick={event => {
                    event.preventDefault();
                    if(name.length < 4 || password.length < 6){
                        return null
                    }
                    onPerformLogin(name,password);
                    setName("");
                    setPassword("");
                }}>
                    LOG IN
                </button>}
                <p className="textSmall">enterprise edition</p>
            </div>
        </form>

    )
};

export default Home;