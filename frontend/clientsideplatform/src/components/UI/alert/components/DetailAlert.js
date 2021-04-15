import React,{useContext,useState} from "react";
import "../alert.css";
import detailImage from "../../../../assets/img/pexels-c-cagnin-2007401.jpg";
import {Link} from "react-router-dom";
import {likeFlights} from "../../../../reducer/aid/CRUD";
import {AiOutlineHeart} from "react-icons/ai";
import {BsFillHeartFill} from "react-icons/bs"
import {CgAirplane} from "react-icons/cg";
import {flightContext} from "../../../../reducer/reducer";

let DetailAlert = ({onCloseAlert}) =>{
    const {detailFlight,logged,activeUser,setAlertType,setAlertOpen,setMessage,setPersonalFlights,personalFlights} = useContext(flightContext);
    const {flightName,seatNumber,category,departureAirport,destination,price,departureTime,arrival} = detailFlight;
    const [liked,setLiked] = useState(false);


    async function onToggleLike(){
        let reqObj = {uid : activeUser.id,fid:detailFlight.id};
        let modal = {setAlertType,setAlertOpen,setMessage};
        setPersonalFlights([...personalFlights,detailFlight]);
        setLiked(!liked);
    }

    return(
        <section className="alert-body center">
            <section className="detail-alert-body col">
                <img src={detailImage} alt="sad computer :(" className="detail-image"/>
                <div className="center mt-2">
                    <h4 className="detail-sub ml-2">{departureAirport}</h4>
                    <CgAirplane size={30} className="icon mt-5"/>
                    <h2 className="detail-title ml-2">{destination}</h2>
                </div>
                <div className="center mt-2"><h2 className="detail-sub">{flightName}</h2><h2 className="detail-sub">/{seatNumber}</h2></div>
                <div className="center mt-2"><p>price:</p><h4 className="ml-2">{price}</h4></div>
                <div className="center mt-2"><p>category:</p><h4 className="ml-2">{category}</h4></div>
                <div className="center mt-2"><p>departure time:</p><p className="ml-2">{departureTime}</p></div>
                <div className="center mt-2"><p>arrival time:</p><p className="ml-2">{arrival}</p></div>
                <div className="center mt-3">
                    <button className="buttonSuccessPrimary" onClick={onCloseAlert}>CLOSE</button>
                    {logged?
                        <Link to="/purchase" style={{textDecoration:"none"}} onClick={onCloseAlert}>
                            <button className="button-out-line-light">PURCHASE</button>
                        </Link>
                        :<Link to="/authentication" style={{textDecoration:"none"}} onClick={onCloseAlert}>
                            <button className="button-out-line-light">Log In To Buy</button>
                        </Link>}
                    {
                        logged && liked?<div onClick={onToggleLike}><BsFillHeartFill size={45} className="heart-icon2 mt-1 ml-5"/></div>
                            :<div onClick={onToggleLike}><BsFillHeartFill size={45} className="heart-icon mt-1 ml-5"/></div>
                    }
                </div>
            </section>
        </section>
    )
};

export default DetailAlert;