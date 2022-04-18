import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

export default function BuyItemModal(props) {
    return (
        <Modal isOpen={props.show} toggle={props.toggle} centered>
            {console.log("Buy Item Confirmation Modal showing")}
            <div className="modal-header modal-title">
                CONFIRMATION
                <button className="close hover:opacity-50" aria-label="Close" onClick={props.toggle}>
                    <span aria-hidden={true}>&times;</span>
                </button>
            </div>
            <ModalBody>
                <p>Buy 1 <span className="font-bold">{props.object.name}?</span></p>
            </ModalBody>
            <ModalFooter>
                <button className="btn text-red-600 border-transparent hover:border-red-600 hover:bg-transparent hover:text-red-600 mx-1" onClick={props.toggle}>Cancel</button>  
                <button id="btn-buy-confirm" className="btn btn-primary" onClick={()=>props.action(props.object)}>Buy</button>
            </ModalFooter>

        </Modal>
    )
}
