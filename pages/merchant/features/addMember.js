import Modal from "@components/Modal";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";


export default function AddGroupMember(props) {
    const [id, setId] = useState(0);
    const [member, setMember] = useState({
        userId: 1,
    })
    const [staff, setStaff] = useState([])
    const url = `${basePath}user/`
    useEffect(() => {
        axios.get(url).then(response => setStaff(response.data));
    }, [])

    let options = [];
    options = staff.map(s => {
        return {
            value: s.id,
            label: `${s.firstName} ${s.lastName}`
        }
    })

    useEffect(() => {
        setId(props.groupId)
    })

    function postMember() {
        console.log(member)
        axios.post(`${basePath}bazaar/group/${props.groupId}`, member)
            .then((res) => {
                window.alert("Staff Added!")
                props.closeClick();
                props.refreshPage();
            })
            .catch(err => {
                window.alert("Failed: Duplicate data!")
                // props.closeClick();
                // props.refreshPage();
            })
    }

    function addMember() {
        return (
            <>
                <form>
                    <h3></h3>
                    <div className="group-details">
                        <label>Staff name:</label>
                        {/* <input
                            value={member.userId}
                            type="number"
                            name="memberId"
                            onChange={(item) => setGroup({ ...member, userId: item.target.value })}
                        /> */}
                        <Select className="my-2"
                            id='bazaar-id'
                            name="bazaar-id"
                            options={options}
                            onChange={(item) => setMember({ ...member, userId: item.value })}
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