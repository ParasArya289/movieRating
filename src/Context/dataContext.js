import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { dataReducer, initDataState } from "../Reducer/dataReducer";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer(dataReducer, initDataState);

  const [filters, setFilters] = useState({
    genre: "all",
    releaseYear: "all",
    rating: "all",
    searchQuery: "",
  });

  useEffect(() => {
    const retrievedState = localStorage.getItem("state");
    if (retrievedState) {
      const parse = JSON.parse(retrievedState);
      dispatchData({ type: "INIT_DATA", payload: parse });
    }
  }, []);

  useEffect(() => {
    if (dataState !== initDataState) {
      const stringify = JSON.stringify(dataState);
      localStorage.setItem("state", stringify);
    }
  }, [dataState]);

  useEffect(() => {
    dispatchData({ type: "GET_GENRES" });
  }, [dataState.movies]);

  return (
    <dataContext.Provider
      value={{ dataState, dispatchData, filters, setFilters }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
