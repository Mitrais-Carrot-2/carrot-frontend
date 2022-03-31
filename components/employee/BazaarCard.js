import React from "React";
import BazaarItemCard from "./BazaarItemCard"
import axios from "axios";

export default function BazaarCard(props) {
    const [items, setItems] = useState([])
    const [numItem, setNumItem] = useState()

    const urlBazaar = `http://localhost:8181/api/bazaar/${props.bazaar.id}/items`

    useEffect(() => {
        axios.get(urlBazaar)
        .then(res => {
            setItems(res.json()) 
        })
        .then(
            setNumItem(props.items.length())
        )
    })

    const renderBazaarItems = () => {
        return items.map(item => {
            return <BazaarItemCard key={item.id} item={item} numItem={numItem} />
        })
    }
    return (
        <section className="bazaar mb-4 pb-5">
            <div className="container mx-auto sm:px-4 search-box pb-4">
            <div className="flex flex-wrap content-end">
                <div className="md:w-full pr-4 pl-4">
                <hr className="box-title-hr" />
                <h4 className="my-2 box-title">{props.bazaar.title}</h4>
                </div>
            <div>
                {renderBazaarItems()}
            </div>
            </div>
            </div>
        </section>
    )
}
