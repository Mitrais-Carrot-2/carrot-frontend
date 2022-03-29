import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import "@styles/custom.css";
import "@styles/globals.css";
import "font-awesome/css/font-awesome.css";
import "@material-tailwind/react/tailwind.css";
//import popper
import "popper.js";

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux/store";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import("jquery/dist/jquery.js");
  // }, []);
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap.js");
  // }, []);

  return (
    // <Container>
      // <Provider store={store}>
        <Component {...pageProps} />
      // </Provider>
    // </Container>
  );
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
