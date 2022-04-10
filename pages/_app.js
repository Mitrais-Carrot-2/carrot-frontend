import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import "@styles/custom.css";
import "@styles/globals.css";
import "font-awesome/css/font-awesome.css";
import "@material-tailwind/react/tailwind.css";
import { Provider } from "react-redux";
import "popper.js";
import { store } from "store/store";
import { wrapper } from "../redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function MyApp({ Component, pageProps }) {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

// export default MyApp;
export default wrapper.withRedux(MyApp);
