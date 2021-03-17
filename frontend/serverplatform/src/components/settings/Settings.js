import React,{useContext,useState} from "react";
import {flightContext} from "../../store/reducer";
import CheckLogin from "../home/CheckLogin";
import "./settings.css";
import Footer from "../navigation/Footer";

const Settings = () =>{
    const {logged,setModalTrigger,activeWorker,setModalOpen} = useContext(flightContext);
    const {name,email,department,phone_Number,address,passwordReset} = activeWorker;

    if(!logged){
        return <CheckLogin />
    }

    return (
        <div>
            <div className="height100 column ">
                <p className="titleText">{name}</p>
                <div className="center">
                    <div className="info center">
                        <p className="secondaryInfo">email Address</p>
                        <p className="secondaryTitle">{email}</p>
                    </div>
                    <div className="info center">
                        <p className="secondaryInfo">department</p>
                        <p className="secondaryTitle">{department}</p>
                    </div>
                </div>
                <div className="center">
                    <div className="info center">
                        <p className="secondaryInfo">address</p>
                        <p className="secondaryTitle">{address}</p>
                    </div>
                    <div className="info center">
                        <p className="secondaryInfo">phone number</p>
                        <p className="secondaryTitle">{phone_Number}</p>
                    </div>
                    {!activeWorker.passwordEdit && <div className="info">
                        <div className="center">
                            <p className="secondaryInfo">think of password reset?</p>
                        </div>
                        <div className="column">
                            <p className="btnMain" onClick={()=>{
                                setModalTrigger("setPassword");
                                setModalOpen(true);
                            }}>RESET</p>
                            <p className="txtXS">careful here! it can only be done once</p>
                        </div>
                    </div>}
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Settings;