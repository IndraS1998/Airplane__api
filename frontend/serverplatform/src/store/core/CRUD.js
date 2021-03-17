//      $$$     imports     $$$

import {openErrorModal} from "./Utility";

//      $$$     creation of a new flight    $$$
async function flightCreationHandler(timeObj,flightObj,workerObj,onload,errorObj){
    onload(true);
    const {setMessage,setModalOpen,setModalTrigger} = errorObj;
    const date = new Date();

    //destructure all required props
    const {departureTime,arrivalTime} = timeObj;
    const {price,category,planeName,airport,destination,seatNumber} = flightObj;
    const {cname,cid,cdept} = workerObj;

    //validate all props ie make sure there is no null value
    if((departureTime > arrivalTime) || (departureTime < date)){
        onload(false);
        openErrorModal("date error",setMessage,setModalOpen,setModalTrigger);
        return null
    }

    if(!departureTime || !arrivalTime  || !price || category.length < 1 || destination.length < 1 || seatNumber.length < 1
        || planeName.length < 1 || airport.length < 1 || cname.length < 1 || !cid || cdept.length < 1){
        onload(false);
        openErrorModal("fill all spaces",setMessage,setModalOpen,setModalTrigger);
        return false;
    }
    if(destination === airport){
        onload(false);
        openErrorModal("cannot leave and arrive at the same airport",setMessage,setModalOpen,setModalTrigger);
        return false;
    }

    //save the flight
    try{
        let response = await fetch("http://localhost:5000/flights/create",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                departure : departureTime.toLocaleString(),
                arrival : arrivalTime.toLocaleString(),
                destination,price,category,
                air_flight : planeName,
                air_flight_number : seatNumber,
                airport,
                c_name : cname, // will then be taken from the logged in user
                c_id : cid, //same as above
            })
        });
        if(!response.ok){
            openErrorModal("something went wrong try later",setMessage,setModalOpen,setModalTrigger);
            onload(false);
            return false;
        }
        await response.json();
        await fetchingFlightHandler(errorObj);
        openErrorModal("successfully created new Flight",setMessage,setModalOpen,setModalTrigger);
        onload(false);
        return true;
    }catch (e) {
        openErrorModal("something went wrong try later",setMessage,setModalOpen,setModalTrigger);
        onload(false);
        return false;
    }
}

/*
*       function for fetching the flights
* */

async function fetchingFlightHandler(modalObj){
    //getting the flight from the api
    const {errorStringSetter,setModalState,setModalTrigger} = modalObj;
    try{
        let response = await fetch("http://localhost:5000/flights/");
        if(!response.ok){
            openErrorModal("could not fetch flights",errorStringSetter,setModalState,setModalTrigger);
            return null
        }
        let digest = await response.json();
        return digest.flights
    }catch (e) {
        openErrorModal("something went wrong please try later",errorStringSetter,setModalState,setModalTrigger);
        return null
    }
}

//      $$$ SEARCHING OF A FLIGHT
function filterFlight(flightList,criteriaObject,searchBy){
    let {searchString,departure,arrival} = criteriaObject;

    let found;
    if(searchBy === "Date"){
        found = flightList.filter(flight => flight.departure >= departure || flight.arrival <= arrival);
        return found;
    }

    if(searchBy === "String"){
        found = flightList.filter(flight => flight.price === searchString ||
            flight.category.includes(searchString)|| flight.destination.includes(searchString) ||
            flight.air_flight.includes(searchString) || flight.airport.includes(searchString)|| flight.air_flight_number.includes(searchString));
        return found;
    }

    if(searchBy === "Both"){
        found = flightList.filter(flight => (flight.departureTime >= departure && flight.arrivalTime <= arrival) &&
            (flight.price === searchString || flight.category.includes(searchString) || flight.planeName.includes(searchString) || flight.airport.includes(searchString)));
        return found;
    }
    //if function reaches here it means that there are no flights that meet the search
}


//      $$$     DELETION OF A FLIGHT

async function deleteFlightHandler(id,onload,errorObj) {
    const {setMessage,setModalOpen,setModalTrigger} = errorObj;
    try{
        let res = await fetch("http://localhost:5000/flights/delete",{
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                flightId : id
            })
        });

        if(!res.ok){
            onload(false);
            openErrorModal("something went wrong try later",setMessage,setModalOpen,setModalTrigger);
            return false;
        }
        onload(false);
        openErrorModal("did them deletion",setMessage,setModalOpen,setModalTrigger);
        return false;
    }catch (e) {
        onload(false);
        openErrorModal("something went wrong try later",setMessage,setModalOpen,setModalTrigger);
        return false;
    }
}

/*
*       $$$     EDITING THE PRICE OF A FLIGHT       $$$
* */
async function onEditPrice(modalFlight,newPrice,errorObj,onload){
    onload(true);
    const {setMessage,setModalOpen,setModalTrigger} = errorObj;
    try{
        let res = await fetch("http://localhost:5000/flights/updatePrice",{
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({flightId : modalFlight.id , newPrice})
        });
        if(!res.ok){
            onload(false);
            console.log("here");
            openErrorModal("something went wrong try later",setMessage,setModalOpen,setModalTrigger);
        }else{
            onload(false);
            openErrorModal("successfully edited",setMessage,setModalOpen,setModalTrigger);
        }
    }catch (e) {
        onload(false);
        openErrorModal("something went wrong try later",setMessage,setModalOpen,setModalTrigger);
        return false;
    }
}

/*
*       $$$     UPDATING USER PASSWORD      $$$
* */

async function onEditPassword(editObj,errorObj,onload){
    // before getting here make sure that the user can edit only his own password
    let {password,newPassword,name} = editObj;
    let {setMessage,setModalOpen,setModalTrigger} = errorObj;
    try{
        let res = await fetch("http://localhost:5000/worker/edit",{
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name, password, newPassword
            })
        });
        if(!res.ok){
            console.log("ok got here at least");
            onload(false);
            openErrorModal("something went wrong try later",setMessage,setModalOpen,setModalTrigger);
            return false;
        }
        onload(false);
        openErrorModal("successfully edited Password",setMessage,setModalOpen,setModalTrigger);
        return false;
    }catch (e) {
        onload(false);
        openErrorModal("something went wrong try later",setMessage,setModalOpen,setModalTrigger);
        return false;
    }
}
export {flightCreationHandler,fetchingFlightHandler,filterFlight,deleteFlightHandler,onEditPrice,onEditPassword}