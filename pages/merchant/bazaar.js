import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import Head from "@components/Head";
import Merchant from "@components/Merchant/Merchant";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import CreateBazaar from "./createBazaar";

export default function Bazaar() {
    const router = useRouter();

    const url = 'http://localhost:8181/api/bazaar'
    const [bazaars, setBazaar] = useState([]);
    const [showCreateBazaar, setShowCreateBazaar] = useState(false);
    useEffect(() => {
        axios.get(url).then(response => setBazaar(response.data));
    }, [])
    // console.log(bazaar)

    const renderTable = () => {
        let initId = 0
        return bazaars.map((item, index) => {
            <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.bazaarName}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td></td>
            </tr>
        })
    }



    return (
        <>

            <Head />
            <Navbar />
            <Merchant />
            <section className="bazaar-table">
                <div className="row d-flex px-10">
                    <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0 mb-2">Bazaar Dashboard</h2>
                </div>
                <div className="container mx-auto sm: px-4 search-box py-3">
                    <div className="row d-flex px-4">
                        <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0">Bazaar List</h2>
                        <div className="col-md-6">
                            <button
                                className="col-sm-6 btn btn-info mt-4 pull-right radius-5"
                                onClick={() => { setShowCreateBazaar(true) }}>
                                {" "}
                                Create New Bazaar
                            </button>
                            {showCreateBazaar && <CreateBazaar closeClick={setShowCreateBazaar} />}
                        </div>
                    </div>
                    <table className="table table-hover mt-3">
                        <thead>
                            <tr>
                                <th itemScope="col" aria-rowspan={2}>#</th>
                                <th itemScope="col" aria-rowspan={2}>Bazaar Name</th>
                                <th itemScope="col" aria-rowspan={2}>Start Date</th>
                                <th itemScope="col" aria-rowspan={2}>End Date</th>
                                <th itemScope="col" aria-rowspan={2}>Action</th>
                            </tr>
                        </thead>
                        {/* <tr>
                            <td>1</td>
                            <td>First Bazaar</td>
                            <td>2/02/2020</td>
                            <td>2/04/2022</td>
                            <td></td>
                        </tr> */}
                        {bazaars.map((data, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{data.bazaarName}</td>
                                <td>{data.startDate}</td>
                                <td>{data.endDate}</td>
                                <td></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </section>
            <Footer />
        </>
    )
}