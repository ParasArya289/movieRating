import { createContext, useEffect, useReducer } from "react";
import { dataReducer, initDataState } from "../Reducer/dataReducer";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer(dataReducer, initDataState);

  useEffect(() => {
    const retrievedState = localStorage.getItem("state");
    if (retrievedState) {
      const parse = JSON.parse(retrievedState);
      dispatchData({ type: "INIT_DATA", payload: parse });
    }
  }, []);

  useEffect(() => {
    if (dataState !== initData) {
      const stringify = JSON.stringify(dataState);
      localStorage.setItem("state", stringify);
    }
  }, [dataState]);
  

  return <dataContext.Provider>{children}</dataContext.Provider>;
};
