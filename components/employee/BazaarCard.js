import React from "react";
import BazaarItemCard from "./BazaarItemCard"
import axios from "axios";
import { useState, useEffect } from "react";

export default function BazaarCard(props) {
    const [items, setItems] = useState([])
    const [numItem, setNumItem] = useState()


    const urlItems = `${process.env.NEXT_PUBLIC_API_URL}bazaar/${props.bazaar.id}/items`

    useEffect(() => {
        axios.get(urlItems)
        .then(res => {
            setItems(res.data)
            setNumItem(res.data.length)
        })
        .catch(err => {console.log(err.message)})
    }, [])


    const renderBazaarItems = () => {
        return items.map(item => {
            return <BazaarItemCard key={item.id} item={item} numItem={numItem} basket={props.basket} />
        })
    }

    function bazaarOneItem() {
        return (
            <div className="bazaar-1-item mb-4">
                <div className="container mx-auto sm:px-4 search-box py-4">
                <div className="flex flex-wrap">
                    <div className="md:w-full pr-4 pl-4">
                        <hr className="box-title-hr" />
                        <h4 className="my-2 box-title">{props.bazaar.bazaarName}</h4>
                    </div>
                    {renderBazaarItems()}
                </div>
                </div>
            </div>
        )
    }

    function bazaarTwoItems() {
        return (
            <div className="bazaar-2-items mb-4">
                <div className="container mx-auto sm:px-4 search-box py-4">
                <div className="flex flex-wrap justify-stretch">
                    <div className="md:w-full pr-4 pl-4">
                        <hr className="box-title-hr" />
                        <h4 className="my-2 box-title">{props.bazaar.bazaarName}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-0 w-full">
                        {renderBazaarItems()}
                    </div>
                </div>
                </div>
            </div>
        )
    }

    function bazaarManyItems(columnMode) {
        return (
            <div className="bazaar mb-4">
                <div className="container mx-auto sm:px-4 search-box py-4">
                <div className="flex flex-wrap content-end">
                    <div className="md:w-full pr-4 pl-4">
                        <hr className="box-title-hr" />
                        <h4 className="my-2 box-title">{props.bazaar.bazaarName}</h4>
                    </div>
                <div className={columnMode}>
                    {renderBazaarItems()}
                </div>
                </div>
                </div>
            </div>
        )
    }

    function renderBazaar(){
        if (numItem == 1){
            return (bazaarOneItem())
        }
        else if (numItem == 2){
            return (bazaarTwoItems())
        }
        else if (numItem == 3){
            return (bazaarManyItems("grid grid-cols-3 gap-2"))
        }
        else{
            return (bazaarManyItems("grid grid-cols-4 gap-2"))
        }
    }

    return (
        <div>
            {renderBazaar()}
        </div>
    )
}
