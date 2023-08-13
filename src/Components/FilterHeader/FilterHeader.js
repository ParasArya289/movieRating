import { useData } from "../../Context/dataContext";
import "./FilterHeader.css";

export const Filterheader = () => {
  const {
    dataState: { genres },
    filters,
    setFilters,
  } = useData();
  const filterChangeHandler = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <header className="filterheader">
      <h3>Movies</h3>
      <select value={filters.genre} name="genre" onChange={filterChangeHandler}>
        <option value="all">Genre</option>
        {genres?.map((genre) => (
          <option value={genre}>{genre}</option>
        ))}
      </select>
      <select
        value={filters.releaseYear}
        name="releaseYear"
        onChange={filterChangeHandler}
      >
        <option value="all">Release Year</option>
        {Array.from({ length: 34 }, (_, i) => i + 1990)?.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
      <select
        value={filters.rating}
        name="rating"
        onChange={filterChangeHandler}
      >
        <option value="all">Rating</option>
        {Array.from({ length: 10 }, (_, i) => i + 1)?.map((rating) => (
          <option value={rating}>{rating}</option>
        ))}
      </select>
      <button>Add Movie</button>
    </header>
  );
};
