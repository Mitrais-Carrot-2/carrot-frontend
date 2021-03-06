import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import backImage from "@public/img/back.png";
import Link from "next/link";
import { useSelector } from "react-redux";
import BuyItemModal from "@components/employee/BuyItemModal";
import { Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import checkGreen from "@public/img/checkGreen.png";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Head from "@components/Head";


export default function itemDetails(props){
    const router = useRouter()
    const [item, setItem] = useState();
    const [showBuyModal, setShowBuyModal] = useState(false);
    const [showBuyRequestModal, setShowBuyRequestModal] = useState(false);
    const bazaarId = router.query.bazaarId;
    const bazaarName = router.query.bazaarName;
    const itemId = router.query.itemId;
    const carrot = router.query.carrot;
    const image = router.query.image;

    const user = useSelector((state) => (state.user.info ? state.user.info : {}));
        
    const urlItem = `${process.env.NEXT_PUBLIC_API_URL}bazaar/${bazaarId}/${itemId}`;
    const urlExchange = `${process.env.NEXT_PUBLIC_API_URL}exchange`;

    useEffect(() => {
        if(!router.isReady) return;

        axios.get(urlItem)
        .then(res => {
            setItem(res.data)
            return res;
        })
        .catch(err => {console.log(err.message)})


    }, [router.isReady, showBuyRequestModal])

    const toggleBuyModal = () => {setShowBuyModal(!showBuyModal)};
    const toggleBuyRequestModal = () => {setShowBuyRequestModal(!showBuyRequestModal)};

    function requestBuy(item){
        let userId = user.id;
        let itemId = item.id;
        console.log("Buy Requested")
        axios.post(urlExchange, null, {params: {userId, itemId}})
        .then(res => {
            console.log("res exchange = ", res.data)
            toggleBuyModal()
            toggleBuyRequestModal()
        })
    }

    function checkBasket(item){
        if (item.quantity > 0){
            if (carrot > item.price){
                return (
                    <>   
                        <p id="item-qty" className = "my-3">Available: {item.quantity} {item.quantity > 1? "pcs" : "pc"}</p>
                        <button className="btn btn-carrot" onClick={() => setShowBuyModal(true)}>
                            BUY
                        </button>
                    </>
                )
            }
            else {
                return (
                    <>
                        <p id="item-qty" className = "my-3">Available: {item.quantity} {item.quantity > 1? "pcs" : "pc"}</p>
                        <button className="btn btn-carrot" disabled >
                            BUY
                        </button>
                        <p className="mt-2"><small className="text-danger">You don't have enough carrots to buy this item.</small></p>
                    </>
                )
            }
        }
        return (
            <>
                <p id="item-qty" className = "my-3">Available: {item.quantity} {item.quantity > 1? "pcs" : "pc"}</p>
                <button className="btn btn-carrot" disabled>
                    BUY
                </button>
                <p className="mt-2"><small className="text-danger">Item is sold out.</small></p>
            </>
        )
    }

    function renderItemDetails(item){    
        return (
            <>
                <main role="main">
                    <h2 className="mb-4 text-grey back">
                        <span className="back-button mr-6">
                            <Link href="/">
                                <Image id="back-icon" src={backImage} alt="" className="back" />
                            </Link>
                        </span>                         
                        BAZAAR
                    </h2>
                </main>
                <section className="bazaar-1-item mb-4">
                    <div className="container search-box py-4">
                        <div className="row d-flex items-center">
                            <div className="col-md-12 mb-3">
                                <hr className="box-title-hr"/>
                                <h4 className="mt-2 box-title">{bazaarName}</h4>
                            </div>
                            <div className="col-md-6 br-1">
                                <Image 
                                    src={image} 
                                    className="img-fluid p-3"
                                    // className="max-w-full h-auto p-6"
                                    objectFit="cover"
                                    width={500}
                                    height={500} 
                                />
                            </div>
                            <div className="col-md-6 align-self-center px-10">
                                <h2 id="item-details-name" className="my-3">{item.name}</h2>
                                <h4><strong className="carrot-orange my-3">{item.price} Carrots</strong></h4>
                                <p className="my-3">{item.description}</p>
                                {checkBasket(item)}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    function buyRequestModal(){
        return (
            <Modal id="buy-requested-modal" isOpen={showBuyRequestModal} toggle={toggleBuyRequestModal} centered size="sm">
                <ModalBody>
                    <div className="modal-title flex flex-wrap justify-center items-center">
                        <Image 
                            src={checkGreen}
                            width={40}
                            height={40}
                            objectFit="cover"/>
                        <h4 className="ml-5">Buy Requested</h4>
                    </div>
                </ModalBody>
            </Modal>
        )
    }

    return (
        <>
            <Head title="Item Details" />
            <body>
                <Navbar />
                <div className="container">         
                    {item? renderItemDetails(item) : null}
                    {item? <BuyItemModal show={showBuyModal} toggle={toggleBuyModal} object={item} action={requestBuy} /> : null}
                    {buyRequestModal()}
                </div>
                <Footer />
            </body>
        </>
    )
}