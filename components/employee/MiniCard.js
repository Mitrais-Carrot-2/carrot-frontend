import React from "react";
import Image from "next/image";

export default function MiniCard(props) {
  const imgWidth = 90;
  const imgHeight = 90;

  return (
    <div
      className={
        "w-full p-4 flex flex-wrap items-center rounded " + props.cardType
      }
    >
      <div className="my-2">
        <Image
          className={"rounded-full " + props.imgClass}
          alt="user-profile"
          src={props.image}
          width={imgWidth}
          height={imgHeight}
          objectFit="cover"
          onClick={props.clickAction}
        />
      </div>
      <div className="ml-3 truncate">
        {props.body}
      </div>
    </div>
  );
}
