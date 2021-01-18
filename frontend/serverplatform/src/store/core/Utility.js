function openErrorModal(errorString,errorStringSetter,setModalState,modalTrigger){
    errorStringSetter(errorString);
    modalTrigger("error");
    setModalState(true);
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