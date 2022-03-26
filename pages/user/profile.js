import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import moment from "moment";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "@components/Modal";

export default function Profile(/* props atau user */) {
  let username = "Ilham";
  const [user, setUser] = useState({});
  const [picture, setPicture] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [modalUserInfo, setModalUserInfo] = useState(false);
  const [modalImage, setModalImage] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8181/api/user/username/" + username)
      .then((res) => {
        setUser(res.data), setPicture("/img/defaultImage.png");
        console.log(res.data);
        axios
          .get("http://localhost:8181/api/user/" + res.data.supervisorId)
          .then((res) => {
            setSupervisorName(res.data.firstName + " " + res.data.lastName);
            console.log(res.data.firstName + " " + res.data.lastName);
          });
        axios
          .get("http://localhost:8181/api/user/Image/" + username)
          .then(setPicture("http://localhost:8181/api/user/Image/" + username))
          .catch((err) => {
            setPicture("/img/defaultImage.png");
          });
      });
  }, [username]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-5 break-words">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-3/12 md:mx-2">
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
        />
      )}
      {modalImage && (
        <Modal
          title="Update Image"
          body={imageModal()}
          action="Change Profile Picture"
          closeClick={setModalImage}
        />
      )}
      {modalPassword && (
        <Modal
          title="Update Password"
          body={passwordModal()}
          action="Change Password"
          closeClick={setModalPassword}
        />
      )}
    </div>
  );

  // change profile info modal
  function profileModal() {
    return (
      <div>
        <form>
          <div className="user-details">
            <label>First name:</label>
            <input type="text" name="firstName" />
            <label>Last name:</label>
            <input type="text" name="lastName" />
            <label>Address:</label>
            <input type="text" name="address" />
          </div>
        </form>
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

  // change profile image modal
  function imageModal() {
    return (
      <div>
        <form>
          <div className="barn-details">
            <label>Insert image:</label>
            <input type="file" name="image-file" />
          </div>
        </form>
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

  function passwordModal() {
    return (
      <div>
        <form>
          <div className="password-modal">
            <label>Old Password:</label>
            <input type="text" name="oldPassword" />
            <label>New Password:</label>
            <input type="text" name="newPassword" />
          </div>
        </form>
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
