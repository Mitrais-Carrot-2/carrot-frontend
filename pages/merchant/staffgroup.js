import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import Head from "@components/Head";
import Merchant from "@components/Merchant/Merchant";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CreateGroup from "./features/createGroup";
import UpdateGroup from "./features/updateGroup";
import AddGroupMember from "./features/addMember";
import Link from "next/link";

export default function StaffGroup(props) {
    const router = useRouter();

    const url = process.env.NEXT_PUBLIC_API_URL + 'bazaar/group/'
    const [groups, setGroup] = useState([]);
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [showUpdateGroup, setShowUpdateGroup] = useState(false);
    const [showMember, setShowMember] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState({});

    useEffect(() => {
        axios.get(url).then(response => setGroup(response.data));
    }, [])

    function reloadPage() {
        window.location.reload();
    }

    function testKlik() {
        console.log("clicked button " + selectedGroup)
    }

    return (
        <body>
            <Head />
            <Navbar />
            <Merchant />
            <div className="container">
                <section className="group-table">
                    <div className="row d-flex px-10">
                        <h2 className="col-md-6 pl-0 text-grey ml-0 mb-2">Staff Group Dashboard</h2>
                    </div>
                    <div className="mx-auto sm: px-4 search-box py-3">
                        {/* <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0">Group List</h2> */}
                        <div className="row d-flex px-4 items-center">
                            <div className="col-md-6">
                                <hr className="box-title-hr mt-3" />
                                <h4 className="mt-1 mb-3 text-lg text-grey ml-0 font-bold tracking-widest">Group List</h4>
                            </div>
                            <div className="col-md-6">
                                <button
                                    id="create-group-button"
                                    className="col-sm-6 btn btn-info mt-4 pull-right radius-5"
                                    onClick={() => {
                                        setShowCreateGroup(true);
                                    }}
                                >

                                    {" "}
                                    Create New Group
                                </button>
                                {showCreateGroup && <CreateGroup closeClick={setShowCreateGroup} refreshPage={reloadPage} />}
                            </div>
                        </div>
                        <table className="table table-hover mt-3">
                            <thead>
                                <tr>
                                    <th itemScope="col" aria-rowspan={2}>#</th>
                                    <th itemScope="col" aria-rowspan={2} style={{ display: "none" }}>id</th>
                                    <th itemScope="col" aria-rowspan={2} style={{ display: "none" }}>managerId</th>
                                    <th itemScope="col" aria-rowspan={2}>Group Name</th>
                                    <th itemScope="col" aria-rowspan={2}>Allocation</th>
                                    <th itemScope="col" aria-rowspan={2}>Total Member</th>
                                    <th itemScope="col" aria-rowspan={2}>Total Carrot</th>
                                    <th itemScope="col" aria-rowspan={2}>Note</th>
                                    <th itemScope="col" aria-rowspan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groups
                                    .sort((a, b) => { return a.id - b.id })
                                    .map((data, index) => (
                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td style={{ display: "none" }}>{data.id}</td>
                                            {console.log("the data id: " + data.id)}
                                            <td style={{ display: "none" }}>{data.managerId}</td>
                                            <td>{data.name}</td>
                                            <td>{data.allocation}</td>
                                            <td>{data.totalMember}</td>
                                            <td>{data.total}</td>
                                            <td>{data.note}</td>
                                            <td>
                                                <button type="button" className="btn border-blue-600 mr-2 mx-1 my-1"
                                                    onClick={() => {
                                                        setShowMember(true)
                                                        setSelectedGroup(data)
                                                        // console.log("this is onclick data id : " + data.id)
                                                        // testKlik();
                                                        router.push({
                                                            pathname: "/merchant/staffgroup/member",
                                                            query: { groupId: data.id }
                                                        },
                                                        )
                                                        // props.history.push({
                                                        //     pathname: '/merchant/staffgroup/member'
                                                        //     selectedGroup
                                                        // })

                                                    }}
                                                >
                                                    {/* <Link
                                                    href={{
                                                        pathname: '/staffgroup/member',
                                                        query: { groupId: selectedGroup.id }
                                                    }}> */}
                                                    <i className="fa fa-users text-blue-600 fa-x px-1">

                                                    </i>
                                                    {/* </Link> */}
                                                </button>
                                                <button type="button" className="btn border-blue-600 mr-2 mx-1 my-1"
                                                    onClick={() => {
                                                        // console.log(data) 
                                                        setShowUpdateGroup(true);
                                                        setSelectedGroup(data)
                                                    }}
                                                >

                                                    <i className="fa fa-edit text-blue-600 fa-x px-1">

                                                    </i>


                                                </button>
                                                {/* {showMember && <Link />} */}
                                                {/* {showMember && <AddGroupMember groupData={selectedGroup} />} */}
                                                {showUpdateGroup && <UpdateGroup closeClick={setShowUpdateGroup} updateData={selectedGroup} refreshPage={reloadPage} />}
                                            </td>
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