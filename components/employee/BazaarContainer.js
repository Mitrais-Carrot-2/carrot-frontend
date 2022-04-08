import React from "react";
import axios from "axios";
import BazaarCard from "@components/employee/BazaarCard";
import { useState, useEffect } from "react";

export default function BazaarContainer(props) { 
    const [bazaars, setBazaars] = useState([])

    const urlBazaar = 'http://localhost:8181/api/bazaar'

    useEffect(() => {
        axios.get(urlBazaar)
        .then(res => {
            setBazaars(res.data)
        })
    }, [])

    const renderBazaarCards = () => {
        return bazaars.map(bazaar => {
            return <BazaarCard key={bazaar.id} bazaar={bazaar} />
        })
    }

    return (
        <section className="bazaar-container">
            {renderBazaarCards()}
        </section> 
    )

}