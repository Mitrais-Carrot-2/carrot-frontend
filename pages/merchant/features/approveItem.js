import axios from "axios";
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useEffect, useState } from "react";
import Modal from "@components/Modal";

export default function ApproveItem(props) {
    const [id, setId] = useState(0)

    useEffect(() => {
        setId(props.updateData)
        // console.log(id, bazaar)
    }, [])

    function putApproveItem() {
        axios.put(`http://localhost:8181/api/exchange?Exchange%20ID=${id}&Status=APPROVED`)
            .then((res) => {
                window.alert("Success!")
                props.closeClick();
                props.refreshPage();
            })
            .catch(err => {
                window.alert("Failed!")

            })
    }

    function approveItem() {
        return (
            <>
                <h1>CLICK THE "APPROVE" BUTTON TO CONTINUE APPROVING</h1>

            </>
        )
    }

    return (
        <>

            <div id="modal">
                <Modal
                    title="Approve Item?"
                    body={approveItem()}
                    action="Approve"
                    closeClick={props.closeClick}
                    actionClick={putApproveItem}
                />
            </div>
        </>
    )
}