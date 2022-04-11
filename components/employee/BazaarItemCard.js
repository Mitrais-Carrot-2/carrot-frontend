import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import defaultProduct from "@public/img/default-product.png";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BazaarItemCard(props) {
    const router = useRouter()
    const [image, setImage] = useState(defaultProduct)
    const viewDetailsButtonClassOne = "btn btn-carrot"
    const viewDetailsButtonClassMany = "btn btn-carrot rounded-t-none"

    const urlImage = `${process.env.NEXT_PUBLIC_API_URL}bazaar/getImage/${props.item.id}`

    useEffect(() => {
        axios.get(urlImage)
        .then(
            setImage(urlImage)
        )
        .catch(err => {
            if (err.response.status == 404){
                // console.log("item ", props.item.id, " image not found")
                setImage(defaultProduct)
            }
            else console.log(err.message)
        })
    }, [])

    function renderViewDetailsButton(classNames){
        return(
            <button
                onClick={() => {
                    router.push({
                        pathname : "/itemDetails/[bazaarId]/[itemId]",
                        query : {bazaarId: props.item.bazaar.id, bazaarName:props.item.bazaar.bazaarName, itemId: props.item.id, carrot:props.basket.carrotAmount, image:image}
                    })
            }}
                className={classNames}
            >
                VIEW DETAILS
            </button>
        )
    }

    function renderOneItem(item) {
        return (
            <div className="flex flex-wrap items-center mb-3">
                <div className="md:w-1/2 pr-4 pl-4 pt-3 br-1 flex justify-center">
                    <Image
                        className="max-w-full h-auto p-6"
                        alt=""
                        src={image}
                        objectFit="cover"
                        width={500}
                        height={300}
                    />
                </div>
                <div className="md:w-1/2 px-10 self-center">
                    <h2 className="my-3">{item.name}</h2>
                    <h4>
                        <strong className="carrot-orange mt-2">{item.price} Carrots</strong>
                    </h4>
                    <p className="my-3">{item.description}</p>
                    {renderViewDetailsButton(viewDetailsButtonClassOne)}
                </div>
            </div>
        )
    }

    function renderTwoItems(item) {
        return (
            <div className="w-full p-3">
                <div className="text-center h-auto p-0 bazaar-item items-center mb-2 flex justify-center">
                    <Image
                        alt=""
                        src={image}
                        width={500}
                        height={250}
                        objectFit="cover"
                    />
                </div>
                <div className="x-3 mb-3">
                    <h2 className="my-3">{item.name}</h2>
                    <h4>
                        <strong className="carrot-orange">{item.price} Carrots</strong>
                    </h4>
                    <p className="my-3">{item.description}</p>
                    {renderViewDetailsButton(viewDetailsButtonClassOne)}
                </div>
            </div>
        )
    }

    function renderManyItems(item) {
        return (
            <div className="w-full px-2 py-2">
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card justify-center">
                    <Image
                        className="w-full rounded rounded-t"
                        alt=""
                        src={image}
                        width={250}
                        height={250}
                        objectFit="cover"
                    />
                    <div className="flex-auto p-6 card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-title-orange">{item.price} Carrots</p>
                    </div>
                    {renderViewDetailsButton(viewDetailsButtonClassMany)}
                </div>
            </div>
        )
    }

    function renderItems(item, numItem) {
        if (numItem == 1) {
            return (renderOneItem(item))
        }
        else if (numItem == 2) {
            return (renderTwoItems(item))
        }
        else {
            return (renderManyItems(item))
        }
    }

    function handleClick(event) {
        event.preventDefault()
        router.push("/itemDetails")
    }

    return (
        <>
            {renderItems(props.item, props.numItem)}
        </>
    )
} 