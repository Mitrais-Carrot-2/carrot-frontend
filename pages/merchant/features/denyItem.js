import axios from "axios";
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useEffect, useState } from "react";
import Modal from "@components/Modal";

export default function DenyItem(props) {
    const [id, setId] = useState(0)

    useEffect(() => {
        setId(props.updateData)
        // console.log(id, bazaar)
    }, [])

    function putDenyItem() {
        axios.put(`http://localhost:8181/api/exchange?exchangeId=${id}&status=DENIED`)
            .then((res) => {
                window.alert("Success!")
                props.closeClick();
                props.refreshPage();
            })
            .catch(err => {
                window.alert("Failed!")

            })
    }

    function denyItem() {
        return (
            <>
                <h1>CLICK THE "DENY" BUTTON TO DENY</h1>

            </>
        )
    }

    return (
        <>

            <div id="modal">
                <Modal
                    title="Deny Item?"
                    body={denyItem()}
                    action="Deny"
                    closeClick={props.closeClick}
                    actionClick={putDenyItem}
                />
            </div>
        </>
    )
}