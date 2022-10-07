import Modal from "./modal"
import { useState } from 'react';  // importiert eine Art ngIf von React


function Todo(props) {
    // useState gibt einen Array mit zwei Werten zurück (1. aktueller State, 2. Funktion die den State ändert auf den Argumentnamen)
    // Schreibweise: Array-Destructoring
    const [modalIsOpen, setModalState] = useState(false);

    function deleteHandler() {
        // ändert State auf Argumentnamen
        setModalState(true)
    }

    function closeModalHandler() {
        setModalState(false)
    }

    return <div className='card'>
        <h2> {props.name}</h2>  {/* in {} können wir auch berechnungen ausführen qie 1+1 */}
        {/* wenn wir den deleteHandler() mit Klammern schreiben wird die Funktion beim Laden der Zeile bereits ausgeführt */}
        <button className='deleteBTN' onClick={deleteHandler}>Delete</button>
        {/* wir empfangen das closeModal Event und führen damit eine Funktion aus die das Modal schließt */}
        {modalIsOpen ? <Modal closeModal={closeModalHandler} /> : null}  {/* zeigt die Modal Component nur an wenn modalIsOpen true ist */}
        {/* alternative Schreibweise wäre {modalIsOpen && <Modal />} */}

    </div>
}

export default Todo