import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { deauthenticate, reauthenticate } from "../redux/actions/authAction";
import Navbar from "./Navbar";
import signIn from "pages/sign-in";

const Layout = ({ children, isAuthenticated }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(reauthenticate(isAuthenticated));
        }
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            {!isAuthenticated && (
                <signIn />
            )}

            {isAuthenticated && (
                children
            )}
        </>
    );
};

export default Layout;
