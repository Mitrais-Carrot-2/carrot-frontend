import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import History from "./History";

export default function BarnHistory(props) {
  const [transfers, setTransfers] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8181/api/farmer/transfer/"+props.barnId.id)
      .then((res) => setTransfers(res.data));
  }, []);

  
  return (
    <>
      <div>BarnHistory WIP</div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Shared to</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map((item, index) => {
            return <History item={item} index={index} />
          })}
        </tbody>
      </table>
    </>
  );
}
