import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import defaultImage from "@public/img/defaultImage.png";
import backImage from "@public/img/back.png";
import Link from "next/link";

export default function itemDetails(props){
    const router = useRouter()
    const [item, setItem] = useState();
    // const {bazaarId, itemId} = router.query;
    const bazaarId = router.query.bazaarId;
    const bazaarName = router.query.bazaarName;
    const itemId = router.query.itemId;

    console.log("query = ", router.query)
    console.log("bazaar id = ", bazaarId);
    console.log("bazaar name = ", bazaarName);
    console.log("item id = ", itemId);

    const urlItem = `http://localhost:8181/api/bazaar/${bazaarId}/${itemId}`;

    console.log("item = ", item)

    useEffect(() => {
        if(!router.isReady) return;

        console.log(urlItem)

        axios.get(urlItem)
        .then(res => {
            console.log("res data = ", res.data)
            setItem(res.data)

            return res;
        })
        .catch(err => {console.log(err.message)})

    }, [router.isReady])


    function renderItemDetails(item){    
        return (
            <>
                <main role="main" class="container">
                    <h2 className="my-4 pl-0 text-grey ml-0">
                        <span className="back-button mr-3">
                            <Link href="/">
                                <Image src={backImage} alt="" class="back" />
                            </Link>
                        </span> 
                        {item.name}
                    </h2>
                </main>
                <section className="bazaar-1-item mb-4">
                    <div className="container search-box pb-4">
                        <div className="row d-flex">
                            <div className="col-md-12">
                                <hr className="box-title-hr"/>
                                <h4 className="my-2 box-title">{bazaarName}</h4>
                            </div>
                            <div className="col-md-6 br-1">
                                <Image src={defaultImage} className="img-fluid p-3" />
                            </div>
                            <div className="col-md-6 align-self-center p-5">
                                <h2 className="my-3">{item.name}</h2>
                                <h4><strong className="carrot-orange my-3">{item.price} Carrots</strong></h4>
                                <p className="my-3">{item.description}</p>
                                <a
                                    className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded my-2 py-1 px-3 leading-normal no-underline btn-carrot radius-5"
                                >
                                    BUY
                                </a>
                                <p className="mt-2"><small className="text-danger">You don't have enough carrots to buy this item.</small></p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    return (
        <body>
            <div className="container">         
                {/* <div className="md:w-1/2 pr-4 pl-4 self-center p-12"> */}
                    {item? renderItemDetails(item) : null}
                {/* </div> */}
            </div>
        </body>
    )
}