/*
*           """         GENERAL HELPER FUNCTIONS FOUND HERE         """
*
* */


// STRING SETTER FUNCTION
function onSetString(e,setString){
    setString(e.target.value);
}

//ALERT OPENER FUNCTION
function onOpenAlert(alertType,setAlertOpen,setAlertType){
    setAlertType(alertType);
    setAlertOpen(true);
}

export {onSetString,onOpenAlert};