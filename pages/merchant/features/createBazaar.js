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
        axios.post(basePath+"bazaar", bazaar)
            .then((res) => {
                if (res.data.status) {
                    window.alert(res.data.message)
                    props.closeClick();
                    props.refreshPage();
                }

            })
            .catch(err => {
                window.alert("Failed: Duplicate data!")
                // props.closeClick();
                // props.refreshPage();
            })
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