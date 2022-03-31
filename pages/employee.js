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

export default function Employee() {
  const router = useRouter();


  const renderBazaarCards = () => {
    return props.bazaars.map(bazaar => {
        return <BazaarItemCard key={bazaar.id} bazaar={bazaar} />
    })
}

  return (
    <body>
      <Head />
      <Navbar />
      <main role="main" className="container mx-auto sm:px-4">
        <h2 className="mt-4 pl-0 text-grey ml-0">DASHBOARD</h2>
      </main>

      <MiniDashboard/>
      <BazaarCard/>
      
      {/* <section className="bazaar-1-item mb-4">
      </section>

      <section className="bazaar-2-items mb-4">
      </section>

      <section className="bazaar-3-items mb-4">
      </section>

      <section className="bazaar mb-4 pb-5">
      </section> */}
      <SharingLevelModal />
      <ManagerRewardModal />
      <StockistRewardModal />
      <Footer />
    </body>
  );
}
