import Modal from "@components/Modal";
import axios from "axios";
import React, { useState } from "react";


export default function CreateGroup(props) {
    const [group, setGroup] = useState({
        name: "",
        allocation: 1,
        note: "",
        managerId: 1
    })

    function postGroup() {
        console.log(group)
        axios.post(basePath+"bazaar/group/", group)
            .then((res) => {
                props.closeClick();
                props.refreshPage();
            })
    }

    function createGroup() {
        return (
            <>
                <form>
                    <h3></h3>
                    <div className="group-details">
                        <label>Group Name:</label>
                        <input
                            value={group.name}
                            type="text"
                            name="groupName"
                            onChange={(item) => setGroup({ ...group, name: item.target.value })}
                        />

                        <label>Group Notes:</label>
                        <input
                            value={group.note}
                            type="text"
                            name="groupNote"
                            onChange={(item) => setGroup({ ...group, note: item.target.value })}
                        />

                        <label>Carrot Allocation:</label>
                        <input
                            value={group.allocation}
                            type="number"
                            name="groupAllocation"
                            onChange={(item) => setGroup({ ...group, allocation: item.target.value })}
                        />

                        <label>Manager:</label>
                        <input
                            value={group.managerId}
                            type="number"
                            name="groupManager"
                            onChange={(item) => setGroup({ ...group, managerId: item.target.value })}
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
                title="Create Group"
                body={createGroup()}
                action="Create Group"
                closeClick={props.closeClick}
                actionClick={postGroup}
            />

        </>
    )
}