import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Modal from "@components/Modal";
export default function CreateItem(props) {

    //limitasi:
    //harus masukin id buat bazaarnya

    const [modalCreateItem, setModalCreateItem] = useState(true);
    const [bazaarItem, setBazaarItem] = useState({
        bazaar: 1,
        name: "",
        price: 1,
        quantity: 1,
        description: "",
    })

    const [bazaar, setBazaar] = useState([])
    const url = process.env.NEXT_PUBLIC_API_URL + 'bazaar'
    useEffect(() => {
        axios.get(url).then(response => setBazaar(response.data));
    }, [])

    let options = [];
    options = bazaar.map(s => {
        return {
            value: s.id,
            label: `${s.bazaarName}`
        }
    })

    function postItem() {
        //let id = 53;
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}bazaar/${bazaarItem.bazaar}/item`, bazaarItem)
            .then((res) => {
                window.alert(res.data.message)
                props.closeClick();
                props.refreshPage();
            })
            .catch(err => {
                console.log(err.response)
                if (!err.response.data.status) {
                    window.alert(err.response.data.message)
                } else {
                    window.alert("Failed: Bazaar Not Selected!")
                }
            })
    }

    function addItem() {
        return (
            <>
                <form>
                    <h3></h3>
                    <div className="group-details">
                        <label>Bazaar Name:</label>
                        {/* <input
                            value={bazaarItem.bazaar}
                            type="number"
                            name="bazaarName"
                            onChange={(item) => setBazaarItem({ ...bazaarItem, bazaar: item.target.value })}

                        /> */}
                        <Select className="my-2"
                            id='bazaar-id'
                            name="bazaar-id"
                            options={options}
                            onChange={(item) => setBazaarItem({ ...bazaarItem, bazaar: item.value })}
                        />

                        <label>Item Name:</label>
                        <input
                            value={bazaarItem.name}
                            type="text"
                            name="itemName"
                            onChange={(item) => setBazaarItem({ ...bazaarItem, name: item.target.value })}

                        />

                        <label>Item Price:</label>
                        <input
                            value={bazaarItem.price}
                            type="number"
                            name="itemPrice"
                            onChange={(item) => setBazaarItem({ ...bazaarItem, price: item.target.value })}

                        />

                        <label>Item Quantity:</label>
                        <input
                            value={bazaarItem.quantity}
                            type="number"
                            name="itemQuantity"
                            onChange={(item) => setBazaarItem({ ...bazaarItem, quantity: item.target.value })}

                        />

                        <label>Item Description:</label>
                        <input
                            value={bazaarItem.description}
                            type="text"
                            name="itemDescription"
                            onChange={(item) => setBazaarItem({ ...bazaarItem, description: item.target.value })}
                        />
                    </div>
                </form>
                <style jsx>{`
                        .group-details {
                            padding: 20px;
                            display: flex;
                            flex-direction: column;
                            flex-wrap: column wrap;
                            justify-content: center;
                        }
                        .group-details input {
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
            <Modal
                title="Add New Item"
                body={addItem()}
                action="Create Item"
                closeClick={props.closeClick}
                actionClick={postItem}
            />
        </>
    )
}