import React from "react";
import {Link} from "react-router-dom";

const CheckLogin = () =>{
    return(
        <section className="height100 center">
            <Link to="/" style={{textDecoration: 'none'}}>
                <p className="loginHead">please log in</p>
            </Link>
        </section>
    )
};


export default CheckLogin;