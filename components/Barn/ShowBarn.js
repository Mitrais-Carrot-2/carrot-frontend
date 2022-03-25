import React, {useState} from 'react'
import CreateBarn from './CreateBarn'
// import { useState } from 'react/cjs/react.production.min'

export default function ShowBarn() {
  const [showCreateBarn, setShowCreateBarn] = useState(false)
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
            <th>Carrot Left</th>
            <th>Status</th>
            <th>Released</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Barn 1</td>
            <td>2020-01-01</td>
            <td>2020-01-31</td>
            <td>100</td>
            <td>100</td>
            <td>Open</td>
            <td>Yes</td>
            <td>
              <button>Manage</button>
              <span> | </span>
              <button>History</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => {
          setShowCreateBarn(true)
        }}
        
      >Create Barn</button>
      {
        showCreateBarn && <CreateBarn closeClick={setShowCreateBarn} />
      }

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
      th, td {
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
  
  )
  
}
