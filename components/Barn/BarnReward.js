import React from 'react'

export default function BarnReward() {
  return (
    <div>
      <form>
        <div className="form-group">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Reward Name</th>
                <th>Reward Amount</th>
                <th>Reward Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Birthday Reward</td>
                <td>10</td>
                <td>REWARD_BIRTHDAY</td>
                <button>Delete</button>
              </tr>
            </tbody>
          </table>
          <button >+create reward</button>
        </div>
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        table {
          border: 1px solid black;
        }
        table thead {
          background-color: #ddd;
          font-weight: bold;
          font-size: 1rem;
        }
        table thead th {
          padding: 0.5rem;
        }
        table tbody td {
          padding: 0.5rem;
          text-align: center;
        }
        button {
          font-size: 0.9rem;
          background-color: #ddd;
          margin-top: 0.25rem;
          margin-left: 1rem;
          padding: 0.2rem;
          border: 1px solid black;
          border-radius: 0.5rem;

        }

      `}</style>
    </div>
  )
}
