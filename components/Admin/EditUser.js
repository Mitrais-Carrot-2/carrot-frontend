import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "@components/Modal";
import Select from "react-select";

export default function EditUser() {
  const url = process.env.NEXT_PUBLIC_API_URL + "user/";
  const [userFormData, setUserFormData] = useState({});
  const [userList, setUserList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [manager, setManager] = useState([]);
  const [allManager, setAllManager] = useState([]);
  const [jobFamily, setJobFamily] = useState([]);
  const [jobGrade, setJobGrade] = useState([]);
  const [jobGrades, setJobGrades] = useState([]);
  const [office, setOffice] = useState([]);

  useEffect(() => {
    fetchList();
    //eslint-disable-next-line
    fetchManager();
  }, []);

  function fetchList() {
    axios.get(url).then((res) => {
      setUserList(res.data);
      console.log(res.data);
    });
  }

  function fetchManager() {
    const urlManager = `http://localhost:8181/api/farmer/transfer/manager`;

    axios.get(urlManager).then((response) => setAllManager(response.data));
  }

  const offices = [
    { value: "BALI", label: "Bali" },
    { value: "YOGYAKARTA", label: "Yogyakarta" },
    { value: "JAKARTA", label: "Jakarta" },
    { value: "SURABAYA", label: "Surabaya" },
    { value: "BANDUNG", label: "Bandung" },
  ];

  const jobFamilies = [
    { value: "SE", label: "Software Engineer" },
    { value: "QA", label: "Quality Assurance" },
    { value: "CON", label: "Consultant" },
    { value: "DSG", label: "Graphics Designer" },
  ];

  function handleJobFamily(value) {
    if (value === "SE") {
      setJobGrades([
        { value: "JP", label: "Junior Programmer" },
        { value: "PG", label: "Programmer" },
        { value: "AP", label: "Analyst Programmer" },
        { value: "AN", label: "Analyst" },
      ]);
    }
    if (value === "QA") {
      setJobGrades([
        { value: "JT", label: "Junior Tester" },
        { value: "TS", label: "Tester" },
        { value: "ST", label: "Senior Tester" },
        { value: "TA", label: "Test Architect" },
      ]);
    }
    if (value === "CON") {
      setJobGrades([
        { value: "JC", label: "Junior Consultant" },
        { value: "CON", label: "Consultant" },
        { value: "SC", label: "Senior Consultant" },
        { value: "LC", label: "Lead Consultant" },
      ]);
    }
    if (value === "DSG") {
      setJobGrades([
        { value: "JD", label: "Junior Designer" },
        { value: "DS", label: "Designer" },
        { value: "SD", label: "Senior Designer" },
        { value: "DD", label: "Design Director" },
      ]);
    }
  }

  let options = [];

  options = allManager.map((s) => {
    return {
      value: s.userId,

      label: `${s.userId}: ${s.firstName} ${s.lastName}`,
    };
  });

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
                        setManager(user.supervisorId);
                        setJobFamily(user.jobFamily);
                        setJobGrade(user.jobGrade);
                        setOffice(user.office);
                        setShowModal(true);
                        console.log(allManager);
                      }}
                    >
                      <i className="fa fa-edit text-blue-600 fa-x px-1"></i>
                    </button>
                    {showModal && (
                      <Modal
                        title={"Edit " + userFormData.username}
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
          "admin/editStaff/" +
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
          <label>Email:</label>
          <input
            type="text"
            name="email"
            defaultValue={userFormData.email}
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                email: e.target.value,
              })
            }
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

          <label>Manager / Supervisor:</label>
          <Select
            className="mb-2"
            id="manager-id"
            name="supervisorId"
            options={options}
            defaultValue={{ value: manager, label: manager }}
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                supervisorId: e.value,
              })
            }
          />

          <label>Job Family:</label>
          <Select
            name="jobFamily"
            className="mb-2"
            options={jobFamilies}
            defaultValue={{ value: jobFamily, label: jobFamily }}
            onChange={(e) => (
              setUserFormData({
                ...userFormData,
                jobFamily: e.value,
              }),
              handleJobFamily(e.value)
            )}
            placeholder="Job Family"
          />

          <label>Job Grade:</label>
          <Select
            name="jobGrade"
            className="mb-2"
            options={jobGrades}
            defaultValue={{ label: jobGrade, value: jobGrade }}
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                jobGrade: e.value,
              })
            }
            placeholder="Job Grade"
          />

          <label>Office:</label>
          <Select
            className="mb-2"
            id="office"
            options={offices}
            defaultValue={{ label: office, value: office }}
            name="office"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                office: e.value,
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
