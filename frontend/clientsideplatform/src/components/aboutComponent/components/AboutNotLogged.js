import React,{useState,useEffect} from "react";
import "../About.css";
import {sendMessage} from "../../../reducer/aid/CRUD";
import {ImLocation2} from "react-icons/im";
import {HiOutlineMail} from "react-icons/hi";
import {FiPhoneCall} from "react-icons/fi";
import {onOpenAlert, onSetString} from "../../../reducer/aid/Utility";

export default function AboutNotLogged({setAlertOpen,setAlertType,setMessage}){
    const [fn,setFn] = useState("");
    const [ln,setLn] = useState("");
    const [em,setEm] = useState("");
    const [sbj,setSbj] = useState("");
    const [ms,setMs] = useState("");
    const [filledAll,setFilledAll] = useState(false);

    //enabling and disabling button
    function checkFilled() {
        if (fn.length >= 5 && ln.length >= 5 && em.length >= 5 && sbj.length >= 5 && ms.length >= 5 && em.includes("@")){
            setFilledAll(true);
        }else {
            setFilledAll(false);
        }
    }
    useEffect(()=>checkFilled(),[fn,ln,em,sbj,ms]);

    //submitting
    function onClear(){
        setMs("");setSbj("");setEm("");setLn("");setFn("");
    }
    async function onSubmitMessage(){
        if(filledAll){
            const rObj = {reqFN:fn,reqLN:ln,reqEm:em,subject:sbj,message:ms};
            const aObj = {setAlertType,setModalOpen:setAlertOpen,setMessage};
            const r = await sendMessage(rObj,aObj);
            if(r){
                setMessage("successfully submitted");
                onOpenAlert("message",setAlertOpen,setAlertType);
                onClear();
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
            <section className="spaceAround about secondary mt-5">
                <form onSubmit={event => {
                    event.preventDefault();
                    onSubmitMessage();
                }}>
                    <article className="backgroundDark col">
                        <div className="center inputContainer">
                            <input type="text" placeholder="First Name" value={fn} onChange={e=>onSetString(e,setFn)}/>
                            <input type="text" placeholder="Last Name" value={ln} onChange={e=>onSetString(e,setLn)}/>
                        </div>
                        <div className="center inputContainer">
                            <input type="text" placeholder="email@yahoo.com" value={em} onChange={event => onSetString(event,setEm)}/>
                            <input type="text" placeholder="Subject" value={sbj} onChange={event => onSetString(event,setSbj)}/>
                        </div>
                        <textarea name="message" placeholder="message" value={ms} onChange={event => onSetString(event,setMs)}/>
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