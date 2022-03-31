import React from "React";
import BazaarItemCard from "./BazaarItemCard"
import axios from "axios";
import Image from "next/image";
import defaultImage from "@public/img/defaultImage.png";
import defaultProduct from "@public/img/default-product.png";
import carrotIcon from "@public/img/mc-icon-carrot.png";
import carrotIconTwo from "@public/img/mc-icon-transaction.png";
import { Button, ButtonDropdown } from "reactstrap";


export default function MiniDashboard(props) {

    return (
        <section className="py3">
          <div className="container mx-auto my-4 sm:px-4">
            <div className="flex flex-wrap justify-between text-white">
              <div className="max-w-[300px] w-[33%] p-4 flex flex-row bg-gradient-to-r from-cyan-500 to-blue-500 rounded ">
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
                  {/* <h3>{user.firstName + " " + user.lastName}</h3> */}
                  {/* <h4>Mitrais {user.roles.name}</h4> */}
                  <h3>AAAA BBBB</h3>
                  <h4>Mitrais STAFF</h4>
                </div>
              </div>
              <div className="max-w-[300px] w-[33%] p-4 flex flex-row bg-gradient-to-r from-orange-700 to-orange-400 rounded">
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
                  <h3>
                    My 2019 Basket: <br />
                    192
                  </h3>
                </div>
              </div>
              <div className="max-w-[300px] w-[33%] p-4 flex flex-row bg-gradient-to-r from-blue-900 to-blue-500 rounded">
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
                  <h3>
                    My Carrot History
                    <br />
                    <Button className="bg-transparent p-1">View</Button>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
