//create navbar component in react
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import mitraisLogo from "@public/img/mitrais-logo.png";
import { useRouter } from "next/router";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";
import Button from "@material-tailwind/react/Button";
import cookie from "js-cookie";
import { removeUser, removeUserImage } from "redux/reducers/userReducer";
import { removeManager } from "redux/actions/managerAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import jsCookie from "js-cookie";
import { VscBell, VscBellDot } from "react-icons/vsc";
import { getNotification, markReadNotification, removeNotifications } from "redux/actions/notificationAction";
import axios from "axios";
import moment from "moment";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const profileButtonRef = useRef();
  const notifRef = useRef();

  const notification = useSelector((state) => state.notification ? state.notification : []);
  const [notifications, setNotifications] = useState(notification);
  // const notifications = useRef(notification);
  const [notReadNotifications, setNotReadNotifications] = useState(0);

  const user = useSelector((state) => (state.user.info ? state.user.info : {}));
  const roles = jsCookie.get("roles")
    ? jsCookie
      .get("roles")
      .split(",")
      .map(function (item) {
        return item.substring(5);
      })
    : "";
  const picture = useSelector((state) =>
    state.user.userImage ? state.user.userImage : "/img/defaultImage.png"
  );
  const auth = useSelector((state) => (state.authentication ? state.authentication : {}));

  useEffect(() => {
    getNotification();
  }, []);

  useEffect(() => {
    if (!jsCookie.get("token")) {
      router.push("/sign-in");
    }
    // getNotification();
  }, [router, user]);

  const getNotification = () => {
    axios.get(process.env.NEXT_PUBLIC_API_URL + "notification/", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    }).then(res => {
      // sort res data by date desc
      let sortedData = res.data.sort((a, b) => {
        return moment(b.date).diff(moment(a.date));
      });
      // count res data that is not read
      let count = 0;
      sortedData.forEach((item) => {
        if (item.read === false) {
          count++;
        }
      });
      setNotifications(sortedData);
      setNotReadNotifications(count);
    })
      .catch(err => {
        console.log(err);
      });
  }

  const markRead = (id) => {
    axios.get(process.env.NEXT_PUBLIC_API_URL + "notification/read/" + id, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    }).then(res => {
      getNotification();
    })
      .catch(err => {
        console.log(err);
      });
  }
  
  const markAllRead = () => {
    axios.get(process.env.NEXT_PUBLIC_API_URL + "notification/read/all/", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    }).then(res => {
      getNotification();
    })
      .catch(err => {
        console.log(err);
      });
  }

  const handleLogout = () => {
    cookie.remove("token");
    cookie.remove("username");
    cookie.remove("id");
    cookie.remove("roles");

    dispatch(removeUser());
    dispatch(removeManager());
    dispatch(removeUserImage());
    dispatch(removeNotifications());
    router.push("/sign-in");
  };

  return (
    <header className="mb-20 z-10" style={{ borderBottom: "groove" }}>
      <nav
        id="navbar"
        className="fixed  flex flex-wrap justify-between pt-2 px-4 navbar-expand-md z-10 bg-slate-50"
        style={{ width: "-webkit-fill-available" }}
      >
        <div id="navbar-image" className="justify-start h-9 w-9">
          {/* profile image on click going to user/profile */}
          <a ref={profileButtonRef}>
            <Image
              className="h-auto w-full mx-auto rounded-full cursor-pointer hover:opacity-70"
              alt="user-profile"
              src={picture}
              width={40}
              height={40}
              objectFit="cover"
            />
          </a>
          <Popover placement="bottom" ref={profileButtonRef}>
            <PopoverContainer className="ml-3">
              <PopoverHeader>
                <div className="flex flex-col items-center mb-4">
                  <Image
                    className="h-auto w-full mx-auto rounded-full cursor-pointer hover:opacity-70"
                    alt="user-profile"
                    src={picture}
                    width={80}
                    height={80}
                    objectFit="cover"
                    onClick={() => router.push("/user/profile")}
                  />
                </div>
                <h3>{user.firstName + " " + user.lastName}</h3>
                <p>
                  {user.jobFamily}, {user.jobGrade}
                </p>
                <p>{roles ? roles.join(", ") : ""}</p>
              </PopoverHeader>
              <PopoverBody>
                <div
                  onClick={() => router.push("/user/profile")}
                  className="cursor-pointer py-1 hover:bg-orange-700 rounded hover:text-white"
                >
                  <p className="text-center"> Settings</p>
                  {/* kok gak bisa implement checkbox di dalem pop overnya ??!!! naniiii - ilham */}
                  {/* TODO */}
                  {/* <input type="checkbox"> Email Notification</input> */}
                </div>
                <div style={{ textAlign: "-webkit-center" }}>
                  <Button
                    className="pt-2 mt-4"
                    color="orange"
                    onClick={() => handleLogout()}
                  >
                    <p>Logout</p>
                  </Button>
                </div>
              </PopoverBody>
            </PopoverContainer>
          </Popover>
        </div>
        <div className="justify-center">
          <a onClick={() => router.push("/")} className="navbar-brand" href="#">
            <Image src={mitraisLogo} alt="logo" className="hover:opacity-70" />
          </a>
        </div>
        <div className="justify-end h-9 w-9">
          <a className="cursor-pointer" ref={notifRef}>
            {notReadNotifications > 0 ? (
              <>
                <span className="text-sm bg-orange-500 rounded-full px-1 text-white ml-[16px]">{notReadNotifications}</span>
                <VscBell
                  className={"-mt-4 hover:opacity-80"}
                  size={25}
                  color="grey"
                />
              </>
            ) : (
              <VscBell
                className={"mt-2 hover:opacity-80"}
                size={25}
                color="grey"
              />
            )}

          </a>
          <Popover placement="bottom" ref={notifRef}>
            <PopoverContainer className="mr-3 text-left">
              <PopoverHeader>notifications <hr className="mt-3" /></PopoverHeader>
              <PopoverBody>
                {/* {console.log("notifications", notifications)} */}

                {notifications.length !== undefined && notifications.length > 0 ?
                  <>
                    {
                      notifications.map((notif) => {
                        return (
                          <div
                            onClick={
                              () => {
                                markRead(notif.id);
                              }
                            }
                            className="mb-2 px-3 border-l-2 hover:border-orange-500 hover:bg-gray-100 cursor-pointer py-3 flex flex-col">
                            <h5 className={"text-[12px] " + (!notif.read ? "font-bold" : "")}>{notif.message}</h5>
                            <p className="text-[9px] text-right">{moment(notif.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                          </div>
                        )
                      })
                    }
                    <p onClick={
                      () => {
                        markAllRead();
                      }
                    } className="text-right -mt-2 hover:cursor-pointer hover:underline hover:underline-offset-1">Mark All Read</p>
                  </>
                  : (
                    <p className="text-center">No new notifications</p>
                  )}
              </PopoverBody>
              {/* <PopoverBody>notification 1 </PopoverBody>
              <PopoverBody>notification 2 </PopoverBody>
              <PopoverBody>notification 3 </PopoverBody> */}
            </PopoverContainer>
          </Popover>
        </div>
      </nav>
    </header>
  );
}
