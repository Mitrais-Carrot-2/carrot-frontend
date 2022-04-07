import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers/index";
import { createWrapper } from "next-redux-wrapper";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// const persistedReducer = persistReducer(persistConfig, reducer);

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};


// const initStore = ({ isServer }) => {
//   if (isServer) {
//     //If it's on server side, create a store
//     return createStore(reducer, bindMiddleware([thunkMiddleware]));
//   } else {
//     //If it's on client side, create a store which will persist
//     const { persistStore, persistReducer } = require('redux-persist');

//     const persistConfig = {
//       key: 'carrot',
//       whitelist: ['manager','authentication'], // only counter will be persisted, add other reducers if needed
//       storage, // if needed, use a safer storage
//     };

//     const persistedReducer = persistReducer(persistConfig, reducer); // Create a new reducer with our existing reducer

//     const store = createStore(
//       persistedReducer,
//       bindMiddleware([thunkMiddleware])
//     ); // Creating the store again

//     store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

//     return store;
//   }
// };

export const wrapper = createWrapper(initStore);
