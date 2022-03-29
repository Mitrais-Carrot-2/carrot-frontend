import React from "React";
import BazaarItemCard from "./BazaarItemCard"
import axios from "axios";

export default function BazaarCard(props) {

    const renderBazaarItems = () => {
        return props.bazaar.items.map(item => {
            return <BazaarItemCard key={item.id} item={item} />
        })
    }
    return (
        <div>
            {renderBazaarItems}
        </div>
    )
}
