import { Filterheader } from "../../Components/FilterHeader/FilterHeader";
import { MovieCard } from "../../Components/MovieCard/MovieCard";
import { useData } from "../../Context/dataContext";
import { filterData } from "../../Utils/Utils";
import "./Movies.css";

export const Movies = () => {
  const {
    dataState: { movies },
    filters,
  } = useData();
  const filteredArray = filterData(movies, filters);
  return (
    <div className="movies">
      <Filterheader />
      {filteredArray.length <= 0 && <h4>No Movies</h4>}
      <div>
        {filteredArray?.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  );
};
