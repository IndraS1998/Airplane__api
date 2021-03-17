import {openErrorModal} from "./Utility";

/*
*       $$$         LOGIN IN METHOD            $$$
* */

const onLogin = async (name,password,loader,errObj) =>{
//this method received a name, a password and a list such that it can verify user credentials
//it returns a boolean and the logged in user
    loader(true);
    const {setMessage,setModalOpen,setModalTrigger} = errObj;
    try{
        let res = await fetch("http://localhost:5000/worker/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name : name,
                password : password
            })
        });
        if(!res.ok){
            loader(false);
            openErrorModal("wrong credentials",setMessage,setModalOpen,setModalTrigger);
            return {log : false, user : null};
        }
        let digest = await res.json();
        loader(false);
        return {log : true, user : digest.user}
    }catch (e) {
       loader(false);
       openErrorModal("something is not ok",setMessage,setModalOpen,setModalTrigger);
       return {log : false, user : null};
   }
};

const onSetString = (e,setString) =>{
    setString(e.target.value);
};

export {onLogin,onSetString}