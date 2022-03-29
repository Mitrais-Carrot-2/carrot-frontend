import ShowBarn from "@components/Barn/ShowBarn";
import Navbar from "@components/Navbar";
import React from "react";
import axios from "axios";
import Head from "next/head";
import { headers } from "next.config";
import { useState, useEffect } from "react";

export default function farmer() {
  const [barns, setBarns] = React.useState([]);
  
  useEffect(() => {
        axios
          .get("http://localhost:8181/api/farmer/barn/")
          .then((res) => setBarns(res.data));
      }, []);

  return (
    <body>
      <Navbar />
      <div className="container">
        <ShowBarn barns={barns} />
      </div>
    </body>
  );
}
