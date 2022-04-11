import React from "react";
import axios from "axios";
import BazaarCard from "@components/employee/BazaarCard";
import { useState, useEffect } from "react";

export default function BazaarContainer(props) { 
    const [bazaars, setBazaars] = useState([])

    const urlBazaar = `${process.env.NEXT_PUBLIC_API_URL}bazaar`

    useEffect(() => {
        axios.get(urlBazaar)
        .then(res => {
            setBazaars(res.data)
        })
        .catch(err => {console.log(err.message)})
    }, [])

    const renderBazaarCards = () => {
        if (props.basket){
            return bazaars.map(bazaar => {
                // console.log("basket bazaar container = ", props.basket)

                return <BazaarCard key={bazaar.id} bazaar={bazaar} basket={props.basket} />
            })
        }
    }

    return (
        <section className="bazaar-container">
            {renderBazaarCards()}
        </section> 
    )

}