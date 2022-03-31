import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import History from "./History";

export default function BarnHistory(props) {
  const [transfers, setTransfers] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8181/api/farmer/transfer/"+props.barnId)
      .then((res) => setTransfers(res.data));
  }, []);

  
  return (
    <>
    <p className="text-2xl uppercase py-2 text-orange-500">History:</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th
              className="text-center w-40"
            >Shared to</th>
            <th
              className="w-20"
            >Amount</th>
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
      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }
          tr {
            border-bottom: 1px solid #ccc;
          }
          th,
          td {
            padding: 10px;
          }
          th {
            text-align: center;
          }
          td {
            text-align: center;
          }
      `}</style>
    </>
  );
}
