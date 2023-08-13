import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Movies } from "./Pages/Movies/Movies";
import { Starred } from "./Pages/Starred/Starred";
import { Watchlist } from "./Pages/Watchlist/Watchlist";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
