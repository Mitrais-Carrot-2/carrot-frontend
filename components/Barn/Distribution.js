import Modal from "@components/Modal";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import BarnHistory from "./BarnHistory";
import axios from "axios";
import Select from "react-select";
import { basePath } from "next.config";

export default function Distribution(props) {
  const [distributeCarrot, setDistributeCarrot] = useState(false);
  const [managerId, setManagerId] = useState(0);
  const [managerName, setManagerName] = useState("");
  const [carrotAmount, setCarrotAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [newTransfer, setNewTransfer] = useState([]);
  const [manager, setManager] = useState([]);

  const url = `http://localhost:8181/api/farmer/transfer/manager`;

  useEffect(() => {
    axios.get(url).then((response) => setManager(response.data));
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
      // .post(basePath + "farmer/transfer/distribute", {
        managerId: managerId,
        barnId: props.barn.id,
        carrotAmount: carrotAmount,
        note: message,
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
          <h1 className="text-purple-500 text-4xl font-bold lowercase ml-2 mb-2">
            Distribution
          </h1>
          <div className="container py-2 bg-white">
            <p className="text-2xl uppercase py-2 text-orange-500">
              Distribution Details:
            </p>
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
              title="Distribution Detail"
              body={getTransactionDetail()}
              closeClick={setDistributeCarrot}
              action="Send Carrot"
              actionClick={sendCarrot}
            />
          )}
          <div className="container py-2 bg-white">
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
