import { useNavigate } from "react-router-dom";
import { ActionButton } from "../ActionButton/ActionButton";
import "./MovieCard.css";

export const MovieCard = ({ ...movie }) => {
  const navigate = useNavigate();
  return (
    <div className="moviecard" onClick={() => navigate("/movies/" + movie.id)}>
      <img src={movie.imageURL} alt={movie.title} />
      <h4>{movie.title}</h4>
      <p>{movie.summary}</p>
      <ActionButton movie={movie} />
    </div>
  );
};
