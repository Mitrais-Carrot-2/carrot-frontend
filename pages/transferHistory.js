import React from "react";
import { useState, useEffect } from "react";
import Navbar from "@components/Navbar";
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

    const basket = {carrotAmount: router.query.carrotAmount,
                    shareCarrot: router.query.shareCarrot,
                    rewardCarrot: router.query.rewardCarrot,
                    bazaarCarrot: router.query.bazaarCarrot,
                    };
    const columnsTransfer = [
        {
            name: "#",
            selector: row => row.num,
            sortable: true
        },
        {
            name: "To/From",
            selector: row => row.user,
            sortable: true,
            width: "200px",
            wrap:true
        },
        {
            name: "Type",
            selector: row => row.type,
            sortable: true
        },
        {
            name: "Carrot",
            selector: row => row.carrotAmount,
            sortable: true,
        },
        {
            name: "Note",
            selector: row => row.note,
            sortable: true,
            width: "400px",
            wrap:true,
            headerClassName:"flex justify-center"

        },
        {
            name: "Date",
            selector: row => row.shareAt,
            sortable: true,
            width: "300px",
            wrap:true

        }
    ];

    const user = useSelector((state) => (state.user.info ? state.user.info : {}));

    const urlTransfer = `${process.env.NEXT_PUBLIC_API_URL}transfer/${user.id}`;

    useEffect(() => {
        axios.get(urlTransfer)
        .then(res => {
            res.data.forEach((data, i) => {       
                console.log("res data ", i, " = ", data)

                setDataTransfer(dataTransfer => 
                    [...dataTransfer, { 
                                    num: i+1,
                                    user: data.username,
                                    type: data.type.substring(5), 
                                    note: data.note, 
                                    carrotAmount: data.carrotAmount,
                                    shareAt: data.shareAt
                                    }]
                    
                    )
            })
        })
        .catch(err => console.log(err.message))
    }, [])


    console.log("data transfer = ", dataTransfer)

    function renderTransferTable(){
        if (dataTransfer){       
            return (
                <DataTable
                    columns={columnsTransfer}
                    data={dataTransfer}
                    pagination
                    // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                    subHeader
                    // subHeaderComponent={subHeaderComponentMemo}
                    persistTableHead
                />
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
                <div className="container">
                    <MiniBasketCards basket={basket} />
                </div>
                <div className="search-box">
                    {renderTransferTable()}
                </div>
            </div>
        </body>
    )
}