import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import "@styles/custom.css";
import "@styles/globals.css";
import "font-awesome/css/font-awesome.css";
import "@material-tailwind/react/tailwind.css";
// import { Container } from "reactstrap";
import { Provider } from 'react-redux';
import "popper.js";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from "../redux/reducers";
const store = createStore(reducer, applyMiddleware(thunk));

import { wrapper } from "../redux";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import("jquery/dist/jquery.js");
  // }, []);
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap.js");
  // }, []);

  return (
    // <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    // </Container>
  );
}

// export default MyApp;
export default wrapper.withRedux(MyApp);
