import React, { useState, useEffect } from "react";
import CreateBarn from "./CreateBarn";
import Barn from "./Barn";
import BarnHistory from "./BarnHistory";
import Modal from "@components/Modal";

export default function ShowBarn(props) {
  const [showCreateBarn, setShowCreateBarn] = useState(false);
  const [showBarnInfo, setShowBarnInfo] = useState(false);
  const [showBarnHistory, setShowBarnHistory] = useState(false);
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
      <h1 className="text-purple-500 text-4xl font-bold lowercase ml-2 mb-2">
        Farmer Dashboard
      </h1>
      <div className="bg-white rounded shadow-md p-4 mb-4 overflow-x-scroll">
        <h2>List of barn</h2>
        <table className="w-5/6 overflow-x-scroll">
          <thead>
            <tr>
              <th>#</th>
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
                className="w-4"
                // onClick={() => shortByAmount()}
              >
                Carrot Amount
              </th>
              <th className="w-5">Distributed Carrot</th>
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
                      <button
                        onClick={() => {
                          setSelectedBarnId(barn);
                          setShowBarnHistory(true);
                        }}
                      >History</button>
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
      </div>
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
      {showBarnHistory && (
        <Modal
          title ={"History of "+selectedBarnId.barnName}
          body={<BarnHistory barnId={selectedBarnId} closeClick={setShowBarnHistory} />}
          closeClick={setShowBarnHistory}
          action="OK"
          actionClick={setShowBarnHistory}
          
        />
      )}

      <style jsx>{`
        
        table {
          border-collapse: collapse;
          width: 100%;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        th,
        td {
          border-collapse: collapse;
          padding: 5px;
        }
        th {
          text-align: center;
          border-bottom: 1px solid #ddd;
          border-top: 1px solid #ddd;
        }
        td {
          text-align: center;
        }
        button {
          background-color: #17a2b8;
          border: 1px solid #17a2b8;
          border-radius: 5px;
          color: white;
          text-align: center;
          text-transform: uppercase;
          border-collapse: collapse;
          padding: 5px;
          margin: 2px 2px;
        }
        button:hover {
          background-color: #17a2b8;
        }
        span {
          padding: 5px;
        }
      `}</style>
    </div>
  );
}
