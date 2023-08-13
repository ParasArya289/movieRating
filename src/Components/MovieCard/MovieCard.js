import { ActionButton } from "../ActionButton/ActionButton";
import "./MovieCard.css";

export const MovieCard = ({ ...movie }) => {
  return (
    <div className="moviecard">
      <img src={movie.imageURL} alt={movie.title} />
      <h4>{movie.title}</h4>
      <p>{movie.summary}</p>
      <ActionButton movie={movie} />
    </div>
  );
};
