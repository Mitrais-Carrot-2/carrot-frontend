import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import History from "./History";

export default function BarnHistory(props) {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "farmer/transfer/" + props.barnId)
      .then((res) => setTransfers(res.data));
  }, [props.barnId]);

  useEffect(() => {
    axios
      .get("http://localhost:8181/api/farmer/transfer/" + props.barnId)
      .then((res) => setTransfers(res.data));
  }, [props.newTransfer, props.barnId]);

  function updateTable() {
    setTransfers([...transfers, props.newTransfer]);
  }

  return (
    <>
      <hr className="box-title-hr mt-3" />
      <h4 className="mt-1 mb-3 text-lg text-grey ml-0 font-bold tracking-widest">History</h4>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th className="text-center w-40">Shared to</th>
            <th className="w-20">Amount</th>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <History item={item} index={index} />;
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
