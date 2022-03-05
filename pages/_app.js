import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import "@styles/custom.css";
import "@styles/globals.css";
import "font-awesome/css/font-awesome.css";
//import popper
import "popper.js";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("jquery/dist/jquery.js");
  }, []);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  

  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
