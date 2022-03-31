import axios from "axios";
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useState } from "react";
import Modal from "@components/Modal";

export default function CreateBazaar(props) {
    const [modalCreateBazaar, setModalCreateBazaar] = useState(false);
    const [bazaar, setBazaar] = useState({
        bazaarName: "",
        startDate: "",
        endDate: "",

    })


    function postBazaar() {
        axios.post("http://localhost:8181/api/bazaar", bazaar)
    }

    // function createBazaar() {
    //     return (
    //         <>
    //             <form>

    //             </form>
    //         </>
    //     )
    // }

    function createBazaar() {
        return (
            <>
                <form>
                    <h3></h3>
                    <div className="bazaar-details">
                        <label>Bazaar Name:</label>
                        <input
                            value={bazaar.bazaarName}
                            type="text"
                            name="bazaarName"
                            onChange={(item) => setBazaar({ ...bazaar, bazaarName: item.target.value })}
                        />

                        <label>Start Date:</label>
                        <input
                            value={bazaar.startDate}
                            type="date"
                            name="startDate"
                            onChange={(item) => setBazaar({ ...bazaar, startDate: item.target.value })}
                        />

                        <label>End Date:</label>
                        <input
                            value={bazaar.endDate}
                            type="date"
                            name="endDate"
                            onChange={(item) => setBazaar({ ...bazaar, endDate: item.target.value })}
                        />
                    </div>
                </form>
                <style jsx>{`
                .bazaar-details {
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: column wrap;
                    justify-content: center;
                }
                .bazaar-details input {
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 10px;
                }
            `}</style>
            </>
        )
    }

    return (
        <>
            {/* <Modal
                size="lg"
                className="sm:w-full md:w-full lg:w-1/3"
                toggle={() => setModalCreateBazaar(!modalCreateBazaar)}
                isOpen={modalCreateBazaar}
            // closeClick={props.closeClick}
            >
                <div className="modal-header">
                    <h5 className="text-sm modal-title" id="exampleModalLabel">
                        Bazaar
                    </h5>
                    <button
                        aria-label="Close"
                        className=" close"
                        type="button"
                        onClick={() => setModalCreateBazaar(!modalCreateBazaar)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody>
                    {createBazaar()}
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="text-red-600 border-transparent hover:border-red-600 hover:bg-transparent hover:text-red-600"
                        type="button"
                        onClick={() => setModalCreateBazaar(!modalCreateBazaar)}
                    >
                        Close
                    </Button>

                    <Button
                        className="bg-green-600 border-none hover:bg-green-700"
                        type="button"
                        onClick={postBazaar}
                    >
                        Create Bazaar
                    </Button>
                </ModalFooter>
            </Modal> */}
            <div id="modal">
                <Modal
                    title="Create Bazaar"
                    body={createBazaar()}
                    action="Create Bazaar"
                    closeClick={props.closeClick}
                    actionClick={postBazaar}
                />
            </div>
        </>
    )
}