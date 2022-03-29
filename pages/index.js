import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import StockistLevelModal from "@components/StockistRewardModal";
import ManagerLevelModal from "@components/ManagerRewardModal";
import { useRouter } from "next/router";
import SharingLevelModal from "@components/SharingLevelModal";
import defaultImage from "@public/img/defaultImage.png";
import defaultProduct from "@public/img/default-product.png";
import carrotIcon from "@public/img/mc-icon-carrot.png";
import carrotIconTwo from "@public/img/mc-icon-transaction.png";
import { Button, ButtonDropdown } from "reactstrap";

// import { login } from "redux/actions/authActions";
// import { wrapper } from "redux/store";

export default function Home() {
  const router = useRouter();

  const user = {
    firstName: "Ilham",
    jobFamily: "SE",
    jobGrade: "JP",
    lastName: "Fadhil",
    roles: {
      name: "STAFF",
    },
  };

  return (
    <>
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
                <h3>{user.firstName + " " + user.lastName}</h3>
                <h4>Mitrais {user.roles.name}</h4>
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
      <Footer />
      <SharingLevelModal />
      <ManagerLevelModal />
      <StockistLevelModal />
    </>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps( async ({req, store}) => {
//   await store.dispatch(login(req))
// });
