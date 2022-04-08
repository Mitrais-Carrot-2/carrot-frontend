import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import Head from "@components/Head";
import Merchant from "@components/Merchant/Merchant";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CreateItem from "./features/createItem";
import UpdateBazaarImage from "./features/addItemPicture";
import UpdateItem from "./features/updateItem";

export default function BazaarItem() {
    const router = useRouter();

    const url = process.env.NEXT_PUBLIC_API_URL + 'bazaar/item'
    const [bazaarItem, setBazaarItem] = useState([]);
    const [showCreateItem, setShowCreateItem] = useState(false);
    const [showUpdateItem, setShowUpdateItem] = useState(false);
    const [showUpdateItemImage, setShowUpdateItemImage] = useState(false);

    const [itemDetail, setItemDetail] = useState({});
    const [id, setId] = useState(0);

    useEffect(() => {
        axios.get(url).then(response => setBazaarItem(response.data));
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
                <section className="group-table">
                    <div className="row d-flex px-10">
                        <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0 mb-2">Bazaar Item Dashboard</h2>
                    </div>
                    <div className="container mx-auto sm: px-4 search-box py-3">
                        <div className="row d-flex px-4">
                            <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0">Item List</h2>
                            <div className="col-md-6">
                                <button
                                    className="col-sm-6 btn btn-info mt-4 pull-right radius-5"
                                    onClick={() => {
                                        setShowCreateItem(true);
                                    }}
                                >

                                    {" "}
                                    Create New Item
                                </button>
                                {/* {<CreateItem setModalCreateItem(!modalCreateItem) />} */}
                                {showCreateItem && <CreateItem closeClick={setShowCreateItem} refreshPage={reloadPage} />}
                                {/* {showCreateGroup && <CreateGroup closeClick={setShowCreateGroup} />} */}
                            </div>
                        </div>
                        <table className="table table-hover mt-3">
                            <thead>
                                <tr>
                                    <th itemScope="col" aria-rowspan={2}>#</th>
                                    <th itemScope="col" aria-rowspan={2} style={{ display: "none" }}>id</th>
                                    <th itemScope="col" aria-rowspan={2}>Bazaar Name</th>
                                    <th itemScope="col" aria-rowspan={2}>Item Name</th>
                                    <th itemScope="col" aria-rowspan={2}>Price</th>
                                    <th itemScope="col" aria-rowspan={2}>Quantity</th>
                                    <th itemScope="col" aria-rowspan={2}>Description</th>
                                    <th itemScope="col" aria-rowspan={2}>Action</th>
                                </tr>
                            </thead>
                            {bazaarItem.map((data, index) => (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td style={{ display: "none" }}>{data.id}</td>
                                    <td>{data.bazaar.bazaarName}</td>
                                    <td>{data.name}</td>
                                    <td>{data.price}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.description}</td>
                                    <td>
                                        <button type="button" className="btn border-orange-600 mr-2"
                                            onClick={() => {
                                                setShowUpdateItemImage(true);
                                                setId(data.id)
                                            }}
                                        >
                                            <i className="fa fa-image text-orange-600 fa-x px-1">

                                            </i>
                                        </button>
                                        <button type="button" className="btn border-blue-600 mr-2"
                                            onClick={() => {
                                                setShowUpdateItem(true);
                                                setItemDetail(data);
                                            }}
                                        >
                                            <i className="fa fa-edit text-blue-600 fa-x px-1">

                                            </i>
                                        </button>
                                        {showUpdateItem && <UpdateItem closeClick={setShowUpdateItem} updateData={itemDetail} refreshPage={reloadPage} />}
                                        {showUpdateItemImage && <UpdateBazaarImage closeClick={setShowUpdateItemImage} updateData={id} refreshPage={reloadPage} />}
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </section>

            </div>
            <Footer />
        </body>
    )
}