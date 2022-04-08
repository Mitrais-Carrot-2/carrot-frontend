import Head from "@components/Head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import StockistRewardModal from "@components/StockistRewardModal";
import ManagerRewardModal from "@components/ManagerRewardModal";
import { useRouter } from "next/router";
import SharingLevelModal from "@components/SharingLevelModal";
import MiniDashboard from "@components/employee/MiniDashboard";
import BazaarCard from "@components/employee/BazaarCard";
import { useEffect } from "react";
import axios from "axios";
import BazaarContainer from "@components/employee/BazaarContainer"

export default function Employee(props) {
  const router = useRouter();

  function renderRoles(roles){
    return (
      <>
        {!props.onlyStaff ?
          <div className="container search-box border-1 sm:px-4">
            {/* <div className="flex flex-wrap">
            <div className="md:w-full pr-4 pl-4">
            <h4 className="text-grey-dark">Choose your role:</h4>
            </div>
          </div> */}
            <div className="flex flex-wrap">
              {
                roles.includes("ROLE_MANAGER") ?
                  <button
                    id="menu-manager"
                    type="button"
                    onClick={() => router.push("/manager")}
                    className="btn btn-carrot radius-5 bg-[#ff5722] mx-2"
                  >
                    Manager
                  </button>
                  : null
              }
              {/* <button
                onClick={() => router.push("/employee")}
                className="btn btn-carrot radius-5"
              >
                Employee
            </button> */}
              {
                roles.includes("ROLE_MERCHANT") ?
                  <button
                    onClick={() => router.push("/merchant")}
                    className="btn btn-carrot radius-5 mx-2"
                  >
                    Merchant
                  </button>
                  : null
              }
              {
                roles.includes("ROLE_FARMER") ?
                  <button
                    id="to-farmer-dashboard"
                    onClick={() => router.push("/farmer")}
                    className="btn btn-carrot radius-5 mx-2"
                  >
                    Farmer
                  </button>
                  : null
              }
              {
                roles.includes("ROLE_ADMIN") ?
                  <button
                    onClick={() => router.push("/admin")}
                    className="btn btn-carrot radius-5 mx-2"
                  >
                    {" "}
                    Administrator
                  </button>
                  : null
              }
            </div>
          </div>
          : null}
      </>
    )
  }

  return (
    <body>
      <Head />
      <Navbar />
      <div className="container">
        {renderRoles(props.roles)}
        <main role="main" className="container mx-auto sm:px-4">
          <h2 className="mt-4 pl-0 text-grey ml-0">DASHBOARD</h2>
        </main>
        <MiniDashboard/>
        <BazaarContainer/>
        <SharingLevelModal />
        <ManagerRewardModal />
        <StockistRewardModal />
      </div>
      <Footer />
    </body>
  )
}
