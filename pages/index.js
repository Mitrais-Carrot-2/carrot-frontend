import React from "react";
// import Head from "next/head";
import Head from '@components/Head';
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
  // let roles = (jsCookie.get("roles"))?jsCookie.get("roles").split(","):"";
  // const [rolesList, setRolesList] = React.useState(roles);
  
  // useEffect(() => {
  //   if (roles) roles.map((role, i) => {roles[i] = role.substring(5)})
    
  //   if (roles.length == 1 && roles[0] == "STAFF") {
  //     setOnlyStaff(true);
  //   }
  //   setRolesList(roles);
  // }), [];

  // function checkRoles(){
  //   if (rolesList) {return <Employee onlyStaff={onlyStaff} roles={rolesList} />}
  //   else {
  //     router.push("/sign-in");
  //     return "";
  //   }
  // }

  return (
    <>
      <style jsx>{`
        .btn {
          margin-left: 10px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      `}</style>
      <Head title="Dashboard" />
      <Employee />
      {/* {checkRoles()} */}
      
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
