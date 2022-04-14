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
        .get(process.env.NEXT_PUBLIC_API_URL+"farmer/barn/")
        .then((res) => setBarns(res.data));
    // }
  }, []);

  function updateBarns(newBarns){
    setBarns(newBarns)
  }

  return (
    <body>
      <Navbar />
      <div className="container">
        <div className="search-box text-center overflow-x-auto overflow-y-auto mb-10">
          <button
            className="btn btn-carrot my-2"
            onClick={() => {
              setShowBarns(true);
              setShowDistribution(false);
            }}
          >
            {" "}
            Dashboard{" "}
          </button>
          <button
            className="btn btn-carrot ml-2 my-2"
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
          </button>
        </div>

        <div>
          {showBarns && <ShowBarn updateBarns={updateBarns} />}
          {showDistribution && <Distribution barn={activeBarn} />}
        </div>
      </div>
    </body>
  );
}
