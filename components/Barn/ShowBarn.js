import React, { useState, useEffect } from "react";
import CreateBarn from "./CreateBarn";
import Barn from "./Barn";
import BarnHistory from "./BarnHistory";
import Modal from "@components/Modal";
import axios from "axios";
import jsCookie from "js-cookie";
import DataTable from 'react-data-table-component';
import { Fragment } from 'react/cjs/react.production.min';


export default function ShowBarn(props) {
  const [showCreateBarn, setShowCreateBarn] = useState(false);
  const [showBarnInfo, setShowBarnInfo] = useState(false);
  const [showBarnHistory, setShowBarnHistory] = useState(false);
  const [selectedBarnId, setSelectedBarnId] = useState(0);
  const [selectedBarn, setSelectedBarn] = useState({});
  const [barns, setBarns] = useState([]);
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

  const columns = [
    {
        name: '#',
        cell: (row, index) => index+1,
        maxWidth: '10px',
    },
    {
        name: 'id',
        selector: row => row.id,
        omit: true,
    },
    {
        name: 'Barn Name',
        selector: row => row.barnName,
        minWidth: '50px',
        sortable: true
    },
    {
        name: 'Start Periode',
        selector: row => row.startDate,
        sortable: true
    },
    {
        name: 'End Periode',
        selector: row => row.endDate,
        sortable: true
    },
    {
        name: 'Carrot Amount',
        selector: row => row.carrotAmount,
        sortable: true
    },
    {
        name: 'Distributed Carrot',
        selector: row => row.distributedCarrot,
        sortable: true
    },
    {
        name: 'Status',
        selector: row => row.isActive? 'Active': 'Inactive',
        sortable: true
    },
    {
        name: 'Action',
        minWidth: '250px',
        cell: (row) => {
            return (
                <Fragment>
                    <button
                          className="btn btn-info m-2"
                          onClick={() => {
                          setSelectedBarn({"id" : row.id,
                                          "barnName" : row.barnName,
                                          "startDate" : row.startDate,
                                          "endDate" : row.endDate,
                                          "carrotAmount" : row.carrotAmount,
                                          "distributedCarrot" : row.distributedCarrot,
                                          "isActive" : row.isActive});
                          setShowBarnInfo(true);
                        }}
                      >
                        Manage
                      </button>
                      <button
                          className="btn btn-info m-2"
                          onClick={() => {
                            setSelectedBarn({"id" : row.id,
                            "barnName" : row.barnName,
                            "startDate" : row.startDate,
                            "endDate" : row.endDate,
                            "carrotAmount" : row.carrotAmount,
                            "distributedCarrot" : row.distributedCarrot,
                            "isActive" : row.isActive});
                          setShowBarnHistory(true);
                        }}
                      >
                        History
                      </button>
                </Fragment>
            );
        },
        button: true,
    },
];

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL+"farmer/barn/", {
        headers: {
            Authorization: `Bearer ${jsCookie.get("token")}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
        },
    })
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
      <h2 id="farmer-dashboard" className="text-grey ml-4 mb-2">
        Farmer Dashboard
      </h2>
      <div className="bg-white rounded shadow-md p-4 mb-4 overflow-x-scroll">
        <hr className="box-title-hr" />
        <h4 className="mt-1 mb-3 text-lg text-grey ml-0 font-bold tracking-widest">Barn List</h4>
        <DataTable
            id="list-of-barns"
            columns={columns}
            data={barns}
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        />
        <button
          id="btn-create-barn"
          className="btn btn-info"
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
          barnId={selectedBarn}
          editTable={editTable}
          closeClick={setShowBarnInfo}
        />
      )}
      {showBarnHistory && (
        <Modal
          title={"History of " + selectedBarn.barnName}
          body={
            <BarnHistory
              barnId={selectedBarn.id}
              closeClick={setShowBarnHistory}
            />
          }
          closeClick={setShowBarnHistory}
          action="OK"
          actionClick={setShowBarnHistory}
        />
      )}

      
    </div>
  );
}
