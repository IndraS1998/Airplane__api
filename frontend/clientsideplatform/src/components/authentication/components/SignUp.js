import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import  {signUp} from "../../../reducer/aid/CRUD";
import "../Authentication.css";
import "../../flightComponents/FlightList.css";
import {onSetString} from "../../../reducer/aid/Utility";

function SignUp({onToggleSignUp,logged,setLogged,setActiveUser}){
    let [fn,setFn] = useState("");  // fn === first Name
    let [ln,setLn] = useState("");
    let [em,setEm] = useState("");
    let [pw,setPw] = useState("");
    let [conPw,setCpw] = useState("");

    //dealing with error logic
    let [err,setErr] = useState(false);
    let [errMsg,setErrMsg] = useState("");
    let [filled,setFilled] = useState(false);

    //helping all render

    function checkFilled(){
        if(fn.length >= 5 && ln.length >= 5 && em.length >= 5 && em.includes("@") && pw.length >= 5 && conPw.length >= 5){
            setFilled(true);
        }else{
            setFilled(false);
        }
    }

    useEffect(()=>checkFilled(),[fn,ln,em,pw,conPw]);

    /*
    * FUNCTION FOR SUBMITTING GOES HERE :)
    * */
    function onClearInputs(){
        setErr(false);setErrMsg("");setEm("");setPw("");setFn("");setLn("");
        setCpw("");
    }

    async function onSignUp(){
        if(pw !== conPw){
            setErrMsg("passwords do not match");
            setErr(true);
            return
        }
        if(fn.length >= 5 && ln.length >= 5 && em.length >= 5 && em.includes("@") && pw.length >= 5){

            let foundUser;
            foundUser = await signUp(fn,ln,em,pw);

            if(foundUser){
                setActiveUser(foundUser);
                setLogged(true);
                onClearInputs();
            }else{
                setErrMsg("user already exists");
                setErr(true);
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
                    onSignUp();
                }}>
                    <h3 className="auth-card-title">sign up</h3>
                    <input type="text" placeholder="First Name" className="sort-input mt-2 "
                           value={fn} onChange={event => onSetString(event,setFn)}/>
                    <input type="text" placeholder="Last Name" className="sort-input mt-2"
                           value={ln} onChange={event => onSetString(event,setLn)}/>
                    <input type="text" placeholder="email@yahoo.com" className="sort-input mt-2"
                           value={em} onChange={event => onSetString(event,setEm)}/>
                    <input type="password" placeholder="password" className="sort-input mt-2"
                           value={pw} onChange={event => onSetString(event,setPw)}/>
                    <input type="password" placeholder="confirm password" className="sort-input mt-2"
                           value={conPw} onChange={event => onSetString(event,setCpw)}/>
                    <div className="mt-4 center">
                        {filled?<button className="buttonPrimary" onClick={onSignUp}>Sign Up</button>:
                            <button disabled className="buttonDangerPrimary">Sign Up</button>}
                        <p className="ml-3 auth-card-small" onClick={onToggleSignUp}>login instead?</p>
                    </div>
                    {err && <p className="small-text-danger mt-3">{errMsg}</p>}
                </form>
            </section>
        </section>
    )
}

export default SignUp;