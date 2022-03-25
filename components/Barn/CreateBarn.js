import React from "react";
import BarnReward from "./BarnReward";
import { AiOutlineClose } from "react-icons/ai";
import Table from "@components/Table";
import Modal from "@components/Modal";

export default function CreateBarn(props) {
  function createTable() {
    return (
      <div>
        <form>
          <h2>Barn Details:</h2>
          <div className="barn-details">
            <label>Barn Name:</label>
            <input type="text" name="barnName" />
            <label>Start Periode:</label>
            <input type="date" name="startPeriode" />
            <label>End Periode:</label>
            <input type="date" name="endPeriode" />
            <label>Carrot Amount</label>
            <input type="number" name="carrotAmount" />
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
  return (
    <div >
      <Modal title="Create Barn" body={createTable()} action="Create Barn" closeClick={props.closeClick} />
    </div>
  );
}
