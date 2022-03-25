import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import moment from "moment";
import Image from "next/image";

export default function Profile(/* props atau user */) {
  //below contoh user data
  const user = {
    username: "john_doe",
    email: "johndoe@gmail.com",
    firstName: "John",
    lastName: "Doe",
    address: "Yogyakarta",
    birthDate: "1997-01-01",
    joinDate: "2021-10-10",
    gender: "Male",
    phoneNum: "08123456789",
    isActive: true,
    image:
      "https://st.depositphotos.com/1771835/2740/i/950/depositphotos_27403227-stock-photo-attractive-young-man-thumbs-up.jpg",
    jobFamily: "SE",
    jobGrade: "AN",
    supervisorId: 0,
    roles: [
      {
        id: 2,
        name: "ROLE_MANAGER",
      },
      {
        id: 1,
        name: "ROLE_ADMIN",
      },
    ],
    userGroups: [],
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* <!-- Profile Card --> */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="overflow-hidden block">
                <Image
                  className="h-auto w-full mx-auto"
                  src={user.image}
                  alt="profile-picture"
                  layout="responsive"
                  width={200}
                  height={200}
                ></Image>
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1 text-center">
                {user.username}
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
                    {moment(user.joinDate).format("DD MMMM YYYY")}
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
                      {moment(user.birthDate).format("DD MMMM YYYY")}
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
