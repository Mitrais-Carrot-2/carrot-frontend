import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import StockistLevelModal from "@components/StockistRewardModal";
import ManagerLevelModal from "@components/ManagerRewardModal";
import { useRouter } from "next/router";
import SharingLevelModal from "@components/SharingLevelModal";

export default function Home() {
  const router = useRouter();

  return (
    <body>
      <style jsx>{`
        .btn {
          margin-left: 10px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      `}</style>
      <Head>
        <title>Mitrais Carrot</title>
        <meta
          name="description"
          content="Mitrais Carrot is a system used for administrative task of all company trainings."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main role="main" className="container mx-auto sm:px-4">
        <h2 className="pl-0 text-grey ml-0">MITRAIS CARROT PROTOTYPE</h2>
        <p className="text-teal-500">
          This page is not a part of Mitrais Carrot Web App, I made it just to
          make it easier for you to switch between role. <br />
          This is a *pre-alpha*, expect plenty of bugs and missing features.
          Please report them if you found one :){" "}
        </p>
      </main>
      <section className="role py-3">
        <div className="container mx-auto sm:px-4 search-box py-3">
          <div className="flex flex-wrap">
            <div className="md:w-full pr-4 pl-4">
              <h4 className="text-grey-dark">Choose your role:</h4>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="md:w-full pr-4 pl-4">
              <button
                onClick={() => router.push("/employee")}
                className="btn btn-carrot radius-5"
              >
                {" "}
                Employee
              </button>
              <button
                onClick={() => router.push("/manager")}
                className="btn btn-carrot radius-5"
              >
                {" "}
                Manager
              </button>
              <button
                onClick={() => router.push("/merchant")}
                className="btn btn-carrot radius-5"
              >
                {" "}
                Merchant
              </button>
              <button
                onClick={() => router.push("/farmer")}
                className="btn btn-carrot radius-5"
              >
                {" "}
                Farmer / Stockist
              </button>
              <button
                onClick={() => router.push("/admin")}
                className="btn btn-carrot radius-5"
              >
                {" "}
                Administrator
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <SharingLevelModal />
      <ManagerLevelModal />
      <StockistLevelModal />
    </body>
  );
}
