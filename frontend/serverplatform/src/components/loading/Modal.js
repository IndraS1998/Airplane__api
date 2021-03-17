import React,{useContext,useState} from "react";
import {flightContext} from "../../store/reducer";
import "./modal.css";
import {deleteFlightHandler,onEditPrice} from "../../store/core/CRUD";
import ErrorModal from "./modalComponents/ErrorModal";
import DeleteModal from "./modalComponents/DeleteModal";
import DetailModal from "./modalComponents/DetailModal";
import ChangePassWordModal from "./modalComponents/ChangePassWordModal";


const Modal = () =>{
    const {modalTrigger,setLoading,modalOpen,activeWorker,getFlights,setModalOpen,message,modalFlight,setModalTrigger,setMessage} = useContext(flightContext);
    let errorObj = {setMessage,setModalOpen,setModalTrigger};

    const [price,setPrice] = useState("");

    async function onDelete(){
        setLoading(true);
        await deleteFlightHandler(modalFlight.id,setLoading,errorObj);
        await getFlights();
        setLoading(false);
    }

    if(!modalOpen){
        return null
    }

    if(modalTrigger === "error"){
        return<ErrorModal setModalOpen={setModalOpen} message={message} setModalTrigger={setModalTrigger}/>
    }

    if(modalTrigger === "delete"){
        return(
            <DeleteModal setModalOpen={setModalOpen} setModalTrigger={setModalTrigger}
                onDelete={onDelete} modalFlight={modalFlight}
            />
        )
    }

    if(modalTrigger === "setPassword"){
        return(
            <ChangePassWordModal setModalOpen={setModalOpen} setModalTrigger={setModalTrigger} setLoading={setLoading} errorObj={errorObj}
                                 name={activeWorker.name}
            />
        )
    }

    return(
        <DetailModal modalFlight={modalFlight} setPrice={setPrice} errorObj={errorObj} getFlights={getFlights}
                     setModalOpen={setModalOpen} price={price} setLoading={setLoading}
        />
    )
};

export default Modal;