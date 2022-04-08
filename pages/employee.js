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

export default function Employee() {
  const router = useRouter();

  return (
    <body>
      <Head />
      <Navbar />
      <div className="container">
        <main role="main" className="container mx-auto sm:px-4">
          <h2 className="mt-4 pl-0 text-grey ml-0">DASHBOARD</h2>
        </main>

        <MiniDashboard/>
        <BazaarContainer/>
        <SharingLevelModal />
        <ManagerRewardModal />
        <StockistRewardModal />
        <Footer />
      </div>
    </body>
  )
}
