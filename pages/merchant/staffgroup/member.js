import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import Head from "@components/Head";
import Merchant from "@components/Merchant/Merchant";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AddGroupMember from "../features/addMember";


export default function StaffGroupMember(props) {
    const router = useRouter();
    // console.log(props.router.query.groupId)
    const { query: { groupId }, } = router
    // console.log("query group id" + groupId)
    const [id, setId] = useState(0);
    const [members, setMembers] = useState([]);
    const [showAddMember, setShowAddMember] = useState(false);
    const [group, setGroup] = useState({
        // id: 0,
        // name: "",
        // allocation: 1,
        // note: "",
        // managerId: 1
    })
    const url = `${process.env.NEXT_PUBLIC_API_URL}bazaar/group/${groupId}`
    // axios.get(`${process.env.NEXT_PUBLIC_API_URL}bazaar/group/details/${groupId}`).then(response => setGroup(response.data));
    // console.log(group)
    useEffect(() => {
        // console.log(props.router.query.groupId)
        // console.log("useEffect gid: " + groupId)
        // console.log("usse effect gid: " + groupId)
        setId(groupId);
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}bazaar/group/details/${groupId}`).then(response => setGroup(response.data));
        console.log(group)
        axios.get(url).then(response => setMembers(response.data));

        // setGroup({
        //     name: props.groupData.name,
        //     allocation: props.groupData.allocation,
        //     note: props.groupData.note,
        //     managerId: props.groupData.managerId
        // });

    }, [])


    function reloadPage() {
        window.location.reload();
    }

    function handleAddMember(member) {
        setId(groupId);
        axios.get(url).then(response => setMembers(response.data));
    }

    return (
        <body>
            <Head title={"Merchant"} />
            <Navbar />
            <Merchant />
            <div className="container">
                <section className="group-table">
                    <div className="row d-flex px-10">
                        <h2 className="col-md-6 pl-0 text-grey ml-0 mb-2">Group Details</h2>
                    </div>
                    <div className="container mx-auto sm: px-4 search-box py-3 overflow-x-auto">
                        <table className="text-center table table-hover mt-3">
                            <thead>
                                <tr>


                                    <th itemScope="col" aria-rowspan={2}>Group Name</th>
                                    <th itemScope="col" aria-rowspan={2}>Manager</th>
                                    <th itemScope="col" aria-rowspan={2}>Allocation</th>
                                    <th itemScope="col" aria-rowspan={2}>Note</th>
                                </tr>
                            </thead>

                            <tr>

                                <td>{group.name}</td>
                                <td>{group.managerName}</td>
                                <td>{group.allocation}</td>
                                <td>{group.note}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="row d-flex px-10">
                        <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0 mb-2">Group Member Dashboard</h2>
                    </div>
                    <div className="container mx-auto sm: px-4 search-box py-3 overflow-x-auto">
                        <div className="row d-flex px-4">
                            <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0">Member List</h2>
                            <div className="col-md-6">
                                <button
                                    id="add-member-button"
                                    className="col-sm-6 btn bg-[#17a2b8] text-white mt-4 pull-right radius-5"
                                    onClick={() => {
                                        setShowAddMember(true);
                                    }}
                                >

                                    {" "}
                                    Add New Member
                                </button>
                                {showAddMember && <AddGroupMember closeClick={setShowAddMember} refreshPage={handleAddMember} groupId={id} />}
                            </div>
                        </div>
                        <table className="text-center table table-hover mt-3">
                            <thead>
                                <tr>
                                    <th itemScope="col" aria-rowspan={2}>#</th>
                                    <th itemScope="col" aria-rowspan={2} style={{ display: "none" }}>id</th>
                                    <th itemScope="col" aria-rowspan={2}>Name</th>
                                    <th itemScope="col" aria-rowspan={2}>JF</th>
                                    <th itemScope="col" aria-rowspan={2}>Grade</th>
                                    <th itemScope="col" aria-rowspan={2}>Office</th>
                                    {/* <th itemScope="col" aria-rowspan={2}>Action</th> */}
                                </tr>
                            </thead>
                            <tbody id="member-row">
                                {members
                                    .sort((a, b) => { return a.id - b.id })
                                    .map((data, index) => (
                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td style={{ display: "none" }}>{data.id}</td>
                                            {console.log("the data id: " + data.id)}
                                            <td>{data.name}</td>
                                            <td>{data.jf}</td>
                                            <td>{data.grade}</td>
                                            <td>{data.office}</td>
                                            {/* <td>
                                            <button type="button" className="btn border-blue-600 mr-2"
                                                onClick={() => {
                                                    // console.log(data) 
                                                    // setShowUpdateGroup(true);
                                                    // setSelectedGroup(data)
                                                }}
                                            >
                                                <i className="fa fa-edit text-blue-600 fa-x px-1">

                                                </i>
                                            </button> */}
                                            {/* {showUpdateGroup && <UpdateGroup closeClick={setShowUpdateGroup} updateData={selectedGroup} refreshPage={reloadPage} />} */}
                                            {/* </td> */}
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
            <Footer />
        </body>
    )
}