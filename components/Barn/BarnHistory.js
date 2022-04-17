import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import History from "./History";
import jsCookie from "js-cookie";

export default function BarnHistory(props) {
  const [transfers, setTransfers] = useState([]);
  const [allManager, setAllManager] = useState([]);
  // const [managerName, setManagerName] = useState([])
  const managerName = useRef("");
  useEffect(() => {
    fetchManager();
  }, []);


  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "farmer/transfer/" + props.barnId, {
        headers: {
            Authorization: `Bearer ${jsCookie.get("token")}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
        },
    })
      .then((res) => setTransfers(res.data));
  }, [props.newTransfer]);

  function updateTable() {
    setTransfers([...transfers, props.newTransfer]);
  }
  
  function showHistory() {
    if (allManager) {
      return (
        transfers.map((item, index) => {
          let manager = allManager.find(
            (manager) => manager.userId === item.receiverId
          );
          if (manager) {
            managerName.current = manager.firstName + " " + manager.lastName;
          }
          else{
            managerName.current = "Not manager (id:" + item.receiverId+")";
          }

        // eslint-disable-next-line react/jsx-key
        return <History item={item} managerName={managerName.current} index={index} />;
      })
      )
    }
  }

  function fetchManager() {
    const urlManager =
      process.env.NEXT_PUBLIC_API_URL + "farmer/transfer/manager";

    axios.get(urlManager).then((response) => setAllManager(response.data));
  }

  return (
    <>
      <hr className="box-title-hr mt-3" />
      <h4 className="mt-1 mb-3 text-lg text-grey ml-0 font-bold tracking-widest">
        History
      </h4>
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
        <tbody>{showHistory()}</tbody>
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
