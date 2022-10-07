

function Modal(props) {
    // dasmit wir an der Stelle wo wir das Modal einbinden ein Event entgegen nehmen können benötigen wir ein z.B. Probs Objekt auf der Component function
    function closeModalHandler() {
        props.closeModal()
    }

    return <div className="backdrop">
        <div className="modal">
            <h2> Möchten Sie das Item löschen ?</h2>
            <div className="btnBox">
                {/* wir können entweder eine extra funktion schreiben oder direkt auf dem probs Objekt closeModal ausführen */}
                {/* auf dem eingebunden Modal in TodosComponen verarbeiten wir das Event */}
                <button className="btnBreak" onClick={closeModalHandler}> abbrechen </button>
                <button className="btnConfirm" onClick={props.closeModal}> bestätigen </button>
            </div>
        </div>
    </div>
}

export default Modal