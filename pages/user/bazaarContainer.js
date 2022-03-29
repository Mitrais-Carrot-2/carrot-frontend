import React from "React";
import BazaarItemCard from "./BazaarItemCard"
import axios from "axios";

export default function BazaarCard(props) {

    const renderBazaarCards = () => {
        return props.bazaarC.map(item => {
            return <BazaarItemCard key={item.id} item={item} />
        })
    }
    return (
        <div>
            {renderBazaarItems}
        </div>
    )
}
