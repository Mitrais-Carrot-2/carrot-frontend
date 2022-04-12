import Modal from "@components/Modal";
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function UpdateItem(props) {
    console.log(props.updateData)
    const [id, setId] = useState(0)
    const [itemDetail, setItemDetail] = useState({
        name: "",
        price: 1,
        quantity: 1,
        description: "",
    })
    const [showModal, setShowModal] = useState()
    useEffect(() => {
        setItemDetail({
            // ...props.updateData
            name: props.updateData.name,
            price: props.updateData.price,
            quantity: props.updateData.quantity,
            description: props.updateData.description
        })
        setId(props.updateData.id)
    }, [])
    function updatePostItem() {
        console.log("updating.....")
        console.log("val item: " + itemDetail)
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}bazaar/item/${id}`, itemDetail)
            .then((res) => {
                window.alert(res.data.message);
                props.closeClick();

                props.refreshPage();
            })
            .catch((err) => {
                window.alert("Update Error!");
            })
    }

    function updateItem() {
        return (
            <>
                <form>
                    <h3></h3>
                    <div className="group-details">
                        <label>Item Name:</label>
                        <input
                            value={itemDetail.name}
                            type="text"
                            name="itemName"
                            onChange={(item) => setItemDetail({ ...itemDetail, name: item.target.value })}
                            required
                        />

                        <label>Item Price:</label>
                        <input
                            value={itemDetail.price}
                            type="number"
                            name="itemPrice"
                            onChange={(item) => setItemDetail({ ...itemDetail, price: item.target.value })}

                        />

                        <label>Item Quantity:</label>
                        <input
                            value={itemDetail.quantity}
                            type="number"
                            name="itemQuantity"
                            onChange={(item) => setItemDetail({ ...itemDetail, quantity: item.target.value })}

                        />

                        <label>Item Description:</label>
                        <input
                            value={itemDetail.description}
                            type="text"
                            name="itemDescription"
                            onChange={(item) => setItemDetail({ ...itemDetail, description: item.target.value })}
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
                title="Update Item"
                body={updateItem()}
                action="Update Item"
                closeClick={props.closeClick}
                actionClick={updatePostItem}
            />

        </>
    )
}