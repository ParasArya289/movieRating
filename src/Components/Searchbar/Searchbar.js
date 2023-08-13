import { useData } from "../../Context/dataContext";
import "./Searchbar.css";

export const Searchbar = () => {
  const { setFilters } = useData();

  let timerId;
  const debounce = (e) => {
    const { name, value } = e.target;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }, 400);
  };

  return (
    <input
      name="searchQuery"
      type="search"
      placeholder="Search movies by, title, cast, director"
      onChange={debounce}
    />
  );
};
