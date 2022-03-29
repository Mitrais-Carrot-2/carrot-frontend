import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";

export default function BarnReward(props) {
  const [reward, setReward] = useState([]);
  const [newReward, setNewReward] = useState({
    barn_id: props.id.id
  })

  useEffect(() => {
    console.log(props.id.id);
    axios
      .get(`http://localhost:8181/api/admin/barnReward/${props.id.id}`)
      .then((res) => {
        console.log(res);
        setReward(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteReward(id) {
    // TODO : Buat API untuk menghapus reward
    axios
      .delete(`http://localhost:8181/api/admin/barnReward/${id}`)
      .then((res) => {
        console.log(res);
        // props.reloadPage();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function appendReward() {
    setReward([...reward, 
      {
        barnId: props.id.id,
        rewardDescription: newReward.reward_description,
        carrotAmount: newReward.carrot_amount,
        givingConditional: newReward.giving_conditional,
      }
    ]);
    axios.post(`http://localhost:8181/api/admin/barnReward/`, newReward )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      setNewReward({barn_id: props.id.id});
  }

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
              {reward.map((item, index) => {
                return (
                  <tr key={item.index}>
                    <td>{index + 1}</td>
                    <td>{item.rewardDescription}</td>
                    <td>{item.carrotAmount}</td>
                    <td>{item.givingConditional}</td>
                    <td>
                      <p
                        onClick={() => {
                          deleteReward(item.index);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </p>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td
                style={{
                  textAlign: "center",
                }}> ... </td>
                <td>
                  <input 
                  type="text"
                  name="rewardDescription"
                  onChange={(e) => {
                    setNewReward({
                      ...newReward,
                      reward_description: e.target.value,
                    });
                  }}
                  />
                </td>
                <td>
                  <input
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
                    className="btn btn-primary"
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
        input {
          margin-bottom: 10px;
          border: 4px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          height: 30px;
        }
      `}</style>
    </div>
  );
}
