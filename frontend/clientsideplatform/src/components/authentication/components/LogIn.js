import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {onSetString} from "../../../reducer/aid/Utility";
import {login} from "../../../reducer/aid/CRUD";
import "../Authentication.css";
import "../../flightComponents/FlightList.css";

function LogIn({onToggleSignUp,setLogged,setActiveUser,logged}){
    let [em,setEm] = useState("");
    let [pw,setPw] = useState("");
    let [err,setErr] = useState(false);

    let [filled,setFilled] = useState(false);

    /*ENABLING THE BUTTON*/
    function onEnableSubmit(){
        if(em.length >5 && pw.length>=5 && em.includes("@")){
            setFilled(true);
        }else{
            setFilled(false);
        }
    }
    useEffect(()=>onEnableSubmit(),[em,pw]);

    /*
    *   FUNCTION FOR SUBMITTING :)
    * */
    async function onLogIn(){
        if(em.length >5 && pw.length>=4 && em.includes("@")){
            //verify if user is in the list of users
            let foundUser;
            foundUser = await login(em,pw);
            if(!foundUser){
                setErr(true);
                setPw("");
                setEm("");
            }else {
                setActiveUser(foundUser);
                setLogged(true);
                setPw("");
                setEm("");
                setErr(false);
            }
        }
    }

    if(logged){
        return(
            <section className="authentication-section col">
                <h4 className="auth-card-title">Logged In</h4>
                <Link to="/flightList" style={{textDecoration:"none"}}>
                    <p className="auth-card-small mt-4">View Flights?</p>
                </Link>
            </section>
        )
    }

    return(
        <section className="mainSection">
            <section className="col">
                <h4 className="info-title">PRIME MERIDIAN</h4>
                <p className="info-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorum
                    eligendi eveniet perspiciatis. Amet earum minima modi, repellat repellendus voluptatem!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti deserunt dolore doloremque earum ex facilis fugit,
                    id laboriosam minus nobis numquam omnis, possimus praesentium quas qui quod rerum! Dignissimos dolores
                    et in laudantium nam nobis nulla provident repudiandae tempore veniam. Delectus hic magnam sit.
                </p>
            </section>
            <section className="authentication-section center">
                <form className="auth-card col" onSubmit={event => {
                    event.preventDefault();
                    onLogIn();
                }}>
                    <h3 className="auth-card-title">log in</h3>
                    <input type="text" placeholder="email@yahoo.com" className="sort-input mt-2"
                           value={em} onChange={event => onSetString(event,setEm)}/>
                    <input type="password" placeholder="password" className="sort-input mt-2"
                           value={pw} onChange={event => onSetString(event,setPw)}/>
                    <div className="mt-4 center">
                        {filled?<button className="buttonPrimary" onClick={onLogIn}>Log In</button>:
                            <button disabled className="buttonDangerPrimary">Log In</button>}
                        <p className="ml-3 auth-card-small" onClick={onToggleSignUp}>sign up instead?</p>
                    </div>
                    {err && <p className="small-text-danger mt-3">no corresponding user found found</p>}
                </form>
            </section>
        </section>
    )
}

export default LogIn;