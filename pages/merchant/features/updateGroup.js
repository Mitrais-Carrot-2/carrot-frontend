import Modal from "@components/Modal";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function UpdateGroup(props) {
    console.log(props.updateData)
    const [id, setId] = useState(0)
    const [group, setGroup] = useState({})
    useEffect(() => {
        setGroup({
            ...props.updateData
            // name: props.updateData.name,
            // allocation: props.updateData.allocation,
            // note: props.updateData.note,
            // managerId: props.updateData.managerId
        })
        setId(props.updateData.id)
    }, [])
    function updatePostGroup() {
        console.log("updating.....")
        console.log("val group: " + group)
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}bazaar/group/${id}`, group)
            .then((res) => {
                props.closeClick();
                // props.refreshPage();
                window.alert("Updated!");

                window.location.reload();
            })
            .catch((err) => {
                // console.log(err.response)
                if (!err.response.data.status) {
                    window.alert(err.response.data.message)
                } else {
                    window.alert("Failed: Duplicate data!")
                }
            })
    }

    const [manager, setManager] = useState([])
    const url = process.env.NEXT_PUBLIC_API_URL + `farmer/transfer/manager`
    useEffect(() => {
        axios.get(url).then(response => setManager(response.data));
    }, [])

    let options = [];
    options = manager.map(s => {
        return {
            value: s.userId,
            label: `${s.firstName} ${s.lastName}`
        }
    })

    function updateGroup() {
        return (
            <>
                <form>
                    <h3></h3>
                    <div className="group-details text-left">
                        <label>Group Name:</label>
                        <input
                            id="group-name-input"
                            value={group.name}
                            type="text"
                            name="groupName"
                            onChange={(item) => setGroup({ ...group, name: item.target.value })}
                        />

                        <label>Group Notes:</label>
                        <input
                            id="group-notes-input"
                            value={group.note}
                            type="text"
                            name="groupNote"
                            onChange={(item) => setGroup({ ...group, note: item.target.value })}
                        />

                        <label>Carrot Allocation:</label>
                        <input
                            id="group-carrot-input"
                            value={group.allocation}
                            type="number"
                            name="groupAllocation"
                            onChange={(item) => setGroup({ ...group, allocation: item.target.value, managerId: 1 })}
                        />

                        {/* <label>Manager:</label>
                        <Select className="my-2"
                            value={group.managerId}
                            id='manager-id'
                            name="manager-id"
                            options={options}
                            onChange={(item) => setGroup({ ...group, managerId: item.value })}
                        /> */}
                        {/* {setGroup({ ...group, managerId: 1 })} */}
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
                title="Update Group"
                body={updateGroup()}
                action="Update Group"
                closeClick={props.closeClick}
                actionClick={updatePostGroup}
            />

        </>
    )
}