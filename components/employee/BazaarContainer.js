import React from "react";
import axios from "axios";
import BazaarCard from "@components/employee/BazaarCard";
import { useState, useEffect } from "react";

export default function BazaarContainer(props) { 
    const [bazaars, setBazaars] = useState([])
    const [itemIndex, setitemIndex] = useState(0)

    const urlBazaar = `${process.env.NEXT_PUBLIC_API_URL}bazaar`

    useEffect(() => {
        axios.get(urlBazaar)
        .then(res => {
            setBazaars(res.data)
        })
        .catch(err => {console.log(err.message)})
    }, [])

    function incrementItemIndex(){
        setitemIndex(itemIndex + 1)
    }

    // console.log("item index = ", itemIndex)

    function renderBazaarCards() {
        if (props.basket){
            return bazaars.map(bazaar => {
                return <BazaarCard bazaar={bazaar} basket={props.basket} index={itemIndex} incrementIndex={incrementItemIndex}/>
            })
        }
    }

    return (
        <section className="bazaar-container">
            {renderBazaarCards()}
        </section> 
    )

}