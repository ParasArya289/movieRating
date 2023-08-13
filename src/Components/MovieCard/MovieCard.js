import { ActionButton } from "../ActionButton/ActionButton";
import "./MovieCard.css";

export const MovieCard = ({ title, genre, summary, imageURL }) => {
  return (
    <div className="moviecard">
      <img src={imageURL} alt={title} />
      <h4>{title}</h4>
      <p>{summary}</p>
      <ActionButton />
    </div>
  );
};
