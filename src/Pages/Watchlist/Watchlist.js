import { MovieCard } from "../../Components/MovieCard/MovieCard";
import { useData } from "../../Context/dataContext";
import { filterData } from "../../Utils/Utils";
import "./Watchlist.css";

export const Watchlist = () => {
  const {
    dataState: { watchlist },
    filters,
  } = useData();
  const filteredArray = filterData(watchlist, {
    searchQuery: filters?.searchQuery,
  });
  return (
    <div className="movies">
      {filteredArray.length <= 0 && <h4>No Movies</h4>}
      <div>
        {filteredArray?.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  );
};
