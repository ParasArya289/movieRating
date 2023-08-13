import { useData } from "../../Context/dataContext";
import "./ActionButton.css";

export const ActionButton = ({ movie }) => {
  const {
    dataState: { watchlist, starred },
    dispatchData,
  } = useData();

  const addToStarredHandler = (e) => {
    e.stopPropagation();
    dispatchData({ type: "ADD_TO_STARRED", payload: movie });
  };
  const addToWatchlistHandler = (e) => {
    e.stopPropagation();
    dispatchData({ type: "ADD_TO_WATCHLIST", payload: movie });
  };
  const removeFromStarredHandler = (e) => {
    e.stopPropagation();
    dispatchData({ type: "REMOVE_FROM_STARRED", payload: movie.id });
  };
  const removeFromWatchlistHandler = (e) => {
    e.stopPropagation();
    dispatchData({ type: "REMOVE_FROM_WATCHLIST", payload: movie.id });
  };

  return (
    <div className="actionbutton">
      {starred?.some(({ id }) => movie.id === id) ? (
        <button onClick={removeFromStarredHandler}>Starred</button>
      ) : (
        <button onClick={addToStarredHandler}>Star</button>
      )}
      {watchlist?.some(({ id }) => movie.id === id) ? (
        <button onClick={removeFromWatchlistHandler}>
          Remove From Watchlist
        </button>
      ) : (
        <button onClick={addToWatchlistHandler}> Add To Watchlist</button>
      )}
    </div>
  );
};
