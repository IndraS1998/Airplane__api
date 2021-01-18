//      $$$     imports     $$$

import {openErrorModal} from "./Utility";

//      $$$     creation of a new flight    $$$
function flightCreationHandler(timeObj,flightObj,workerObj,onload,errorObj){
    onload(true);
    const {setMessage,setModalOpen,setModalTrigger} = errorObj;
    const date = new Date();
    const actualDay = date.toLocaleString();

    //destructure all required props
    const {departureTime,arrivalTime} = timeObj;
    const {price,category,planeName,airport,destination,seatNumber} = flightObj;
    const {cname,cid,cdept} = workerObj;

    //validate all props ie make sure there is no null value
    if((departureTime > arrivalTime)||(departureTime < actualDay)){
        openErrorModal("date error",setMessage,setModalOpen,setModalTrigger);
        onload(false);
        return null
    }

    if(!departureTime || !arrivalTime  || !price || category.length < 1 || destination.length < 1 || seatNumber.length < 1
        || planeName.length < 1 || airport.length < 1 || cname.length < 1 || !cid || cdept.length < 1){
        openErrorModal("fill all spaces",setMessage,setModalOpen,setModalTrigger);
        onload(false);
        return false;
    }
    //save the flight
    const newFlight = {
        id : Math.floor(10000 * Math.random()),
        departureTime, arrivalTime, price, category,
        planeName, airport,cname,cid,cdept,destination,seatNumber,
        Booked : false,
        dateCreated : actualDay
    };
    openErrorModal("flight created",setMessage,setModalOpen,setModalTrigger);
    onload(false);
    return newFlight;
}

function fetchingFlightHandler(){
    //getting the flight from the api
}

//      $$$ SEARCHING OF A FLIGHT
function filterFlight(flightList,criteriaObject,searchBy,onload){
    onload(true);
    let {searchString,departure,arrival} = criteriaObject;
    let found;
    if(searchBy === "Date"){
        found = flightList.filter(flight => flight.departureTime >= departure && flight.arrivalTime <= arrival);
        onload(false);
        return found;
    }
    if(searchBy === "String"){
        found = flightList.filter(flight => flight.price === searchString ||
            flight.category === searchString || flight.destination === searchString ||
            flight.planeName === searchString || flight.airport === searchString || flight.seatNumber ===searchString);
        onload(false);
        return found;
    }
    if(searchBy === "Both"){
        found = flightList.filter(flight => (flight.departureTime >= departure && flight.arrivalTime <= arrival) &&
            (flight.price === searchString || flight.category === searchString || flight.planeName === searchString || flight.airport === searchString));
        onload(false);
        console.log("searched by both");
        return found;
    }
    //if function reaches here it means that there are no flights that meet the search
    onload(false);
}


//      $$$     DELETION OF A FLIGHT
function deleteFlightHandler(id,flightList) {
    //filter the flight
    return flightList.filter(flight => flight.id !== id);
}

/*
*       $$$     EDITING THE PRICE OF A FLIGHT       $$$
* */
function onEditPrice(modalFlight,newPrice){
    //receive values
    //edit
    modalFlight.price = newPrice;
}
export {flightCreationHandler,fetchingFlightHandler,filterFlight,deleteFlightHandler,onEditPrice}