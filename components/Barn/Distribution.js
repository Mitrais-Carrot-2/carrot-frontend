import Modal from "@components/Modal";
import React, { useEffect, useState } from "react";
import BarnHistory from "./BarnHistory";
import axios from "axios";
import Select from "react-select";
import jsCookie from "js-cookie";

export default function Distribution(props) {
  const [distributeCarrot, setDistributeCarrot] = useState(false);
  const [managerId, setManagerId] = useState(0);
  const [managerName, setManagerName] = useState("");
  const [carrotAmount, setCarrotAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [newTransfer, setNewTransfer] = useState([]);
  const [manager, setManager] = useState([]);

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API_URL+"farmer/transfer/manager", {
      headers: {
          Authorization: `Bearer ${jsCookie.get("token")}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "application/json",
      },
  }).then((response) => setManager(response.data));
  }, []);

  let options = [];

  options = manager.map((s) => {
    return {
      value: s.userId,

      label: `${s.firstName} ${s.lastName}`,
    };
  });

  function getTransactionDetail() {
    return (
      <div className="grid grid-cols-2 gap-1">
        <label className="align-right">Manager ID:</label>
        <Select
          className="my-2"
          id="manager-id"
          name="manager-id"
          options={options}
          onChange={(item) => {
            setManagerId(item.value);
            setManagerName(item.label);
          }}
        />
        <input type="hidden" name="manager-name" value={managerName} />
        <label>Carrot Amount:</label>
        <input
          value={carrotAmount}
          type="text"
          name="carrotAmount"
          onChange={(item) => setCarrotAmount(item.target.value)}
        />
        <label>Message:</label>
        <textarea
          value={message}
          type="text"
          name="message"
          onChange={(item) => setMessage(item.target.value)}
        />
      </div>
    );
  }
  function sendCarrot() {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL+"farmer/transfer/distribute", {
        managerId: managerId,
        barnId: props.barn.id,
        carrotAmount: carrotAmount,
        note: message,
      }, {
        headers: {
            Authorization: `Bearer ${jsCookie.get("token")}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
        },
    })
      .then((res) => {
        console.log(res);
        window.alert(
          `Successfully distributed ${carrotAmount} carrot to ${managerName}`
        );
        setNewTransfer([
          ...newTransfer,
          {
            id: res.data.transferId,
            carrotAmount: res.data.carrotAmount,
            receiverId: res.data.receiverId,
            shareAt: res.data.shareAt,
            note: res.data.note,
          },
        ]);
        props.barn.carrotAmount -= res.data.carrotAmount;
        props.barn.distributedCarrot += res.data.carrotAmount;
      })
      .catch((err) => {
        console.log(err);
        window.alert(`Failed to distribute carrot, Error: ${err}`);
      });
  }
  function showPage(){
    if (props.barn) {
      return (
        <>
          {/* <h1 className="text-purple-500 text-4xl font-bold lowercase ml-2 mb-2"> */}
          <h2 id="farmer-dashboard" className="text-grey ml-4 mb-2">
            Distribution
          </h2>
          <div className="search-box py-2">
            <hr className="box-title-hr mt-3" />
            <h4 className="mt-1 mb-3 text-lg text-grey ml-0 font-bold tracking-widest">Distribution Details:</h4>
            <table 
            className="w-2/10 overflow-x-scroll mb-2">
              <tr>
                <th>Barn Name</th>
                <td>{props.barn.barnName}</td>
              </tr>
              <tr>
                <th>Harvested Carrot</th>
                <td>{props.barn.carrotAmount + props.barn.distributedCarrot}</td>
              </tr>
              <tr>
                <th>Distributed Carrot</th>
                <td>{props.barn.distributedCarrot}</td>
              </tr>
              <tr>
                <th>Remaining Carrot</th>
                <td>{props.barn.carrotAmount}</td>
              </tr>
            </table>
          </div>
          <div className="search-box my-3 text-center">
            <button
              // className="btn bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded"
              className="btn btn-info text-white py-2 px-4 rounded"
              onClick={() => setDistributeCarrot(true)}
            >
              Distribute Carrot
            </button>
          </div>
          {distributeCarrot && (
            <Modal
              title="Distribution Detail"
              body={getTransactionDetail()}
              closeClick={setDistributeCarrot}
              action="Send Carrot"
              actionClick={sendCarrot}
            />
          )}
          <div className="search-box">
            <BarnHistory barnId={props.barn.id} newTransfer={newTransfer} />
          </div>
          <style>
            {`
              th {
                  cursor: pointer;
                  padding-right: 10px;
              }
              `}
          </style>
        </>
      );
    } else {
      return <h1>No Active Barn</h1>;
    }
  }

  return <>{showPage()}</>;
}
