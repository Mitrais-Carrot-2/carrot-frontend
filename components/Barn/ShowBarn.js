import React, { useState, useEffect } from "react";
import CreateBarn from "./CreateBarn";
import Barn from "./Barn";
import BarnHistory from "./BarnHistory";
import Modal from "@components/Modal";
import axios from "axios";


export default function ShowBarn(props) {
  const [showCreateBarn, setShowCreateBarn] = useState(false);
  const [showBarnInfo, setShowBarnInfo] = useState(false);
  const [showBarnHistory, setShowBarnHistory] = useState(false);
  const [selectedBarnId, setSelectedBarnId] = useState({});
  const [barns, setBarns] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL+"farmer/barn/")
      .then((res) => setBarns(res.data.sort((a, b) => a.barnName.localeCompare(b.barnName))));
  }, []);

  useEffect(() => {
    props.updateBarns(barns)
  }, [barns])

  function updateTable(newBarn) {
    setBarns([...barns, newBarn]);
    
  }
  function editTable(selectedBarn){
    const temp = barns
    temp.map((item) => {
      if (item.id === selectedBarn.id) {
        item.barnName = selectedBarn.barnName;
        item.carrotAmount = selectedBarn.carrotAmount;
        item.distributedCarrot = selectedBarn.distributedCarrot;
        item.isActive = selectedBarn.isActive;
        item.startDate = selectedBarn.startDate;
        item.endDate = selectedBarn.endDate;
      }
    });

  }
  return (
    <div>
      <h1 id="farmer-dashboard" className="text-purple-500 text-4xl font-bold lowercase ml-2 mb-2">
        Farmer Dashboard
      </h1>
      <div className="bg-white rounded shadow-md p-4 mb-4 overflow-x-scroll">
        <h2>List of barn</h2>
        <table id="list-of-barns" className="w-5/6 overflow-x-scroll">
          <thead>
            <tr>
              <th>#</th>
              <th>Barn Name</th>
              <th>Start Periode</th>
              <th>End Periode</th>
              <th className="w-4">Carrot Amount</th>
              <th className="w-5">Distributed Carrot</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {barns
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
                      >
                        History
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
        <button
        id="btn-create-barn"
          onClick={() => {
            setShowCreateBarn(true);
          }}
        >
          Create Barn
        </button>
      </div>
      {showCreateBarn && <CreateBarn closeClick={setShowCreateBarn} updateTable={updateTable} />}
      {showBarnInfo && (
        <Barn
          barnId={selectedBarnId}
          editTable={editTable}
          closeClick={setShowBarnInfo}
          // reloadPage={reloadPage}
        />
      )}
      {showBarnHistory && (
        <Modal
          title={"History of " + selectedBarnId.barnName}
          body={
            <BarnHistory
              barnId={selectedBarnId.id}
              closeClick={setShowBarnHistory}
            />
          }
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
