import { MovieCard } from "../../Components/MovieCard/MovieCard";
import { useData } from "../../Context/dataContext";
import "./Movies.css";

export const Movies = () => {
  const {
    dataState: { movies },
  } = useData();
  return (
    <div className="movies">
      <div>
        {movies?.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  );
};
