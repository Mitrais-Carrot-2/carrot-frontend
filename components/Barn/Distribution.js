import Modal from "@components/Modal";
import React, { useState } from "react";
import { Button } from "reactstrap";
import BarnHistory from "./BarnHistory";
import axios from "axios";

export default function Distribution(props) {
  const [distributeCarrot, setDistributeCarrot] = useState(false);
  const [managerId, setManagerId] = useState(0);
  const [carrotAmount, setCarrotAmount] = useState(0);
  const [message, setMessage] = useState("")
  function getTransactionDetail() {
    return (
      <div className="grid grid-cols-2 gap-1">
        <label className="align-right">Manager ID:</label>
        <input
          value={managerId}
          type="text"
          name="managerId"
          onChange={(item) => setManagerId(item.target.value)}
        />
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
      .post("http://localhost:8181/api/farmer/transfer/distribute", {
        manager_id: managerId,
        barn_id: props.barn.id,
        carrot_amount: carrotAmount,
        message: message,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <h1
        className="text-purple-500 text-4xl font-bold lowercase ml-2 mb-2"
      >Distribution</h1>
      <div className="container py-2 bg-white">
        <p className="text-2xl uppercase py-2 text-orange-500">Distribution Details:</p>
        <table className="w-2/10 overflow-x-scroll">
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
      <div className="container my-3 p-3 bg-white text-center">
        <Button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setDistributeCarrot(true)}
        >
          Distribute Carrot
        </Button>
      </div>
      {distributeCarrot && (
        <Modal
          title="Distributin Detail"
          body={getTransactionDetail()}
          closeClick={setDistributeCarrot}
          action="Send Carrot"
          actionClick={sendCarrot}
        />
      )}
      <div className="container py-2 bg-white">
        <BarnHistory barnId={props.barn.id} />
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
}
