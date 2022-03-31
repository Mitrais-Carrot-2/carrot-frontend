import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import defaultImage from "@public/img/defaultImage.png";


export default function BazaarItemCard(props){
    const router = useRouter()

    function renderOneItem(item) {
        return (    
            <div>
                <div className="md:w-1/2 pr-4 pl-4 br-1">
                    <Image
                        className="max-w-full h-auto p-6"
                        alt=""
                        src={item.image}
                        // src={defaultImage}
                        // width={60}
                        // height={60}
                        objectFit="cover"
                    />
                </div>
                <div className="md:w-1/2 pr-4 pl-4 self-center p-12">
                    <h3>{item.name}</h3>
                    <h4>
                        <strong className="carrot-orange">{item.price} Carrots</strong>
                    </h4>
                    <p>{item.description}</p>
                    <Link
                        href="/bazaarItem"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot radius-5"
                    >
                        VIEW DETAILS
                    </Link>
                </div>
            </div>
        )
    }

    function renderTwoItems(item) {
        return (
            <div className="md:w-1/2 pr-4 pl-4 br-1">
                <div className="text-center">
                    <Image
                        className="max-w-full h-auto p-6 bazaar-item mb-3"
                        alt=""
                        src={item.image}
                        // src={defaultImage}
                        // width={60}
                        // height={60}
                        objectFit="cover"
                    />
                </div>
                <div className="px-3">
                    <h3>{item.name}</h3>
                    <h4>
                        <strong className="carrot-orange">{item.price} Carrots</strong>
                    </h4>
                    <p>{item.description}</p>
                    <Link
                        href="/bazaarItem"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot radius-5"
                    >
                        VIEW DETAILS
                    </Link>
                </div>
            </div>
        )
    }

    function renderThreeItems(item) {
        return (
            <div className="md:w-1/3 pr-4 pl-4">
              <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                <Image
                    className="w-full rounded rounded-t"
                    alt=""
                    src={item.image}
                    // src={defaultImage}
                    // width={60}
                    // height={60}
                    objectFit="cover"
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3">{item.name}</h5>
                  <p className="mb-0">{item.price} Carrots</p>
                </div>
                <Link
                    href="/bazaarItem"
                    className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
        )
    }

    function renderManyItems(item){
        return (
            <div className="md:w-1/4 pr-4 pl-4">
            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
              <Image
                    className="w-full rounded rounded-t"
                    alt=""
                    src={item.image}
                    // src={defaultImage}
                    // width={60}
                    // height={60}
                    objectFit="cover"
                />
              <div className="flex-auto p-6">
                <h5 className="mb-3">{item.name}</h5>
                <p className="mb-0">{item.price} Carrots</p>
              </div>
              <Link
                href="/bazaarItem"
                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot"
              >
                VIEW DETAILS
              </Link>
            </div>
          </div>
        )
    }

    function renderItems(item, numItem){
        if (numItem === 1){
            renderOneItem(item)
        }
        else if (numItem === 2){
            renderTwoItems(item)
        }
        else if (numItem === 3){
            renderThreeItems(item)
        }
        else{
            renderManyItems(item)
        }
    }

    function handleClick(event){
        event.preventDeafult()
        router.push("/bazaarItem")
    }

    return (
        <div onClick={handleClick}>
            {renderItems(props.item, props.numItem)}
        </div>
    )
} 