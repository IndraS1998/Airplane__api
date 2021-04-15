import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import {BsPersonFill} from "react-icons/bs";
import {AiFillFacebook,AiOutlineWhatsApp,AiFillTwitterCircle} from "react-icons/ai";
import {HiOutlineLogout} from "react-icons/hi";
import {GiCommercialAirplane} from "react-icons/gi";
import {flightContext} from "../../reducer/reducer";
import "./Navigation.css";

const Navigation = () =>{
    const {logged,onLogOut} = useContext(flightContext);
    return(
        <section>
            <section className="navigationButton">
                <div className="navigationButtonContent"></div>
                <div className="navigationButtonContent"></div>
                <div className="navigationButtonContent"></div>
            </section>
            <section className="navigationSection">
                <div className="center">
                    <Link to="/" style={{textDecoration : "none"}}>
                        <div className="navigationHeader">prime meridian</div>
                    </Link>
                </div>
                <div className="center">
                    <Link to="/flightList" style={{textDecoration: 'none'}}>
                        <div className="navigationItem"><GiCommercialAirplane /></div>
                    </Link>
                    <Link to="/about" style={{textDecoration: 'none'}}>
                        <div className="navigationItem">About</div>
                    </Link>
                    <div className="center ml-5 icon mt-5">
                        <AiFillFacebook size={15} />
                        <AiFillTwitterCircle size={15}/>
                        <AiOutlineWhatsApp size={15}/>
                    </div>
                    {   logged?<div className="navigationItem"><HiOutlineLogout onClick={onLogOut}/></div>
                        : <div className="center sing-in">
                            <Link to="/authentication" style={{textDecoration:"none"}}>
                                SIGN IN<BsPersonFill className="ml-2" size={13}/>
                            </Link>
                        </div>
                    }
                    {
                        logged && <Link to="/my-flights" style={{textDecoration:"none"}}>
                            <div className="navigationItem">My Flights</div>
                        </Link>
                    }
                </div>
            </section>
        </section>
    )
};

export default Navigation;