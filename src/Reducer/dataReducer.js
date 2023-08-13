import { movies } from "../database";

export const initDataState = {
  movies: movies,
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INIT_DATA":
      return {
        ...state,
        ...action.payload,
      };
  }
};
