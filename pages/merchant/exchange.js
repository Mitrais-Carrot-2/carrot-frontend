import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import Head from "@components/Head";
import Merchant from "@components/Merchant/Merchant";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import CreateBazaar from "./features/createBazaar";
import UpdateBazaar from "./features/updateBazaar";
import ApproveItem from "./features/approveItem";
import DenyItem from "./features/denyItem";

export default function Exchange() {
    const router = useRouter();

    const url = 'http://localhost:8181/api/exchange'
    const [exchange, setExchange] = useState([]);
    // const [user, setUser] = useState({});
    // const [item, setItem] = useState({});
    const [showApproveItem, setShowApproveItem] = useState(false);
    const [showDenyItem, setShowDenyItem] = useState(false);

    const [showUpdateBazaar, setShowUpdateBazaar] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const [selectedBazaar, setSelectedBazaar] = useState({});

    useEffect(() => {
        axios.get(url).then(response =>
            setExchange(response.data)
        );
    }, [])
    // console.log(bazaar)


    function reloadPage() {
        window.location.reload();
    }

    return (
        <body>
            <Head />
            <Navbar />
            <Merchant />
            <div className="container">
                <section className="bazaar-table">
                    <div className="row d-flex px-10">
                        <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0 mb-2">Exchange Dashboard</h2>
                    </div>
                    <div className="container mx-auto sm: px-4 search-box py-3">
                        <div className="row d-flex px-4">
                            <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0">Exchange List</h2>
                        </div>
                        <table className="text-center table table-hover mt-3">
                            <thead>
                                <tr>
                                    <th itemScope="col" aria-rowspan={2}>#</th>
                                    <th itemScope="col" aria-rowspan={2} style={{ display: "none" }}>id</th>
                                    <th itemScope="col" aria-rowspan={2}>User</th>
                                    <th itemScope="col" aria-rowspan={2}>Exchange Date</th>
                                    <th itemScope="col" aria-rowspan={2}>Item</th>
                                    <th itemScope="col" aria-rowspan={2}>Price</th>
                                    <th itemScope="col" aria-rowspan={2}>Status</th>
                                    <th itemScope="col" aria-rowspan={2}>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {exchange.map((data, index) => (
                                    <tr key={index + 1}>
                                        <td>{index + 1}</td>
                                        <td style={{ display: "none" }}>{data.id}</td>
                                        <td>{data.buyer}</td>
                                        <td>{data.exchangeDate}</td>
                                        <td>{data.item}</td>
                                        <td>{data.price}</td>
                                        {data.status == "REQUESTED" ?
                                            <>
                                                <td>
                                                    <button type="button" className="btn border-green-600 mr-2"
                                                        onClick={() => {
                                                            setShowApproveItem(true);
                                                            setSelectedId(data.id);
                                                            console.log(setSelectedId);
                                                        }}
                                                    >
                                                        <i className="fa fa-check-square text-green-600 fa-x px-1">

                                                        </i>
                                                    </button>

                                                    <button type="button" className="btn border-red-600 mr-2"
                                                        onClick={() => {
                                                            setShowDenyItem(true);
                                                            setSelectedId(data.id);
                                                            console.log(selectedId);
                                                        }}
                                                    >
                                                        <i className="fa fa-window-close-o text-red-600 fa-x px-1">

                                                        </i>
                                                    </button>
                                                </td>
                                                {showApproveItem && <ApproveItem closeClick={setShowApproveItem} updateData={selectedId} refreshPage={reloadPage} />}
                                                {showDenyItem && <DenyItem closeClick={setShowDenyItem} updateData={selectedId} refreshPage={reloadPage} />}
                                            </>

                                            :

                                            <>
                                                <td>
                                                    {data.status}
                                                </td>
                                            </>}
                                        <td>{data.active}</td>

                                        {showUpdateBazaar && <UpdateBazaar closeClick={setShowUpdateBazaar} updateData={selectedBazaar} refreshPage={reloadPage} />}

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