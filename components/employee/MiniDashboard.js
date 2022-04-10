import React from "react";
import BazaarItemCard from "./BazaarItemCard"
import axios from "axios";
import Image from "next/image";
import defaultImage from "@public/img/defaultImage.png";
import defaultProduct from "@public/img/default-product.png";
import carrotIcon from "@public/img/mc-icon-carrot.png";
import carrotIconTwo from "@public/img/mc-icon-transaction.png";
import { Button, ButtonDropdown } from "reactstrap";


export default function MiniDashboard(props) {
  const date = new Date();

  return (
    <section className="py3">
      <div className="container mx-auto my-4 sm:px-4">
        <div className="flex flex-wrap justify-between text-white mini-card">
          <div className="max-w-1/3 w-[33%] p-4 flex flex-row bg-gradient-to-r from-cyan-500 to-blue-500 rounded ">
            <div>
              <Image
                className="h-auto w-full mx-auto rounded-full cursor-pointer hover:opacity-70"
                alt="user-profile"
                src={defaultImage}
                width={60}
                height={60}
                objectFit="cover"
              />
            </div>
            <div className="p-2">
              <h3>{props.user.firstName + " " + props.user.lastName}</h3>
              <h4>{props.user.jobFamily}, {props.user.jobGrade}</h4>
            </div>
          </div>
          <div className="max-w-1/3 w-[33%] p-4 flex flex-row bg-gradient-to-r from-orange-700 to-orange-400 rounded">
            <div>
              <Image
                className="h-auto w-full mx-auto rounded-full cursor-pointer hover:opacity-70"
                alt="user-profile"
                src={carrotIcon}
                width={60}
                height={60}
                objectFit="cover"
              />
            </div>
            <div className="p-2">
              <h3>My {date.getFullYear()} Basket:</h3>
              <h3>{props.basket ? props.basket.carrotAmount : ""}</h3>
            </div>
          </div>
          <div className="max-w-1/3 w-[33%] p-4 flex flex-row bg-gradient-to-r from-blue-900 to-blue-500 rounded">
            <div>
              <Image
                className="h-auto w-full mx-auto rounded-full cursor-pointer hover:opacity-70"
                alt="user-profile"
                src={carrotIconTwo}
                width={60}
                height={60}
                objectFit="cover"
              />
            </div>
            <div className="p-2">
              <h3>My Carrot History</h3>
              <Button className="bg-transparent p-1">View</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
