import Modal from "@components/Modal";
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function UpdateBazaarImage(props) {
    console.log(props.updateData)
    const [id, setId] = useState(0)
    const [modalImage, setModalImage] = useState(false);
    const [imageFormData, setImageFormData] = useState({});
    // const [group, setGroup] = useState({})
    useEffect(() => {
        setId({
            ...props.updateData
            // name: props.updateData.name,
            // allocation: props.updateData.allocation,
            // note: props.updateData.note,
            // managerId: props.updateData.managerId
        })
    }, [])
    function updateItemImage() {
        console.log("updating.....")
        const formData = new FormData();
        formData.append("file", imageFormData, imageFormData.name);
        axios
            .put(`${process.env.NEXT_PUBLIC_API_URL}bazaar/uploadImage/${props.updateData}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res);
                // setModalImage(false);

                setImageFormData({});
                window.alert("Successfully updated");
                props.closeClick();
                props.refreshPage();
            })
            .catch((err) => {
                console.log(err);
                window.alert("Failed to update");
            });
    }

    function updateGroup() {
        return (
            <>
                <div className="barn-details">
                    <label>Insert image:</label>
                    <input
                        id="item-image-input"
                        type="file"
                        name="image-file"
                        onChange={(e) => {
                            setImageFormData(e.target.files[0]);
                        }}
                    />
                </div>
                <style>{`
                .barn-details {
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: column wrap;
                    justify-content: center;
                }
                .barn-details input {
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
                title="Upload Item Image"
                body={updateGroup()}
                action="Change Item Image"
                closeClick={props.closeClick}
                actionClick={updateItemImage}
            />

        </>
    )
}