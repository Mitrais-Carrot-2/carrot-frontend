import React from "react";
import Image from "next/image";

export default function MiniCard(props) {  
  const imgWidth = 90;
  const imgHeight = 90;

    return (
        <div className={"w-full p-4 flex flex-row items-center rounded " + props.cardType} >
            <div className="my-2">
                <Image
                    className="h-auto w-full rounded-full cursor-pointer hover:opacity-70"
                    alt="user-profile"
                    src={props.image}
                    width={imgWidth}
                    height={imgHeight}
                    objectFit="cover"
                />
            </div>
        <div className="ml-8">
            {props.body}
        </div>
      </div>
    )
}