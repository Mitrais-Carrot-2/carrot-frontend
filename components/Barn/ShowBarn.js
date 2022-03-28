import React, { useState, useEffect } from "react";
import CreateBarn from "./CreateBarn";
import Barn from "./Barn";
// import { useState } from 'react/cjs/react.production.min'

export default function ShowBarn(props) {
  const [showCreateBarn, setShowCreateBarn] = useState(false);
  const [showBarnInfo, setShowBarnInfo] = useState(false);
  const [selectedBarnId, setSelectedBarnId] = useState({});
  const [barns, setBarns] = useState([]);

  useEffect(() => {
    props.barns.sort((a, b) => a.barnName.localeCompare(b.barnName));
    // setBarns(props.barns);
  }, []);

  function shortByName() {
    props.barns.sort((a, b) => a.barnName.localeCompare(b.barnName));
    setBarns(props.barns);
  }

  function shortByAmount() {
    props.barns.sort((a, b) => a.carrotAmount - b.carrotAmount);
    setBarns(props.barns);
  }

  function shortByDate() {
    props.barns.sort((a, b) => a.startDate.localeCompare(b.startDate));
    setBarns(props.barns);
  }

  function sortByActive() {
    props.barns.sort((a, b) => a.active - b.active);
    setBarns(props.barns);
  }

  function relodePage() {
    window.location.reload();
  }
  return (
    <div>
      <h1>List of Barn:</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th
            // onClick={() => shortByName()}
            >
              Barn Name
            </th>
            <th
            // onClick={() => shortByDate()}
            >
              Start Periode
            </th>
            <th
            // onClick={() => shortByDate()}
            >
              End Periode
            </th>
            <th
            // onClick={() => shortByAmount()}
            >
              Carrot Amount
            </th>
            <th>Distributed Carrot</th>
            <th
            // onClick={() => sortByActive()}
            >
              Status
            </th>
            <th>Action</th>
          </tr>
        </thead>
        {props.barns
        .sort((a, b) => a.barnName.localeCompare(b.barnName))
        .map((barn, index) => {
          return (
            <tbody key={barn.id}>
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
                      setSelectedBarnId(barn);
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
      {showCreateBarn && (
        <CreateBarn closeClick={setShowCreateBarn} refreshPage={relodePage} />
      )}
      {showBarnInfo && (
        <Barn
          barnId={selectedBarnId}
          closeClick={setShowBarnInfo}
          refreshPage={relodePage}
        />
      )}

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
