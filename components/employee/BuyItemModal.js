import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

export default function BuyItemModal(props) {
    return (
        <Modal isOpen={props.show} toggle={props.toggle} centered>
            <div class="modal-header modal-title">
                Buy 1 {props.object.name}?
                <button className="close" aria-label="Close" onClick={props.toggle}>
                    <span aria-hidden={true}>&times;</span>
                </button>
            </div>
            <ModalFooter>
                <button className="btn text-red-600 border-transparent hover:border-red-600 hover:bg-transparent hover:text-red-600 mx-1" onClick={props.toggle}>Cancel</button>  
                <button className="btn btn-primary" onClick={()=>props.action(props.object)}>Buy</button>
            </ModalFooter>

        </Modal>
    )
}
