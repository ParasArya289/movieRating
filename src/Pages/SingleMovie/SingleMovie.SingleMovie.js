import { useParams } from "react-router-dom";
import { ActionButton } from "../../Components/ActionButton/ActionButton";
import { useData } from "../../Context/dataContext";
import "./SingleMovie.css";

export const SingleMovie = () => {
  const { movieId } = useParams();
  const {
    dataState: { movies },
  } = useData();
  const findMovie = movies?.find(({ id }) => id == movieId);

  return (
    <div className="singlemovie">
      <div className="singlemovieWrapper">
        <img src={findMovie.imageURL} alt={findMovie.title} />
        <div>
          <h4>{findMovie?.title}</h4>
          <p>{findMovie?.summary}</p>
          <p>year: {findMovie?.year}</p>
          <p>Genre: {findMovie?.genre.join(", ")}</p>
          <p>Rating: {findMovie?.rating}</p>
          <p>Director: {findMovie?.director}</p>
          <p>Writere: {findMovie?.writer}</p>
          <p>Cast: {findMovie?.cast.join(", ")}</p>
        <ActionButton movie={findMovie} />
        </div>
      </div>
    </div>
  );
};
