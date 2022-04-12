import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { basePath } from 'next.config';

import Reward from "./Reward";

export default function BarnReward(props) {
  const [reward, setReward] = useState([]);
  const [newReward, setNewReward] = useState({
    barn_id: props.id.id,
  });
  
  const [editedValue, setEditedValue] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}admin/barnReward/${props.id.id}`)
      .then((res) => {
        console.log(res);
        setReward(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteReward(id) {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}admin/barnReward/${id}`)
      .then((res) => {
        console.log(res);
        const noDeleted = reward.filter((item) => item.id !== id);
        setReward(noDeleted);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function appendReward() {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}admin/barnReward/`, newReward)
      .then((res) => {
        console.log(res.data.t.id);
        setReward([
          ...reward,
          {
            id: res.data.t.id,
            barnId: props.id.id,
            rewardDescription: newReward.reward_decription,
            carrotAmount: newReward.carrot_amount,
            givingConditional: newReward.giving_conditional,
          },
        ]);
        setNewReward(newReward)
      }
      )
      .catch((err) => {
        window.alert("Reward creation failed");
        console.log(err);
      });
    setNewReward({ barn_id: props.id.id });
  }

  function editReward(editedValue) {
    const id = editedValue.id;
    const send ={
      reward_description: editedValue.rewardDescription,
      carrot_amount: editedValue.carrotAmount,
      giving_conditional: editedValue.givingConditional,
    }
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}admin/barnReward/${id}`, send)
    .then((res) => {
      console.log(res);
    })
  }
    

  return (
    <div
      className="overflow-x-scroll"
    >
      <form>
        <div className="form-group">
          <table name="rewardTable">
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
              {reward.map((item, index) => {
                return (
                  
                  <tr key={index}>
                    <Reward index ={index} reward={item} deleteReward={deleteReward} editReward={editReward}/>
                  </tr>
                );
              })}
              <tr>
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  {" "}
                  ...{" "}
                </td>
                <td>
                  <input
                    className="active"
                    type="text"
                    name="rewardDescription"
                    onChange={(e) => {
                      setNewReward({
                        ...newReward,
                        reward_decription: e.target.value,
                      });
                    }}
                  />
                </td>
                <td>
                  <input
                    className="active"
                    type="number"
                    name="carrotAmount"
                    onChange={(e) => {
                      setNewReward({
                        ...newReward,
                        carrot_amount: e.target.value,
                      });
                    }}
                    style={{
                      width: "100px",
                      textAlign: "center",
                    }}
                  />
                </td>
                <td>
                  <input
                    className="active"
                    type="text"
                    name="givingConditional"
                    onChange={(e) => {
                      setNewReward({
                        ...newReward,
                        giving_conditional: e.target.value,
                      });
                    }}
                  />
                </td>
                <td>
                  <p
                    className="btn btn-primary py-0 px-1"
                    onClick={() => {
                      appendReward();
                    }}
                  >
                    +
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
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
          border-collapse: collapse;
          width: 100%;
        }
        table thead {
          background-color: #ddd;
          font-weight: bold;
          font-size: 1rem;
          text-align: center;
        }
        table thead th {
          padding: 0.5rem;
        }
        table tbody td {
          padding: 0.5rem;
          text-align: center;
        }
        .active {
          margin-bottom: 10px;
          border: 4px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          height: 30px;
        }
        .non-active{
          text-align: center;
        }
      `}</style>
    </div>
  );
}
