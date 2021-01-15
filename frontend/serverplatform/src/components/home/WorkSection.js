import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";

//icons
import {BiAlignLeft} from "react-icons/bi";
import {AiFillSetting} from "react-icons/ai";
import {IoIosCreate} from "react-icons/io";
import {CgLogIn} from "react-icons/cg";

const WorkSection = ({onLogOut}) =>{
    return(
        <div className="center cartContainer">
            <Link to="createFlight" style={{textDecoration: 'none'}}>
                <div className="cart column">
                    <p className="py-5 cartTitle">CREATION OF FLIGHTS</p>
                    <p className="textSample mx-3 py-5">create new flight spaces for users to buy by mentioning the price and category</p>
                    <IoIosCreate size={32}/>
                </div>
            </Link>
            <Link to="flightList" style={{textDecoration: 'none'}}>
                <div className="cart column">
                    <p className="py-5 cartTitle">VIEW FLIGHTS</p>
                    <p className="textSample mx-3 py-5">view all flights and select what perform operations on them</p>
                    <BiAlignLeft size={32}/>
                </div>
            </Link>
            <Link to="settings" style={{textDecoration: 'none'}}>
                <div className="cartSetting column">
                    <p className="py-5 cartTitle">MY SETTINGS</p>
                    <p className="textSample mx-3 py-5">take a look at your user credential settings</p>
                    <AiFillSetting size={32}/>
                </div>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
                <div className="cartOut column" onClick={onLogOut}>
                    <p className="py-5 cartTitle">LOG OUT</p>
                    <CgLogIn size={32}/>
                </div>
            </Link>
        </div>
    )
};

export default WorkSection;