import React from "react";
import { useState, useEffect } from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import MiniBasketCards from "@components/employee/MiniBasketCards";
import { useRouter } from "next/router";
import Link from "next/link";
import backImage from "@public/img/back.png";
import Image from "next/image";
import DataTable from 'react-data-table-component';
import axios from "axios";
import { useSelector } from "react-redux";


export default function TransferHistory() {
    const router = useRouter();
    const [dataTransfer, setDataTransfer] = useState([]);
    const [searchInput, setSearchInput] = useState(""); 

    const basket = {carrotAmount: router.query.carrotAmount,
                    shareCarrot: router.query.shareCarrot,
                    rewardCarrot: router.query.rewardCarrot,
                    bazaarCarrot: router.query.bazaarCarrot,
                    };

    const user = useSelector((state) => (state.user.info ? state.user.info : {}));

    const urlTransfer = `${process.env.NEXT_PUBLIC_API_URL}transfer/${user.id}`;

    useEffect(() => {
        axios.get(urlTransfer)
        .then(res => {
            res.data.forEach((data, i) => {       
                // console.log("res data ", i, " = ", data)

                setDataTransfer(dataTransfer => 
                    [...dataTransfer, { 
                                    num: i+1,
                                    user: data.username,
                                    type: data.type.substring(5), 
                                    note: data.note, 
                                    carrotAmount: data.carrotAmount,
                                    shareAt: data.shareAt.substring(0,19).replace("T", " ")
                                    }]
                    
                    )
            })
        })
        .catch(err => console.log(err.message))
    }, [])

    const columnsTransfer = [
        {
            name: "#",
            selector: row => row.num,
            sortable: true,
            width: "60px",
        },
        {
            name: "To/From",
            selector: row => row.user,
            sortable: true,
            width: "200px",
            wrap: true,
            // center: true,
        },
        {
            name: "Type",
            selector: row => row.type,
            sortable: true,
            // center: true,
        },
        {
            name: "Carrot",
            selector: row => row.carrotAmount,
            sortable: true,
            // center: true,
        },
        {
            name: "Note",
            selector: row => row.note,
            sortable: true,
            width: "400px",
            wrap:true,
            // center: true,

        },
        {
            name: "Date",
            selector: row => row.shareAt,
            sortable: true,
            width: "200px",
            wrap:true,
            // center: true,

        }
    ];

    const customStyles = {
        cells: {
            style: {
                textAlign: "center",
            }
        }
    }
	const filteredTransferHistory = dataTransfer.filter(
		data => data.username && data.username.toLowerCase().includes(searchInput.toLowerCase()) 
            || data.note && data.note.toLowerCase().includes(searchInput.toLowerCase())
            || data.type && data.type.toLowerCase().includes(searchInput.toLowerCase())
	);

    function renderTransferTable(){
        if (dataTransfer){       
            return (
                <>
                    <div className="flex justify-end items-center my-2">
                        <p className="text-[13px]">Search:</p>
                        <input 
                            className="search-input ml-3"
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                         />
                    </div>
                    <div>
                        <DataTable
                            columns={columnsTransfer}
                            data={filteredTransferHistory}
                            pagination
                            persistTableHead
                            customStyles={customStyles}
                        />
                    </div>
                </>
            )
        }
        return null;
    }


    return (
        <body>
            <Navbar />
            <div className="container">
                <main role="main">
                    <h2 className="mb-4 text-grey back">
                        <span className="back-button mr-6">
                            <Link href="/">
                                <Image src={backImage} className="back" />
                            </Link>
                        </span>                         
                        HOME
                    </h2>
                </main>
                <div>
                    <MiniBasketCards basket={basket} />
                </div>
                <div className="search-box mb-4">
                    {renderTransferTable()}
                </div>
            </div>
            <Footer />
        </body>
    )
}