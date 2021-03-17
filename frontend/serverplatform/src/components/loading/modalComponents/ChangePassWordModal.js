import React,{useState} from 'react';
import "../modal.css";
import {onEditPassword} from "../../../store/core/CRUD";
import {onSetString} from "../../../store/core/authentication";

const ChangePassWordModal = ({setModalOpen,setLoading,errorObj,name,setModalTrigger}) =>{
    const [newPassword,setNewPassword] = useState("");
    const [confPassword,setConfPassword] = useState("");
    const [errorMsg,setErrorMsg] = useState("");
    const [error,setError] = useState(false);
    const [password,setPassword] = useState("");

    async function onChangePassword(){
        if(newPassword.length < 5 || password.length < 5){
            //display error
            setErrorMsg("please enter a valid password!");
            setError(true);
            return null;
        }
        if( confPassword !== newPassword){
            //passwords do not match
            setErrorMsg("new password and confirm passwords do not match!");
            setError(true);
            return null;
        }
        setLoading(true);
        let editObj = {password,newPassword,name};
        await onEditPassword(editObj,errorObj,setLoading);
        //perform fetch
        setLoading(false);
    }

    return(
        <div className="modal column">
            <div className="textSection column">
                <p className="modalText">change password</p>
                <div className="column">
                    <input type="password" placeholder="old password" value={password} onChange={e => onSetString(e,setPassword)}/>
                    <input type="password" placeholder="enter new password" value={newPassword} onChange={event => onSetString(event,setNewPassword)}/>
                    <input type="password" placeholder="confirm new password" value={confPassword} onChange={event => onSetString(event,setConfPassword)}/>
                </div>
                <div className="center mx-3">
                    <p className="btnMain" onClick={async ()=>{
                        setErrorMsg("");
                        setError(false);
                        await onChangePassword();
                    }}>edit</p>
                    <p className="btnInnerEmpty" onClick={() => {
                        setModalTrigger("");
                        setModalOpen(false)
                    }}>CLOSE</p>
                </div>
                {error && <p className="deleteTextInfo">{errorMsg}</p>}
            </div>
        </div>
    )

};

export default ChangePassWordModal;