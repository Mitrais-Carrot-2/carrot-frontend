//create navbar component in react
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import mitraisLogo from "@public/img/mitrais-logo.png";
import defaultImage from "@public/img/defaultImage.png";
import { useRouter } from "next/router";
import { BsFillBellFill } from "react-icons/bs";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";
import Button from "@material-tailwind/react/Button";
import cookie from "js-cookie";
import { removeUser } from "redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import jsCookie from "js-cookie";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const profileButtonRef = useRef();
  const notifRef = useRef();
  const user = useSelector((state) => (state.user.info ? state.user.info : {}));
  const roles = jsCookie.get("roles") ? jsCookie.get("roles").substring(5) : "";
  const picture = useSelector((state) =>
    state.user.userImage ? state.user.userImage : "/img/defaultImage.png"
  );

  useEffect(() => {
    // if (cookie.get("username")) {
    //   setUsername(cookie.get("username"));
    // console.log(username);
    if (!jsCookie.get("token")) {
      router.push("/sign-in");
    }
    console.log(user);
  }, [router, user]);

  const handleLogout = () => {
    cookie.remove("token");
    cookie.remove("username");
    cookie.remove("id");
    cookie.remove("roles");

    dispatch(removeUser());

    router.push("/sign-in");
  };

  return (
    <header className="mb-20 z-10" style={{ borderBottom: "groove" }}>
      <nav
        className="fixed  flex flex-wrap justify-between pt-2 px-4 navbar-expand-md z-10 bg-slate-50"
        style={{ width: "-webkit-fill-available" }}
      >
        <div className="justify-start h-9 w-9">
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
                <div className="flex flex-col items-center mb-4 hover:bg-orange-500 ">
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
                <p>{roles ? roles : ""}</p>
              </PopoverHeader>
              <PopoverBody>
                <div
                  onClick={() => router.push("/user/profile")}
                  className="cursor-pointer hover:bg-orange-500 rounded hover:text-white"
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
            <BsFillBellFill
              className="mt-1 hover:opacity-80"
              size={25}
              color="grey"
            />
          </a>
          <Popover placement="bottom" ref={notifRef}>
            <PopoverContainer className="mr-3 text-right">
              <PopoverHeader>notifications</PopoverHeader>
              <PopoverBody>notification 1 </PopoverBody>
              <PopoverBody>notification 2 </PopoverBody>
              <PopoverBody>notification 3 </PopoverBody>
            </PopoverContainer>
          </Popover>
        </div>
      </nav>
    </header>
  );
}
