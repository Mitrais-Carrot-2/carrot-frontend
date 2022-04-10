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


export default function Employee(props) {
  const router = useRouter();

  const [basket, setBasket] = useState();
  const user = useSelector((state) => (state.user.info ? state.user.info : {}));

  const urlUser = process.env.NEXT_PUBLIC_API_URL + "basket/" + user.id;

  useEffect(() => {
    axios.get(urlUser)
      .then(res => {
        setBasket(res.data.basket)
      })
  }, [])

  function renderRoles(roles){
    return (
      <>
        {!props.onlyStaff ?
          <div>
            <div className="flex flex-wrap">
              {roles.map(role => {
                  if (role != "STAFF") {
                    let roleTxt = "";
                    if (role == "ADMIN") roleTxt = "ADMINISTRATOR"
                    else roleTxt = role
                    return (
                      <button
                      onClick={() => router.push("/"+role.toLowerCase())}
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
              }
            </div>
          </div>
          : null}
      </>
    )
  }

  return (
    <body>
      <Navbar />
      <div className="container">
        {renderRoles(props.roles)}
        <main role="main" className="mx-auto mb-3">
          <h2 className="mt-4 pl-0 text-grey ml-2">DASHBOARD</h2>
        </main>
        <MiniProfileCards basket={basket} user={user}/>
        <BazaarContainer basket={basket} />
        {/* <SharingLevelModal />
        <ManagerRewardModal />
        <StockistRewardModal /> */}
      </div>
      <Footer />
    </body>
  )
}
