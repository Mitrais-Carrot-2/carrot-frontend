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
    startDate: "0000-00-00",
  });

  useEffect(() => {
    
    setSelectedBarn(
      {
        barnName: props.barnId.barnName,
        carrotAmount: props.barnId.carrotAmount,
        endDate: props.barnId.endDate,
        startDate: props.barnId.startDate,
      } 
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

  function saveBarn() {
    axios
      .put(`http://localhost:8181/api/farmer/barn/${props.barnId.id}`, selectedBarn)
      .then((res) => {
        console.log(res);
        props.refreshPage();
      })
      .catch((err) => {
        console.log(err);
        // TODO: Prompt error message
      }
      );
    
  }
  return (
    <div>
      Barn
      <Modal
        title={<> Edit Properties on {selectedBarn.barnName}</>}
        body={createTable()}
        closeClick={props.closeClick}
        action="Save"
        actionClick={saveBarn}
      />
    </div>
  );
}
