import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css'

//imports
import Home from "./components/home/Home";
import CreateFlight from "./components/Create/CreateFlight";
import LoadingSpinner from "./components/loading/LoadingSpinner";
import FlightList from "./components/Viewing/FlightList";
import Settings from "./components/settings/Settings";
import Navigation from "./components/navigation/Navigation";

function App(){
  return(
      <div className="transition">
          <Navigation />
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/createFlight" component={CreateFlight}/>
              <Route path="/flightList" component={FlightList}/>
              <Route path="/settings" component={Settings}/>
          </Switch>
        <LoadingSpinner />
      </div>
  )
}

export default App;