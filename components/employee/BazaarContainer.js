import React from "react";
import axios from "axios";
import BazaarCard from "@components/employee/BazaarCard";
import { useState, useEffect, useRef } from "react";

export default function BazaarContainer(props) { 
    const [bazaars, setBazaars] = useState([])
    const [itemIndex, setitemIndex] = useState([0])
    const tempIndex = useRef(0)
    const tempArray = useRef([0])

    const urlBazaar = `${process.env.NEXT_PUBLIC_API_URL}bazaar`

    useEffect(() => {
        axios.get(urlBazaar)
        .then(res => {
            setBazaars(res.data)
            // console.log("bazaars = ", res.data)
        })
        .catch(err => {console.log(err.message)})
    }, [])

    useEffect(() => {
        bazaars.forEach(bazaar => {
            tempIndex.current = tempIndex.current + bazaar.items.length
            tempArray.current = [...tempArray.current, tempIndex.current]

            setitemIndex(tempArray.current)
        });
    }, [bazaars])
    
    // console.log("item index = ", itemIndex)

    function renderBazaarCards() {
        if (props.basket){
            console.log("item index = ", itemIndex)
            console.log("bazaar length = ", bazaars.length)
            if (itemIndex.length == bazaars.length + 1){
                return bazaars.map((bazaar, i) => {
                    if (i == 0)  return <BazaarCard key={bazaar.id} bazaar={bazaar} basket={props.basket} startIndex={0}/>
                    else return <BazaarCard key={bazaar.id} bazaar={bazaar} basket={props.basket} startIndex={itemIndex[i]}/>
                })
            }
            else return null;
        }
    }

    return (
        <section className="bazaar-container">
            {renderBazaarCards()}
        </section> 
    )

}