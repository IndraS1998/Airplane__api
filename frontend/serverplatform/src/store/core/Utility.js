function openErrorModal(errorString,errorStringSetter,setModalState,modalTrigger){
    errorStringSetter(errorString); //setting the message to be displayed
    modalTrigger("error"); //modal trigger to determine what type of modal to open
    setModalState(true);    //opening the modal
}

/*
*           $$$     OPENING AN ITEM FOR THE DELETE MODAL        $$$
* */
function openItem(setModalState,modalTrigger,setModalFlight,flight,modalOption){
    setModalFlight(flight);
    if(modalOption){
        modalTrigger("delete");
    }
    setModalState(true);
}

export {openErrorModal,openItem};