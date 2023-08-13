import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { AddMovie } from "./Pages/AddMovie/AddMovie";
import { Movies } from "./Pages/Movies/Movies";
import { SingleMovie } from "./Pages/SingleMovie/SingleMovie.SingleMovie";
import { Starred } from "./Pages/Starred/Starred";
import { Watchlist } from "./Pages/Watchlist/Watchlist";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/movies/:movieId" element={<SingleMovie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
