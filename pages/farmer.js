import ShowBarn from "@components/Barn/ShowBarn";
import Navbar from "@components/Navbar";
import Distribution from "@components/Barn/Distribution";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import jsCookie from "js-cookie";
import Router from "next/router";

export default function Farmer() {
  const [barns, setBarns] = useState([]);
  const [activeBarn, setActiveBarn] = useState({});
  const [showBarns, setShowBarns] = useState(false);
  const [showDistribution, setShowDistribution] = useState(false);

  useEffect(() => {
    if (jsCookie.get("roles")){
    if (!jsCookie.get("roles").split(",").includes("ROLE_FARMER")) {
      Router.push("/");
    } else {
      console.log("token", jsCookie.get("token"));
      axios
        .get(process.env.NEXT_PUBLIC_API_URL + "farmer/barn/", {
          headers: {
            Authorization: `Bearer ${jsCookie.get("token")}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setBarns(res.data);
          console.log("barns", res.data);
        });
    }
  }
  }, []);

  function updateBarns(newBarns) {
    setBarns(newBarns);
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
