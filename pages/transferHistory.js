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
    const [dataRaw, setDataRaw] = useState([]);
    const [dataTransfer, setDataTransfer] = useState([]);
    const basket = {carrotAmount: router.query.carrotAmount,
                    shareCarrot: router.query.shareCarrot,
                    rewardCarrot: router.query.rewardCarrot,
                    bazaarCarrot: router.query.bazaarCarrot,
                    };

    const columnsTransfer = [
        {
            name: "#",
            selector: row => row.num
        },
        {
            name: "To/From",
            selector: row => row.user
        },
        {
            name: "Type",
            selector: row => row.type
        },
        {
            name: "Note",
            selector: row => row.note
        },
        {
            name: "Carrot",
            selector: row => row.carrotAmount
        },
        {
            name: "Date",
            selector: row => row.shareAt
        }
    ];

    const user = useSelector((state) => (state.user.info ? state.user.info : {}));

    const urlTransfer = `${process.env.NEXT_PUBLIC_API_URL}transfer/${user.id}`;

    useEffect(() => {
        axios.get(urlTransfer)
        .then(res => generateDataTransfer(res.data))
        .catch(err => console.log(err.message))
    }, [])

    function generateDataTransfer(d){
        if (d) {
            console.log("data raw = ", dataRaw)
            const tempData = {
                user: "",
                type: "",
                note: "",
                carrotAmount: "",
                shareAt: ""
            }
            const tempData2 = []
            
            d.forEach(data => {       
                console.log("res data = ", data)

                if (data.senderId != user.id){
                    tempData.user = data.senderName;
                }
                else if (data.receiverId != user.id){
                    tempData.user = data.receiverName;
                }
                tempData.type = data.type.substring(5);
                tempData.note = data.note;
                tempData.carrotAmount = data.carrotAmount;
                tempData.shareAt = data.shareAt;
                console.log("temp data = ", tempData)
                // tempData2.push(tempData)
            })
            console.log("temp data 2 = ", tempData2);
            return tempData2;
        }
    }

    function renderTransferTable(){
        // setDataTransfer(generateDataTransfer())

        if (dataTransfer){       
            console.log("data transfer = ", dataTransfer)

            return (
                <DataTable
                    columns={columnsTransfer}
                    data={dataTransfer}
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