import React, { useState } from "react";
import CreateBarn from "./CreateBarn";
import Barn from "./Barn";
// import { useState } from 'react/cjs/react.production.min'

export default function ShowBarn(props) {
  const [showCreateBarn, setShowCreateBarn] = useState(false);
  const [showBarnInfo, setShowBarnInfo] = useState(false);
  return (
    <div>
      <h1>List of Barn:</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Barn Name</th>
            <th>Start Periode</th>
            <th>End Periode</th>
            <th>Carrot Amount</th>
            <th>Distributed Carrot</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {props.barns.map((barn, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{barn.barnName}</td>
                <td>{barn.startDate}</td>
                <td>{barn.endDate}</td>
                <td>{barn.carrotAmount}</td>
                <td>{barn.distributedCarrot}</td>
                <td>{barn.isActive ? "Yes" : "No"}</td>
                <td>
                  <button
                    onClick={() => {
                      setShowBarnInfo(true);
                    }}
                  >
                    Manage
                  </button>
                  <span> | </span>
                  <button>History</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <button
        onClick={() => {
          setShowCreateBarn(true);
        }}
      >
        Create Barn
      </button>
      {showCreateBarn && <CreateBarn closeClick={setShowCreateBarn} />}
      {showBarnInfo && <Barn closeClick={setShowBarnInfo} />}

      <style jsx>{`
        h1 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: purple;
        }
        table {
          border: 1px solid black;
          border-collapse: collapse;
          width: 100%;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        th,
        td {
          border: 1px solid black;
          border-collapse: collapse;
          padding: 5px;
        }
        th {
          background-color: #ddd;
        }
        td {
          text-align: center;
        }
        button {
          background-color: #ddd;
          border: 1px solid black;
          border-collapse: collapse;
          padding: 5px;
        }
        button:hover {
          background-color: #ccc;
        }
        span {
          padding: 5px;
        }
      `}</style>
    </div>
  );
}
