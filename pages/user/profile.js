import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import moment from "moment";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Profile(/* props atau user */) {
  const [user, setUser] = useState({});
  const [picture, setPicture] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8181/api/user/5").then((res) => {
      setUser(res.data), setPicture("/img/defaultImage.png");
    });
  }, []);

  //nge check ke api get image, kalo image ada, maka set picturenya. kalo gak ada balik ke default image.
  // function nya bakal jalan kalo ada state change di user. which is gonna happen once pas on load screen.
  useEffect(() => {
    axios
      .get("http://localhost:8181/api/user/getImage/" + user.username)
      .then(
        setPicture("http://localhost:8181/api/user/getImage/" + user.username)
      )
      .catch((err) => {
        setPicture("/img/defaultImage.png");
      });
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-5 p-5 break-words">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* <!-- Profile Card --> */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="overflow-hidden block rounded-full ">
                {picture ? (
                  <Image
                    className="h-auto w-full mx-auto"
                    src={picture}
                    alt="profile-picture"
                    layout="responsive"
                    objectFit="cover"
                    width={200}
                    height={200}
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
                      {user.isActive ? "Active" : "Inactive"}
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
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">{user.gender}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">{user.phoneNum}</div>
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
                </div>
              </div>
            </div>
            {/* <!-- End of about section --> */}

            <div className="my-4"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
