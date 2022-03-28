import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import Head from "@components/Head";
import Merchant from "@components/Merchant/Merchant";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function StaffGroup() {
    const router = useRouter();

    const url = 'http://localhost:8181/api/bazaar/group'
    const [groups, setGroup] = useState([]);

    useEffect(() => {
        axios.get(url).then(response => setGroup(response.data));
    }, [])
    // console.log(bazaar)



    const renderTable = () => {
        let initId = 0
        return groups.map((item, index) => {
            <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.managerId}</td>
                <td>{item.allocation}</td>
                <td>{item.note}</td>
            </tr>
        })
    }



    return (
        <body>

            <Head />
            <Navbar />
            <Merchant />
            <section className="group-table">
                <div className="row d-flex px-10">
                    <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0 mb-2">Staff Group Dashboard</h2>
                </div>
                <div className="container mx-auto sm: px-4 search-box py-3">
                    <div className="row d-flex px-4">
                        <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0">Group List</h2>
                        <div className="col-md-6">
                            <button className="col-sm-6 btn btn-info mt-4 pull-right radius-5">
                                {" "}
                                Create New Group
                            </button>
                        </div>
                    </div>
                    <table className="table table-hover mt-3">
                        <thead>
                            <tr>
                                <th itemScope="col" aria-rowspan={2}>#</th>
                                <th itemScope="col" aria-rowspan={2}>Group Name</th>
                                <th itemScope="col" aria-rowSpan={2}>Manager</th>
                                <th itemScope="col" aria-rowSpan={2}>Allocation</th>
                                <th itemScope="col" aria-rowspan={2}>Note</th>
                                <th itemScope="col" aria-rowspan={2}>Action</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>1</td>
                            <td>Test Group</td>
                            <td>2</td>
                            <td>200</td>
                            <td>This is a note</td>
                            {/* <td></td> */}
                        </tr>
                        {groups.map((data, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.managerId}</td>
                                <td>{data.allocation}</td>
                                <td>{data.note}</td>
                                <td></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </section>
            <Footer />
        </body>
    )
}