import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export default function CreateUser() {
  const [userFormData, setUserFormData] = useState({});
  const [manager, setManager] = useState([]);
  const [jobGrades, setJobGrades] = useState([]);
  const roles = [
    {
      value: "FARMER",
      label: "Farmer",
    },
    {
      value: "MANAGER",
      label: "Manager",
    },
    {
      value: "ADMIN",
      label: "Admin",
    },
    {
      value: "STAFF",
      label: "Staff",
    },
    {
      value: "MERCHANT",
      label: "Merchant",
    },
  ];
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

  const url = `http://localhost:8181/api/farmer/transfer/manager`;

  useEffect(() => {
    axios.get(url).then((response) => setManager(response.data));
  }, []);

  let options = [];

  options = manager.map((s) => {
    return {
      value: s.userId,

      label: `${s.firstName} ${s.lastName}`,
    };
  });

  function createUser() {
    axios
      .post("http://localhost:8181/api/admin/signup", userFormData)
      .then((res) => {
        console.log(res);
        setUserFormData({});
        window.alert("Successfully updated");
      })
      .catch((err) => {
        console.log(err);
        window.alert("Failed to Create New User");
      });
  }

  return (
    <section>
      <div className="container mx-auto sm: px-4 search-box py-3">
        <div className="row d-flex pb-2 px-4 justify-center border-b border-solid border-blueGray-200">
          <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0 text-center">
            Create New User
          </h2>
        </div>

        <div className="user-details">
          <label>Username:</label>
          <input
            type="password"
            name="username"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                username: e.target.value,
              })
            }
            placeholder="Username"
            required
          />

          <label>Email:</label>
          <input
            type="password"
            name="email"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                email: e.target.value,
              })
            }
            placeholder="Email"
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                password: e.target.value,
              })
            }
            placeholder="Password"
            required
          />
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                firstName: e.target.value,
              })
            }
            placeholder="First name"
            required
          />
          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                lastName: e.target.value,
              })
            }
            placeholder="Last name"
            required
          />
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                gender: e.target.value,
              })
            }
            placeholder="Gender"
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                address: e.target.value,
              })
            }
            placeholder="Address"
          />

          <label>Phone:</label>
          <input
            type="text"
            name="Phone"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                phone: e.target.value,
              })
            }
            placeholder="Phone"
          />

          <label>Birth Date:</label>
          <input
            type="date"
            name="birthDate"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                birthDate: e.target.value,
              })
            }
          />

          <label>Manager / Supervisor:</label>
          <Select
            className="mb-2"
            id="manager-id"
            name="supervisorId"
            options={options}
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                supervisorId: e.target.value,
              })
            }
          />

          <label>Job Family:</label>
          <Select
            name="jobFamily"
            className="mb-2"
            options={jobFamilies}
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
            name="office"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                office: e.value,
              })
            }
          />

          <label>Roles:</label>
          <Select
            className="mb-2"
            id="roles"
            name="roles"
            isMulti
            options={roles}
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                role: e.value,
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
    </section>
  );
}