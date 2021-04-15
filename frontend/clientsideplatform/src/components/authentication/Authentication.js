import React,{useContext,useState} from "react";
import {flightContext} from "../../reducer/reducer";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function Authentication(){
    let {logged,setUsers,setLogged,users,setActiveUser} = useContext(flightContext);
    let [signUp,setSignUp] = useState(true);

    function onToggleSignUp(){
        setSignUp(!signUp);
    }

    if(!signUp){
        return(
            <LogIn onToggleSignUp={onToggleSignUp} users={users} setLogged={setLogged}
                   setActiveUser={setActiveUser} logged={logged}/>
        )
    }
    return(
        <SignUp onToggleSignUp={onToggleSignUp} setUsers={setUsers} setLogged={setLogged}
                logged={logged} setActiveUser={setActiveUser} users={users}/>
    )
}

export default Authentication;