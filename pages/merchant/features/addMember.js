import Modal from "@components/Modal";
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function AddGroupMember(props) {
    const [id, setId] = useState(0);
    const [member, setMember] = useState({
        userId: 1,
    })

    useEffect(() => {
        setId(props.groupId)
    })

    function postMember() {
        console.log(member)
        axios.post(`http://localhost:8181/api/bazaar/group/${id}`, member)
            .then((res) => {
                props.closeClick();
                props.refreshPage();
            })
    }

    function addMember() {
        return (
            <>
                <form>
                    <h3></h3>
                    <div className="group-details">
                        <label>Staff name:</label>
                        <input
                            value={member.userId}
                            type="number"
                            name="memberId"
                            onChange={(item) => setGroup({ ...member, userId: item.target.value })}
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
                title="Add New Member"
                body={addMember()}
                action="Create Group"
                closeClick={props.closeClick}
                actionClick={postMember}
            />

        </>
    )
}