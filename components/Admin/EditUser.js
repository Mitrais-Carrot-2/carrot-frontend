import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "@components/Modal";

export default function EditUser() {
  const url = process.env.NEXT_PUBLIC_API_URL + "user/";
  const [userFormData, setUserFormData] = useState({});
  const [userList, setUserList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchList();
    //eslint-disable-next-line
  }, []);

  function fetchList() {
    axios.get(url).then((res) => {
      setUserList(res.data);
      console.log(res.data);
    });
  }

  return (
    <section>
      <div className="container mx-auto sm: px-4 search-box py-3 mb-4">
        <div className="row d-flex px-4">
          <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0">Edit User</h2>
        </div>
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th itemScope="col" aria-rowspan={2}>
                #
              </th>
              <th itemScope="col" aria-rowspan={2}>
                Username
              </th>
              <th itemScope="col" aria-rowspan={2}>
                Name
              </th>
              <th itemScope="col" aria-rowspan={2}>
                Job Info
              </th>
              <th itemScope="col" aria-rowspan={2}>
                Supervisor
              </th>
              <th itemScope="col" aria-rowspan={2}>
                Role
              </th>
              <th itemScope="col" aria-rowspan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{user.username}</td>
                  <td>{user.firstName + " " + user.lastName}</td>
                  <td>{user.jobFamily + ", " + user.jobGrade}</td>
                  <td>{user.supervisorId}</td>
                  <td>
                    {user.roles.map((role, index) => (
                      <li key={index}>{role.name.substring(5)}</li>
                    ))}
                  </td>

                  <td>
                    <button
                      type="button"
                      className="btn border-blue-600 mr-2"
                      onClick={() => {
                        setUserFormData(user);
                        setShowModal(true);
                        console.log(userFormData);
                      }}
                    >
                      <i className="fa fa-edit text-blue-600 fa-x px-1"></i>
                    </button>
                    {showModal && (
                      <Modal
                        title="Edit User"
                        body={editModal()}
                        action="Edit User Information"
                        closeClick={setShowModal}
                        actionClick={updateUser}
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
  function updateUser() {
    axios
      .put(
        process.env.NEXT_PUBLIC_API_URL +
          "user/updateProfile/" +
          userFormData.username,
        userFormData
      )
      .then((res) => {
        console.log(res);
        setShowModal(false);
        fetchList();
        window.alert("Successfully updated");
        setUserFormData({});
      })
      .catch((err) => {
        console.log(err);
        window.alert("Failed to update");
      });
  }
  function editModal() {
    return (
      <div>
        <div className="user-details">
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            defaultValue={userFormData.firstName}
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                firstName: e.target.value,
              })
            }
            required
          />
          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            defaultValue={userFormData.lastName}
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                lastName: e.target.value,
              })
            }
            required
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            defaultValue={userFormData.address}
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                address: e.target.value,
              })
            }
          />
          <label>phone:</label>
          <input
            type="text"
            name="Phone"
            defaultValue={userFormData.phone}
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                phone: e.target.value,
              })
            }
          />
        </div>
        <style>{`
          .user-details {
            padding: 20px;
            display: flex;
            flex-direction: column;
            flex-wrap: column wrap;
            justify-content: center;
          }
          .user-details input {
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
          }
        `}</style>
      </div>
    );
  }
}
