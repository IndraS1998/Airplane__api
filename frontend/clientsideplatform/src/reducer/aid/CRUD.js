import {onOpenAlert} from "./Utility";
//fetch flights
async function fetchFLights(setAlertType,setModalOpen,setMessage) {
    try{
        let response = await fetch("http://localhost:5000/flights/");
        if(!response.ok){
            setMessage("something went wrong");
            onOpenAlert("message",setModalOpen,setAlertType);
        }
        let d = await response.json();
        return d.flights;
    }catch (e) {
        setMessage("an unexpected error occurred");
        onOpenAlert("message",setModalOpen,setAlertType);
    }
}

//signUp
async function signUp(fN,LN,Em,Ps){
    try{
        let r = await fetch("http://localhost:5000/user/signUp",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                firstName:fN,
                lastName:LN,
                email:Em,
                password:Ps
            })
        });
        if(!r.ok){
            console.log("here");
            return null
        }
        let d = await r.json();
        console.log(d.user);
        return d.user;
    }catch (e) {
        return null
    }
}

//login
async function login(em,ps){
    try{
        let r = await fetch("http://localhost:5000/user/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email:em,
                password:ps
            })
        });
        if(!r.ok){
            return null;
        }
        let d = await r.json();
        return d.user;
    }catch (e) {
        return null;
    }
}
//like flights
async function likeFlights(reqObj,modal){
    const {uid,fid} = reqObj;
    let {setAlertType,setModalOpen,setMessage} = modal;
    try{
        let r = fetch("http://localhost:5000/user/like",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                likedFlightId:fid,
                userId:uid
            })
        });
        if(!r.ok){
            setMessage("could not like the flight");
            onOpenAlert("message",setModalOpen,setAlertType);
        }
    }catch (e) {
        setMessage("something went wrong try again later");
        onOpenAlert("message",setModalOpen,setAlertType);
    }
}
//send message
async function sendMessage(reqObj,alertObj){
    let {reqFN,reqLN,reqEm,subject,message} = reqObj;
    let {setAlertType,setModalOpen,setMessage} = alertObj;

    try{
        let r = await fetch("http://localhost:5000/message",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                reqFN,reqLN,reqEm,subject,message
            })
        });
        if(!r.ok){
            setMessage("could not send the message");
            onOpenAlert("message",setModalOpen,setAlertType);
            return null
        }
        return true
    }catch (e) {
        setMessage("something went wrong try again later");
        onOpenAlert("message",setModalOpen,setAlertType);
        return null
    }
}
export {fetchFLights,signUp,login,likeFlights,sendMessage}