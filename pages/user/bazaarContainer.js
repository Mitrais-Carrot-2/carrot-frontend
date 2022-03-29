import React from "React";
import BazaarItemCard from "./BazaarItemCard"
import axios from "axios";

export default function BazaarCard(props) {

    const renderBazaarCards = () => {
        return props.bazaars.map(bazaar => {
            return <BazaarItemCard key={bazaar.id} bazaar={bazaar} />
        })
    }
    return (
        <div>
            {renderBazaarCards}
        </div>
    )
}
