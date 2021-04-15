import React from "react";
import mainPic from "../../../assets/img/pexels-c-cagnin-2007401.jpg";
import "../FlightList.css";
import {onOpenAlert} from "../../../reducer/aid/Utility";
import place1 from "../../../assets/places/Madrid.jpg";
import place2 from "../../../assets/places/LA.jpg";
import place3 from "../../../assets/places/London.jpg";
import place4 from "../../../assets/places/Paris.jpg";
import place5 from "../../../assets/places/pexels-paul-deetman-2960887.jpg";
import place6 from "../../../assets/places/Tokyo.jpg";
import place7 from "../../../assets/places/Rome.jpg";
import place8 from "../../../assets/places/NY.jpg";
import place9 from "../../../assets/places/pexels-shvets-anna-2570063.jpg";
import place10 from "../../../assets/places/Berlin.jpg";

let imgArr = [place1,place2,place3,place4,place5,place6,place7,place8,place9,place10];


const SingleFlight = ({destination, price,flight,setDetailFlight,setAlertType,setAlertOpen }) =>{

    function openDetailAlertHandler(){
        setDetailFlight(flight);
        onOpenAlert("detail",setAlertOpen,setAlertType);
    }

    return(
        <section className="cart col" onClick={openDetailAlertHandler}>
            <img src={imgArr[Math.floor(Math.random()*imgArr.length)]} alt="sad computer :(" className="cart-img"/>
            <div className="cart-sub">
                <p className="cart-title ml-5">{destination}</p>
                <h4 className="cart-info ml-5">{price} <span className="cart-title"> FCFA</span></h4>
            </div>
        </section>
    )
};

export default SingleFlight;