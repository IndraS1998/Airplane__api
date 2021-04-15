import React,{useState} from "react";
import "../FlightList.css";
import {onSetString} from "../../../reducer/aid/Utility";

const n = [1,2,3,4];

const SortBar = () =>{

    const [travellers,setTravellers] = useState(n[0]);

    return(
        <section className="mt-5">
            <div className="sort-card col">
                <h3 className="sort-cart-title">find your perfect flight</h3>
                <div className="center mt-3 focus">
                    <div className="box col">
                        <p className="box-text">travelers</p>
                        <select className="mt-2" onChange={event => onSetString(event,setTravellers)}>
                            {n.map((num,index) =>(
                                <option value={num} key={index}>{num}</option>
                            ))}
                        </select>
                    </div>
                    <input type="text" placeholder="from?" className="ml-5 sort-input"/>
                    <input type="text" placeholder="to?" className="sort-input ml-5"/>
                </div>
            </div>
        </section>
    )
};

export default SortBar;