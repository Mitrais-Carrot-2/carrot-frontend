import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import moment from "moment";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "@components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserImage } from "../../redux/reducers/userReducer";

export default function Profile(/* props atau user */) {
  const dispatch = useDispatch();
  const user = useSelector((state) => (state.user.info ? state.user.info : {}));
  const picture = useSelector((state) =>
    state.user.userImage ? state.user.userImage : "/img/defaultImage.png"
  );
  const [supervisorName, setSupervisorName] = useState("");
  const [modalUserInfo, setModalUserInfo] = useState(false);
  const [modalImage, setModalImage] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [imageFormData, setImageFormData] = useState({});
  const [userFormData, setUserFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordFormData, setPasswordFormData] = useState({});

  useEffect(() => {
    axios
      .get(basePath+"user/" + user.supervisorId)
      .then((res) => {
        setSupervisorName(res.data.firstName + " " + res.data.lastName);
      });
    setUserFormData(user);
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-5 break-words">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div className="md:w-3/12 md:mx-2">
            {/* <!-- Profile Card --> */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div
                className="overflow-hidden block rounded-full cursor-pointer hover:opacity-70"
                onClick={() => setModalImage(true)}
              >
                {picture ? (
                  <Image
                    className="h-auto w-full mx-auto"
                    src={picture}
                    alt="profile-picture"
                    layout="responsive"
                    objectFit="cover"
                    width={200}
                    height={200}
                    priority={1}
                    as="picture"
                  ></Image>
                ) : (
                  <Image
                    className="h-auto w-full mx-auto"
                    src={"/img/loading.gif"}
                    alt="profile-picture"
                    layout="responsive"
                    objectFit="cover"
                    width={200}
                    height={200}
                    priority={2}
                  ></Image>
                )}
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1 text-center">
                {user.username ? user.username : "Loading..."}
              </h1>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      {user.active ? "Active" : "Inactive"}
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">
                    {/* print join date to DD MMMM YYYY */}
                    {user.joinDate
                      ? moment(user.joinDate).format("DD MMMM YYYY")
                      : ""}
                  </span>
                </li>
              </ul>
            </div>
            {/* <!-- End of profile card --> */}
            <div className="my-4"></div>
          </div>
          {/* <!-- Right Side --> */}
          <div className="w-full md:w-9/12 mx-2">
            {/* <!-- Profile tab -->
                <!-- About Section --> */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">{user.firstName}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">{user.lastName}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">{user.email}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">
                      {user.gender ? user.gender : ""}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">{user.phone}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Current Address
                    </div>
                    <div className="px-4 py-2">{user.address}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        {user.email}
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <div className="px-4 py-2">
                      {user.birthDate
                        ? moment(user.birthDate).format("DD MMMM YYYY")
                        : ""}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Supervisor</div>
                    <div className="px-4 py-2">
                      {supervisorName ? supervisorName : "loading..."}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Job Family</div>
                    <div className="px-4 py-2">{user.jobFamily}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Job Grade</div>
                    <div className="px-4 py-2">{user.jobGrade}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Office</div>
                    <div className="px-4 py-2">{user.office}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of about section --> */}
            {user.username ? (
              <div className="flex flex-row">
                <div className="text-center m-2">
                  <button
                    className="hover:opacity-70 bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setModalImage(true)}
                  >
                    Update Image
                  </button>
                </div>
                <div className="text-center m-2">
                  <button
                    className="hover:opacity-70 bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setModalUserInfo(true)}
                  >
                    Update Profiles
                  </button>
                </div>
                <div className="text-center m-2">
                  <button
                    className="hover:opacity-70 bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setModalPassword(true)}
                  >
                    Change Password
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="my-4"></div>
          </div>
        </div>
      </div>
      <Footer />
      {modalUserInfo && (
        <Modal
          title="Update Profile"
          body={profileModal()}
          action="Change User Information"
          closeClick={setModalUserInfo}
          actionClick={updateUserInformation}
        />
      )}
      {modalImage && (
        <Modal
          title="Update Image"
          body={imageModal()}
          action="Change Profile Picture"
          closeClick={setModalImage}
          actionClick={updateImage}
        />
      )}
      {modalPassword && (
        <Modal
          title="Update Password"
          body={passwordModal()}
          action="Change Password"
          closeClick={setModalPassword}
          actionClick={updatePassword}
        />
      )}
    </div>
  );

  function updateUserInformation() {
    axios
      .put(
        basePath+"user/updateProfile/" + user.username,
        userFormData
      )
      .then((res) => {
        console.log(res);
        setModalUserInfo(false);
        dispatch(setUser(userFormData));
        window.alert("Successfully updated");
        setUserFormData({
          ...userFormData,
          currentPassword: "",
        });
      })
      .catch((err) => {
        console.log(err);
        window.alert("Failed to update");
      });
  }

  // change profile info modal
  function profileModal() {
    return (
      <div>
        <div className="user-details">
          <label>Verify your password:</label>
          <input
            type="password"
            name="currentPassword"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                currentPassword: e.target.value,
              })
            }
            placeholder="Current Password"
            required
          />
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

  function updateImage() {
    const formData = new FormData();
    formData.append("file", imageFormData, imageFormData.name);
    axios
      .put(basePath+"user/Image/" + user.username, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        setModalImage(false);
        setImageFormData({});
        window.alert("Successfully updated");
        dispatch(setUserImage());
      })
      .catch((err) => {
        console.log(err);
        window.alert("Failed to update");
      });
  }

  // change profile image modal
  function imageModal() {
    return (
      <div>
        <div className="barn-details">
          <label>Insert image:</label>
          <input
            type="file"
            name="image-file"
            onChange={(e) => {
              setImageFormData(e.target.files[0]);
            }}
          />
        </div>
        <style>{`
          .barn-details {
            padding: 20px;
            display: flex;
            flex-direction: column;
            flex-wrap: column wrap;
            justify-content: center;
          }
          .barn-details input {
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
          }
        `}</style>
      </div>
    );
  }

  function updatePassword() {
    if (passwordFormData.newPassword === passwordFormData.confirmPassword) {
      axios
        .put(
          basePath+"user/updatePassword/" + user.username,
          passwordFormData
        )
        .then((res) => {
          setModalPassword(false);

          axios
            .get(basePath+"user/username/" + user.username)
            .then((res2) => {
              dispatch(setUser(res2.data));
              console.log(res2.data);
            });

          window.alert("Successfully updated");
          console.log(passwordFormData);
          setPasswordFormData({});
        })
        .catch((err) => {
          window.alert("Wrong Password");
        });
    } else {
      window.alert("New password does not match");
    }
  }

  function passwordModal() {
    return (
      <div>
        <div className="password-modal">
          <label>Old Password:</label>
          <input
            type="password"
            name="oldPassword"
            onChange={(e) =>
              setPasswordFormData({
                ...passwordFormData,
                oldPassword: e.target.value,
              })
            }
            placeholder="Current Password"
            required
          />
          <label>New Password:</label>
          <input
            type="password"
            name="newPassword"
            onChange={(e) =>
              setPasswordFormData({
                ...passwordFormData,
                newPassword: e.target.value,
              })
            }
            placeholder="New Password"
            required
          />
          <label>Re-type New Password:</label>
          <input
            type="password"
            name="newPassword2"
            onChange={(e) =>
              setPasswordFormData({
                ...passwordFormData,
                confirmPassword: e.target.value,
              })
            }
            placeholder="New Password"
            required
          />
        </div>
        <style>{`
          .password-modal{
            padding: 20px;
            display: flex;
            flex-direction: column;
            flex-wrap: column wrap;
            justify-content: center;
          }
          .password-modal input {
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
