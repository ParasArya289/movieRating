import { NavLink } from "react-router-dom";
import { Searchbar } from "../Searchbar/Searchbar";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <h4>IMDB</h4>
      <Searchbar />
      <div>
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/starred">Starred</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
      </div>
    </nav>
  );
};
