import ShowBarn from "@components/Barn/ShowBarn";
import Navbar from "@components/Navbar";
import Distribution from "@components/Barn/Distribution";
import React from "react";
import axios from "axios";
import Head from "next/head";
import { headers } from "next.config";
import { useState, useEffect } from "react";
import { Button } from "reactstrap";
import jsCookie from "js-cookie";
import Router from "next/router";
import { basePath } from 'next.config';

export default function Farmer() {
  const [barns, setBarns] = useState([]);
  const [activeBarn, setActiveBarn] = useState({});
  const [showBarns, setShowBarns] = useState(true);
  const [showDistribution, setShowDistribution] = useState(false);

  useEffect(() => {
    // if(!jsCookie.get("roles").split(",").includes("ROLE_FARMER")) {
    //   Router.push("/");
    // } else {
      axios
        .get(basePath+"farmer/barn/")
        .then((res) => setBarns(res.data));
    // }
  }, []);

  function updateBarns(newBarns){
    setBarns(newBarns)
    console.log(newBarns)
  }

  return (
    <body>
      <Navbar />
      <div className="container text-center bg-white overflow-x-auto overflow-y-auto h-auto py-20 ">
        <Button
          className="btn bg-orange-600 mb-2"
          onClick={() => {
            setShowBarns(true);
            setShowDistribution(false);
          }}
        >
          {" "}
          Dashboard{" "}
        </Button>
        <Button
          className="btn bg-orange-600 ml-2 mb-2"
          onClick={() => {
            setShowBarns(false);
            setShowDistribution(true);
            // barns.find((barn) => {
            //   if (barn.isActive) {
            //     setActiveBarn(barn);
            //   } else{
            //     setActiveBarn({})
            //   }
            // });
            setActiveBarn(barns.find((barn) => barn.isActive));
          }}
        >
          Distribution
        </Button>
      </div>

      <div className="container">
        {showBarns && <ShowBarn updateBarns={updateBarns} />}
        {showDistribution && <Distribution barn={activeBarn} />}
      </div>
    </body>
  );
}
