import React from "React";
import BazaarItemCard from "./BazaarItemCard"
import axios from "axios";

export default function BazaarCard(props) {
    const numItem = props.items.length() 

    const renderBazaarItems = () => {
        return props.items.map(item => {
            return <BazaarItemCard key={item.id} item={item} numItem={numItem} />
        })
    }
    return (
        <section className="bazaar mb-4 pb-5">
            <div>
                {renderBazaarItems()}
            </div>
        </section>
    )
}
