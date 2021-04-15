import React,{useEffect,useState} from "react";
import "../About.css";
import {sendMessage} from "../../../reducer/aid/CRUD";
import {ImLocation2} from "react-icons/im";
import {HiOutlineMail} from "react-icons/hi";
import {FiPhoneCall} from "react-icons/fi";
import {onOpenAlert, onSetString} from "../../../reducer/aid/Utility";

export default function({setAlertOpen,setAlertType,activeUser,setMessage}){
    let [txt,setTxt] = useState("");
    let [msg,setMsg] = useState("");
    let [filledAll,setFilledAll] = useState(false);

    let {firstName,lastName,email} = activeUser;

    //enabling and disabling button
    function checkFilled() {
        if (txt.length > 5 && msg.length > 5){
            setFilledAll(true);
        }else {
            setFilledAll(false);
        }
    }
    useEffect(()=>checkFilled(),[txt,msg]);

    async function onSubmitMessage(){
        if(filledAll){
            const rObj = {reqFN:firstName,reqLN:lastName,reqEm:email,subject:txt,message:msg};
            const aObj = {setAlertType,setModalOpen:setAlertOpen,setMessage};
            let r = await sendMessage(rObj,aObj);
            if(r){
                onOpenAlert("message",setAlertOpen,setAlertType);
                setMsg("");setTxt("");
            }
        }
    }

    return(
        <section className="main col">
            <h3 className="aboutHeader">contact us</h3>
            <p className="aboutText mt-5">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aliquid dolores eaque enim ipsam labore laudantium minus
                , nam odio quos, ullam veritatis voluptas. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Fugiat modi quis voluptatum!
            </p>
            <section className="spaceAround secondary mt-5">
                <form onSubmit={event => {
                    event.preventDefault();
                    onSubmitMessage().then(()=>console.log("done"));
                }}>
                    <article className="backgroundDark col">
                        <input type="text" placeholder="Subject" value={txt} onChange={event => onSetString(event,setTxt)}/>
                        <textarea name="message" placeholder="message" value={msg} onChange={event => onSetString(event,setMsg)}/>
                        {filledAll
                            ? <button className="buttonSuccessPrimary" onClick={onSubmitMessage}>SUBMIT</button>
                            :<button className="buttonDangerPrimary" >SUBMIT</button>}
                    </article>
                </form>
                <article className="backgroundDark col">
                    <div className="center">
                        <div className="icon">
                            <ImLocation2/>
                        </div>
                        <div>
                            <h5 className="secondary-title">Address</h5>
                            <p className="textGentle">Lorem ipsum dolo</p>
                        </div>
                    </div>
                    <div className="center mt-5">
                        <div className="icon">
                            <HiOutlineMail />
                        </div>
                        <div>
                            <h5 className="secondary-title">Email</h5>
                            <p className="textGentle">lkjfdslk@uajd.com</p>
                        </div>
                    </div>
                    <div className="center mt-5">
                        <div className="icon">
                            <FiPhoneCall/>
                        </div>
                        <div >
                            <h5 className="secondary-title">Call</h5>
                            <p className="textGentle">+23765465421212/</p>
                            <p className="textGentle">+2346565655421</p>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    )
 }