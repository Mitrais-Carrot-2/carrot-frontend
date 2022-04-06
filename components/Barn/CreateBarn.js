import React from "react";
import BarnReward from "./BarnReward";
import Modal from "@components/Modal";
import moment from "moment";
import { useState } from "react";
import axios from "axios";

export default function CreateBarn(props) {
  const today = moment().format("YYYY-MM-DD");
  const nextYear = moment().add(1, "year").format("YYYY-MM-DD");
  const [newBarn, setNewBarn] = useState({
    barn_name: "",
    start_date: today,
    end_date: nextYear,
    carrot_amount: 0,
  });

  function passNewBarnWithApi() {
    console.log(newBarn);
    axios.post("http://localhost:8181/api/farmer/barn/", newBarn)
      .then((res) => {
        console.log(res);
        window.alert("Barn created successfully");
        props.reloadPage();
      })
      .catch((err) => {
        console.log(err.message);
        window.alert("Barn creation failed");
      });
  }
  function createTable() {
    return (
      <div>
        <form>
          <h2>Barn Details:</h2>
          <div className="barn-details">
            <label>Barn Name:</label>
            <input
              value={newBarn.barn_name}
              type="text"
              name="barnName"
              onChange={(item) => setNewBarn({ ...newBarn, barn_name: item.target.value })}
            />
            <label>Start Periode:</label>
            <input
              value={newBarn.start_date}
              type="date"
              name="startPeriode"
              onChange={(item) => setNewBarn({ ...newBarn, start_date: item.target.value })}
            />
            <label>End Periode:</label>
            <input
              value={newBarn.end_date}
              type="date"
              name="endPeriode"
              onChange={(item) => setNewBarn({ ...newBarn, end_date: item.target.value })}
            />
            <label>Carrot Amount</label>
            <input
              value={newBarn.carrot_amount}
              type="number"
              name="carrotAmount"
              onChange={(item) =>
                setNewBarn({ ...newBarn, carrot_amount: item.target.value })
              }
            />
          </div>

          <h2>Barn Settings:</h2>
          Available at Manage Barn
          {/* <BarnReward /> */}
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
  return (
    <div>
      <Modal
        title="Create Barn"
        body={createTable()}
        action="Create Barn"
        closeClick={props.closeClick}
        actionClick={passNewBarnWithApi}
      />
    </div>
  );
}
