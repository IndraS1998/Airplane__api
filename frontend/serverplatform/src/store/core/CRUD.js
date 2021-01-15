//      $$$     creation of a new flight    $$$
function flightCreationHandler(timeObj,flightObj,workerObj,onload){
    onload(true);
    const date = new Date();
    const actualDay = date.toLocaleString();
    //destructure all required props
    const {departureTime,arrivalTime} = timeObj;
    const {price,category,planeName,airport} = flightObj;
    const {cname,cid,cdept} = workerObj;
    //validate all props ie make sure there is no null value
    if((departureTime > arrivalTime)||(departureTime < actualDay)){
        console.log("here ;)");
        onload(false);
        return null;
    }
    if(!departureTime || !arrivalTime  || !price || category.length < 1
        || planeName.length < 1 || airport.length < 1 || cname.length < 1 || !cid || cdept.length < 1){
            alert("enter all data please");
            console.log("departureTime",departureTime,"arrivalTime",arrivalTime,
                "price:",price,"category.length",category.length, "planeName.length:",planeName.length,
                "airport.length:",airport.length,airport,"cname.length:", cname.length,"cid",cid,"cdept.length:",cdept.length);
            onload(false);
            return false;
    }
    //save the flight
    const newFlight = {
        id : Math.floor(10 * Math.random()),
        departureTime, arrivalTime, price, category,
        planeName, airport,cname,cid,cdept,
        booked : false,
        dateCreated : actualDay
    };
    onload(false);
    return newFlight;
}


export {flightCreationHandler}