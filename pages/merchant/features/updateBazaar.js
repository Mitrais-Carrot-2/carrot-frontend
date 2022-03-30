import axios from "axios";
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useEffect, useState } from "react";
import Modal from "@components/Modal";

export default function UpdateBazaar(props) {
    const [modalUpdateBazaar, setModalUpdateBazaar] = useState(false);
    const [id, setId] = useState(0)
    const [bazaar, setBazaar] = useState({
        bazaarName: "",
        startDate: "",
        endDate: "",

    })

    useEffect(() => {
        setBazaar({
            bazaarName: props.updateData.bazaarName,
            startDate: props.updateData.startDate,
            endDate: props.updateData.endDate,
        })
        setId(props.updateData.id)
    }, [])

    function updatePostBazaar() {
        axios.put(`http://localhost:8181/api/bazaar/${id}`, bazaar)
            .then((res) => {
                props.closeClick();
                props.refreshPage();
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

    function updateBazaar() {
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
                    title="Update Bazaar"
                    body={updateBazaar()}
                    action="Update Bazaar"
                    closeClick={props.closeClick}
                    actionClick={updatePostBazaar}
                />
            </div>
        </>
    )
}