import { useData } from "../../Context/dataContext";
import "./FilterHeader.css";

export const Filterheader = () => {
  const {
    dataState: { genres },
  } = useData();
  const filterChangeHandler = (e) => {};
  return (
    <header className="filterheader">
      <h3>Movies</h3>
      <select
        // value={filters.category}
        name="genre"
        onChange={filterChangeHandler}
      >
        <option value="all">all</option>
        {genres?.map((genre) => (
          <option value={genre}>{genre}</option>
        ))}
      </select>
      <select
        // value={filters.category}
        name="releaseYear"
        onChange={filterChangeHandler}
      >
        <option value="all">all</option>
        {Array.from({ length: 34 }, (_, i) => i + 1990)?.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
      <select
        // value={filters.category}
        name="rating"
        onChange={filterChangeHandler}
      >
        <option value="all">all</option>
        {Array.from({ length: 10 }, (_, i) => i + 1)?.map((rating) => (
          <option value={rating}>{rating}</option>
        ))}
      </select>
      <button>Add Movie</button>
    </header>
  );
};
