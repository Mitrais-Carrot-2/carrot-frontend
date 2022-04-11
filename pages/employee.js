import Head from "@components/Head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import StockistRewardModal from "@components/StockistRewardModal";
import ManagerRewardModal from "@components/ManagerRewardModal";
import { useRouter } from "next/router";
import SharingLevelModal from "@components/SharingLevelModal";
import MiniProfileCards from "@components/employee/MiniProfileCards";
import BazaarCard from "@components/employee/BazaarCard";
import { useEffect, useState } from "react";
import axios from "axios";
import BazaarContainer from "@components/employee/BazaarContainer"
import { useSelector } from "react-redux";
import jsCookie from "js-cookie";


export default function Employee(props) {
  const router = useRouter();

  const [basket, setBasket] = useState();
  const user = useSelector((state) => (state.user.info ? state.user.info : {}));

  // const urlUser = process.env.NEXT_PUBLIC_API_URL + "basket/" + user.id;

  let onlyStaff = false;
  let roles = (jsCookie.get("roles")) ? jsCookie.get("roles").split(",") : "";
  if (roles) roles.map((role, i) => { roles[i] = role.substring(5) })
  if (roles.length == 1 && roles[0] == "STAFF") {
    onlyStaff = true;
  }

  useEffect(() => {
    // console.log("roles", roles);
    if (user.id) {

      const urlUser = process.env.NEXT_PUBLIC_API_URL + "basket/" + user.id;

      axios.get(urlUser)
        .then(res => {
          setBasket(res.data.basket)
        })
        .catch(err => { console.log(err.message) })
    }
  }, [user.id])

  return (
    <body>
      <Navbar />
      <div className="container">
        {/* {renderRoles(props.roles)} */}
        {!onlyStaff ?
          <div>
            <div className="flex flex-wrap">
              {(roles) ? roles.map(role => {
                if (role != "STAFF") {
                  let roleTxt = "";
                  if (role == "ADMIN") roleTxt = "ADMINISTRATOR"
                  else roleTxt = role
                  return (
                    <button
                      id={`btn-${roleTxt.toLowerCase()}`}
                      onClick={() => router.push("/" + role.toLowerCase())}
                      className="btn btn-carrot radius-5 mx-2"
                    >
                      {roleTxt}
                    </button>
                  )
                }
                else {
                  return ("")
                }
              })
                : ""}
            </div>
          </div>
          : null}
        <main role="main" className="mx-auto mb-3">
          <h2 className="mt-4 pl-0 text-grey ml-2">DASHBOARD</h2>
        </main>
        <MiniProfileCards basket={basket} user={user} />
        <BazaarContainer basket={basket} />
        {/* <SharingLevelModal />
        <ManagerRewardModal />
        <StockistRewardModal /> */}
      </div>
      <Footer />
    </body>
  )
}
