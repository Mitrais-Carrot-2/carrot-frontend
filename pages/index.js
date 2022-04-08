import React from "react";
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
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../redux/reducers";
import { createWrapper } from "next-redux-wrapper";
import jsCookie from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Employee from "./employee";
import ManagerRewardModal from "@components/ManagerRewardModal";
import StockistRewardModal from "@components/StockistRewardModal";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => (state.user.info ? state.user.info : {}));
  const [onlyStaff, setOnlyStaff] = React.useState(false);
  // const roles = user.roles;

  // console.log(roles);
  let roles = (jsCookie.get("roles"))?jsCookie.get("roles").split(","):"";
  useEffect(() => {
    if (roles.length == 1 && roles[0] == "ROLE_STAFF") {
      setOnlyStaff(true);
    }
    console.log(roles);
  });

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
      <div className="w-5/6 mx-auto">
        {/* <main role="main" className="container mx-auto sm:px-4">
          <h2 className="pl-0 text-grey ml-0">MITRAIS CARROT PROTOTYPE</h2>
          <p className="text-teal-500">
            This page is not a part of Mitrais Carrot Web App, I made it just to
            make it easier for you to switch between role. <br />
            This is a *pre-alpha*, expect plenty of bugs and missing features.
            Please report them if you found one
          </p>
        </main> */}
        <section className="">
          {!onlyStaff ?
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
                      type="button"
                      onClick={() => router.push("/manager")}
                      className="btn btn-carrot radius-5 bg-[#ff5722]"
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
                      className="btn btn-carrot radius-5"
                    >
                      Merchant
                    </button>
                    : null}
                {
                  roles.includes("ROLE_FARMER") ?
                    <button
                      id="to-farmer-dashboard"
                      onClick={() => router.push("/farmer")}
                      className="btn btn-carrot radius-5"
                    >
                      Farmer
                    </button>
                    : null}
                {
                  roles.includes("ROLE_ADMIN") ?
                    <button
                      onClick={() => router.push("/admin")}
                      className="btn btn-carrot radius-5"
                    >
                      {" "}
                      Administrator
                    </button>
                    : null}
              </div>
            </div>
            : null}
          <div className="mt-5">
            <section className="mini-dashboard my-4">
              <h2 className="pl-0 text-grey -mt-3 ml-0">DASHBOARD</h2>
              <div className="mx-auto ">
                <div className="flex flex-wrap ">
                  <div className="lg:w-1/3 md:w-full lg:pr-4 mt-3">
                    <div className="flex flex-wrap  box-profile soft-shadow px-0 mr-0">
                      <div className="w-1/3 my-auto">
                        <img
                          src="img/user.jpg"
                          alt=""
                          style={{ maxWidth: "80%" }}
                          className="w-full max-w-80% mx-6 rounded-full lg:p-1 md:p-8"
                        />
                      </div>
                      <div className="min-w-[180px] lg:w-2/3 sm:w-auto px-3 my-auto pl-3">
                        <h4 className="mb-0 font-bold lg:text-[14px] md:text-[30px] text-white">Henokh Santoso</h4>
                        <p className="text-white lg:text-lg md:text-[20px]">Mitrais Employee</p>
                        {/* <!-- <a href="edit-profile.html" class="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded badge-white">Edit Profile</a> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-full lg:px-4 mt-3">
                    <div className="flex flex-wrap  box-carrot px-0 mr-0">
                      {/* <div className="md:w-1/3 pr-4 pl-4 my-auto"> */}
                      <div className="w-1/3 my-auto">
                        <img
                          src=" img/mc-icon-carrot.png"
                          alt=""
                          style={{ maxWidth: "80%" }}
                          className="w-full max-w-80% mx-6 rounded-full lg:p-1 md:p-8"
                        />
                      </div>
                      <div className="md:w-2/3 pr-4 pl-4 my-auto">
                        <h4 className="mb-0 lg:text-[16px] md:text-[30px] text-white">
                          You&apos;ve earned <span className="font-bold">560</span> carrots!
                        </h4>
                        {/* <button className="mt-2 sm:text-2xl hover:text-[#fc4a1a] inline-block p-1 text-center font-semibold lg:text-sm align-baseline leading-none rounded badge-white"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          Share Carrot
                        </button> */}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-full lg:pl-4 mt-3">
                    <div className="flex flex-wrap  box-additional px-0">
                      {/* <div className="md:w-1/3 pr-4 pl-4 my-auto"> */}
                      <div className="w-1/3 my-auto">
                        <img
                          src=" img/mc-icon-transaction.png"
                          alt=""
                          style={{ maxWidth: "80%" }}
                          className="w-full max-w-80% mx-6 rounded-full lg:p-1 md:p-8"
                        />
                      </div>
                      <div className="md:w-2/3 pr-4 pl-4 my-auto">
                        <h4 className="mb-0 font-bold lg:text-[14px] md:text-[30px] text-white">Carrots Transaction History</h4>
                        <a
                          href="transaction-history.html"
                          className="mt-2 sm:text-2xl inline-block p-1 text-center font-semibold lg:text-sm align-baseline leading-none rounded badge-white"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="mt-3">
            <section className="bazaar-1-item mb-4">
              <div className="container mx-auto search-box p-4">
                <div className="flex flex-wrap">
                  <div className="md:w-full pr-4 pl-4">
                    <hr className="box-title-hr" />
                    <h4 className="my-2 box-title">APRIL MOP BAZAAR</h4>
                  </div>
                  <div className="md:w-1/2 pr-4 pl-4 br-1">
                    <img
                      src="img/bazaar_vespa.jpg"
                      className="max-w-full h-auto p-6"
                      alt=""
                    />
                  </div>
                  <div className="md:w-1/2 pr-4 pl-4 self-center p-12">
                    <h3>2018 Vespa 946 Limited Edition</h3>
                    <h4>
                      <strong className="carrot-orange">350.000 Carrots</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                      eius velit dolores exercitationem porro tempore, ipsa suscipit
                      quia. Libero voluptate quibusdam neque numquam error quas ipsa
                      hic voluptatem aliquam, necessitatibus.
                    </p>
                    <a
                      href="item-details.html"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot radius-5"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="bazaar-2-items mb-4">
              <div className="container mx-auto search-box p-4">
                <div className="flex flex-wrap ">
                  <div className="md:w-full pr-4 pl-4">
                    <hr className="box-title-hr" />
                    <h4 className="my-2 box-title">Black Friday Bazaar</h4>
                  </div>
                  <div className="md:w-1/2 pr-4 pl-4 br-1">
                    <div className="text-center">
                      <img
                        src="img/bazaar_macbook.jpg"
                        className="max-w-full h-auto p-6 bazaar-item mb-3"
                        alt=""
                      />
                    </div>
                    <div className="px-3">
                      <h3>2017 15&quot; Macbook Pro with Touchbar</h3>
                      <h4>
                        <strong className="carrot-orange">150.000 Carrots</strong>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                        eius velit dolores exercitationem porro tempore, ipsa suscipit
                        quia. Libero voluptate quibusdam neque numquam error quas ipsa
                        hic voluptatem aliquam, necessitatibus.
                      </p>
                      <a
                        href="item-details.html"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot radius-5"
                      >
                        Buy
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/2 pr-4 pl-4">
                    <div className="text-center">
                      <img
                        src="img/bazaar_iphone.jpg"
                        className="max-w-full h-auto p-6 bazaar-item mb-3"
                        alt=""
                      />
                    </div>
                    <div className="px-3">
                      <h3>iPhone X 64Gb</h3>
                      <h4>
                        <strong className="carrot-orange">85.000 Carrots</strong>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                        eius velit dolores exercitationem porro tempore, ipsa suscipit
                        quia. Libero voluptate quibusdam neque numquam error quas ipsa
                        hic voluptatem aliquam, necessitatibus.
                      </p>
                      <a
                        href="item-details.html"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot radius-5"
                      >
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bazaar-3-items mb-4">
              <div className="container mx-auto search-box p-4">
                <div className="flex flex-wrap content-end">
                  <div className="md:w-full pr-4 pl-4">
                    <hr className="box-title-hr" />
                    <h4 className="my-2 box-title">Easter Bazaar</h4>
                  </div>
                </div>
                <div className="flex flex-wrap  mt-3">
                  <div className="md:w-1/3 pr-4 pl-4">
                    <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                      <img
                        className="w-full rounded rounded-t"
                        src="img/bazaar_macbook.jpg"
                        alt="Bazaar Item"
                      />
                      <div className="flex-auto p-6">
                        <h5 className="mb-3">15&quot; MacBook Pro</h5>
                        <p className="mb-0">150.000 Carrots</p>
                      </div>
                      <a
                        href="#"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/3 pr-4 pl-4">
                    <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                      <img
                        className="w-full rounded rounded-t"
                        src="img/bazaar_iphone.jpg"
                        alt="Bazaar Item"
                      />
                      <div className="flex-auto p-6">
                        <h5 className="mb-3">iPhone X 64Gb</h5>
                        <p className="mb-0">85.000 Carrots</p>
                      </div>
                      <a
                        href="#"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/3 pr-4 pl-4">
                    <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                      <img
                        className="w-full rounded rounded-t"
                        src="img/bazaar_helmet.jpg"
                        alt="Bazaar Item"
                      />
                      <div className="flex-auto p-6">
                        <h5 className="mb-3">Fly Helmet</h5>
                        <p className="mb-0">1.000 Carrots</p>
                      </div>
                      <a
                        href="#"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bazaar mb-4 pb-5">
              <div className="container mx-auto search-box p-4">
                <div className="flex flex-wrap content-end">
                  <div className="md:w-full pr-4 pl-4">
                    <hr className="box-title-hr" />
                    <h4 className="my-2 box-title">Mid-Year Bazaar</h4>
                  </div>
                </div>
                <div className="flex flex-wrap  mt-3">
                  <div className="md:w-1/4 pr-4 pl-4">
                    <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                      <img
                        className="w-full rounded rounded-t"
                        src="img/bazaar_macbook.jpg"
                        alt="Bazaar Item"
                      />
                      <div className="flex-auto p-6">
                        <h5 className="mb-3">15&quot; MacBook Pro</h5>
                        <p className="mb-0">150.000 Carrots</p>
                      </div>
                      <a
                        href="#"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/4 pr-4 pl-4">
                    <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                      <img
                        className="w-full rounded rounded-t"
                        src="img/bazaar_iphone.jpg"
                        alt="Bazaar Item"
                      />
                      <div className="flex-auto p-6">
                        <h5 className="mb-3">iPhone X 64Gb</h5>
                        <p className="mb-0">85.000 Carrots</p>
                      </div>
                      <a
                        href="#"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/4 pr-4 pl-4">
                    <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                      <img
                        className="w-full rounded rounded-t"
                        src="img/bazaar_helmet.jpg"
                        alt="Bazaar Item"
                      />
                      <div className="flex-auto p-6">
                        <h5 className="mb-3">Fly Helmet</h5>
                        <p className="mb-0">1.000 Carrots</p>
                      </div>
                      <a
                        href="#"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/4 pr-4 pl-4">
                    <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                      <img
                        className="w-full rounded rounded-t"
                        src="img/bazaar_burger.jpg"
                        alt="Bazaar Item"
                      />
                      <div className="flex-auto p-6">
                        <h5 className="mb-3">Burger King Voucher</h5>
                        <p className="mb-0">500 Carrots</p>
                      </div>
                      <a
                        href="#"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <SharingLevelModal />
            <ManagerRewardModal />
            <StockistRewardModal />
          </div>
        </section>
      </div>
      <Footer />
      <SharingLevelModal />
      <ManagerLevelModal />
      <StockistLevelModal />
    </>
  );
}

// const bindMiddleware = (middleware) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

// const initStore = () => {
//   return createStore(reducer, bindMiddleware([thunkMiddleware]));
// };

// export const wrapper = createWrapper(initStore);
