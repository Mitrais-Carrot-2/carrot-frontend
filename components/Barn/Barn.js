import Modal from "@components/Modal";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BarnReward from "./BarnReward";

export default function Barn(props) {
  const [selectedBarn, setSelectedBarn] = useState({
    barnName: "Barn xxxx",
    carrotAmount: 0,
    endDate: "0000-00-00",
    id: 0,
    startDate: "0000-00-00",
  });

  useEffect(() => {
    // axios
    //   .get(`http://localhost:8181/api/farmer/barn/${props.barnId}`)
    //   .then((res) => setSelectedBarn(res.data));
    setSelectedBarn(
      props.barnId //gagal fetch karena key value berbeda
    );
    console.log(props.barnId);
  }, []);

  function createTable() {
    return (
      <div>
        <form>
          <h2>Barn Details:</h2>
          <div className="barn-details">
            <label>Barn Name:</label>
            <input
              value={selectedBarn.barnName}
              type="text"
              name="barnName"
              onChange={(item) =>
                setSelectedBarn({
                  ...selectedBarn,
                  barnName: item.target.value,
                })
              }
            />
            <label>Start Periode:</label>
            <input
              value={selectedBarn.startDate}
              type="date"
              name="startPeriode"
              onChange={(item) =>
                setSelectedBarn({
                  ...selectedBarn,
                  startDate: item.target.value,
                })
              }
            />
            <label>End Periode:</label>
            <input
              value={selectedBarn.endDate}
              type="date"
              name="endPeriode"
              onChange={(item) =>
                setSelectedBarn({
                  ...selectedBarn,
                  endDate: item.target.value,
                })
              }
            />
            <label>Carrot Amount</label>
            <input
              value={selectedBarn.carrotAmount}
              type="number"
              name="carrotAmount"
              onChange={(item) =>
                setSelectedBarn({
                  ...selectedBarn,
                  carrotAmount: item.target.value,
                })
              }
            />
          </div>

          <h2>Barn Settings:</h2>
          <BarnReward />
        </form>
        <style jsx>{`
          .barn-details {
            padding: 20px;
            display: flex;
            flex-direction: column;
            flex-wrap: column wrap;
            justify-content: center;
          }
          .barn-details input {
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
          }
        `}</style>
      </div>
    );
  }

  function action() {
    console.log("button clicked");
  }
  return (
    <div>
      Barn
      <Modal
        title={<> Edit Properties on {selectedBarn.barnName}</>}
        body={createTable()}
        closeClick={props.closeClick}
        action="Save"
        actionClick={action}
      />
    </div>
  );
}
