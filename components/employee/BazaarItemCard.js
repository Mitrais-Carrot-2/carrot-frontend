import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import defaultImage from "@public/img/defaultImage.png";


export default function BazaarItemCard(props) {
    const router = useRouter()
    const viewDetailsButtonClassOne = "inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded my-2 py-1 px-3 leading-normal no-underline btn-carrot radius-5";
    const viewDetailsButtonClassMany =  "inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot";


    function renderViewDetailsButton(classNames){
        return(
            <button
                onClick={() => {
                    router.push({
                        pathname : "/itemDetails/[bazaarId]/[itemId]",
                        query : {bazaarId: props.bazaar.id, bazaarName:props.bazaar.bazaarName, itemId: props.item.id}
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
            <div className="flex flex-wrap">
                <div className="md:w-1/2 pr-4 pl-4 br-1">
                    <Image
                        className="max-w-full h-auto p-6"
                        alt=""
                        src={defaultImage}
                        objectFit="cover"
                    />
                </div>
                <div className="md:w-1/2 pr-4 pl-4 self-center p-12">
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
            <div className="w-full px-3">
                <div className="text-center h-auto p-0 bazaar-item items-center mb-2">
                    <Image
                        alt=""
                        src={defaultImage}
                        // width={300}
                        height={700}
                        objectFit="cover"
                    />
                </div>
                <div className="px-3">
                    <h2 className="my-3">{item.name}</h2>
                    <h4>
                        <strong className="carrot-orange">{item.price} Carrots</strong>
                    </h4>
                    <p className="my-2">{item.description}</p>
                    {renderViewDetailsButton(viewDetailsButtonClassOne)}
                </div>
            </div>
        )
    }

    function renderManyItems(item) {
        return (
            <div className="w-full px-2 py-2">
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                    <Image
                        className="w-full rounded rounded-t"
                        alt=""
                        src={defaultImage}
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