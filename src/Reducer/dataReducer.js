import { movies } from "../database";

export const initDataState = {
  movies: movies,
  starred: [],
  watchlist: [],
  genres: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INIT_DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: [...new Set(state.movies.flatMap(({ genre }) => genre))],
      };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case "ADD_TO_STARRED":
      return {
        ...state,
        starred: [...state.starred, action.payload],
      };
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case "REMOVE_FROM_STARRED":
      return {
        ...state,
        starred: state?.starred?.filter(({ id }) => id !== action.payload),
      };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state?.watchlist?.filter(({ id }) => id !== action.payload),
      };
  }
};
