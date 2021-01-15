import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {flightContext} from "../../store/reducer";
import "./Navigation.css"
import {CgLogIn} from "react-icons/cg";

const Navigation = () =>{
    let data = useContext(flightContext);
    if(!data.logged){
        return null
    }
    return(
        <div className="navigationSection">
            <div className="center">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="navigationHeader">logo</div>
                </Link>
            </div>
            <div className="center">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="navigationItem">home</div>
                </Link>
                <Link to="createFlight" style={{textDecoration: 'none'}}>
                    <div className="navigationItem">Create</div>
                </Link>
                <Link to="flightList" style={{textDecoration: 'none'}}>
                    <div className="navigationItem">Update</div>
                </Link>
                <Link to="settings" style={{textDecoration: 'none'}}>
                    <div className="navigationItem">settings</div>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="navigationLogOut" onClick={data.onLogOut}>
                        <CgLogIn size={15}/>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Navigation;