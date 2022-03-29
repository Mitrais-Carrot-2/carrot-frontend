//create navbar component in react
import Image from "next/image";
import { useState, useRef } from "react";
import mitraisLogo from "@public/img/mitrais-logo.png";
import defaultImage from "@public/img/defaultImage.png";
import { useRouter } from "next/router";
import { BsFillBellFill } from "react-icons/bs";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";
import Button from "@material-tailwind/react/Button";

export default function Navbar() {
  const router = useRouter();
  const profileButtonRef = useRef();
  const notifRef = useRef();
  const [user, setUser] = useState({});

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
              src={defaultImage}
              width={40}
              height={40}
              objectFit="cover"
            />
            <Button className="hidden" />
          </a>
          <Popover placement="bottom" ref={profileButtonRef}>
            <PopoverContainer className="ml-3">
              <PopoverHeader>
                <div className="flex flex-col items-center pb-4">
                  <Image
                    className="h-auto w-full mx-auto rounded-full cursor-pointer hover:opacity-70"
                    alt="user-profile"
                    src={defaultImage}
                    width={80}
                    height={80}
                    objectFit="cover"
                    onClick={() => router.push("/user/profile")}
                  />
                </div>
                <h3>Ilham Fadhil</h3>
                <p>JP, SE</p>
                <p>Staff</p>
              </PopoverHeader>
              <PopoverBody>
                <div
                  onClick={() => router.push("/user/profile")}
                  className="cursor-pointer hover:bg-orange-500 rounded"
                >
                  <p className="lp-2">Settings</p>
                  {/* kok gak bisa implement checkbox di dalem pop overnya ??!!! naniiii - ilham */}
                  {/* TODO */}
                  {/* <input type="checkbox"> Email Notification</input> */}
                </div>
                <div></div>
                <Button className="pt-2 mt-4" color="orange">
                  Logout
                </Button>
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
