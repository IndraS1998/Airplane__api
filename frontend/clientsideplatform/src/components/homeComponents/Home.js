import React from 'react';
import "./Home.css"
import bgImage from "../../assets/img/pexels-josh-sorenson-59519.jpg";
import image from "../../assets/img/pexels-ketut-subiyanto-4436363.jpg";
import backImg from "../../assets/img/pexels-alexandr-podvalny-1008155.jpg";
import {Link} from "react-router-dom";

const Home = () =>{
    return(
        <section className="main col">
            <div className="mt-5 col main-text-area">
                <h2 className="main-title">WELCOME TO THE MOST AMAZING FLIGHT PLATFORM</h2>
                <p className="main-text mt-5">It is our great pleasure that we challange you to make us your principal partners
                    for all your flight transaction, we are certain that our very exquisite platform will suit your each and every need.
                    Why not trust us and give us a chance?
                </p>
            </div>
            <div className="image-container center">
                <div className="center blue">
                    <img src={backImg} alt="sad computer :(" className="img-long"/>
                    <section className="info col">
                        <h4 className="info-title">flight monitoring</h4>
                        <p className="text-info mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Delectus et fugiat libero nesciunt nostrum. Possimus, qui.</p>
                        <Link to="/flightList" style={{textDecoration: 'none'}}>
                            <p className="buttonSuccessPrimary mt-5">GET STARTED</p>
                        </Link>
                    </section>
                </div>
                <div className="col row-2">
                    <div className="red">
                        <img src={image} alt="sad computer :(" className="image"/>
                    </div>
                    <div className="green">
                        <img src={bgImage} alt="sad computer :(" className="image"/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home;