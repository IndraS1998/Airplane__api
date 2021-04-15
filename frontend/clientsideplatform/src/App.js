import {Switch,Route} from "react-router-dom";
import Home from "./components/homeComponents/Home";
import About from "./components/aboutComponent/About";
import FlightList from "./components/flightComponents/FlightList";
import Navigation from "./components/navigation/Navigation";
import Alert from "./components/UI/alert/Alert";
import PurchaseFlight from "./components/purchase/PurchaseFlight";
import Authentication from "./components/authentication/Authentication";
import MyFlights from "./components/flightComponents/personalFlights/MyFlights";
import './App.css';
import React from "react";

function App() {
    return(
        <div>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/flightList" component={FlightList}/>
                <Route path="/about" component={About}/>
                <Route path="/purchase" component={PurchaseFlight}/>
                <Route path="/authentication" component={Authentication}/>
                <Route path="/my-flights" component={MyFlights}/>
            </Switch>
            <Alert/>
        </div>
    )
}

export default App;
