import "./App.css";
import "./genre.css";
import "./home.css";
import "./keluar.css";
import "./style.css";
import "./assets/MovieDesc/Movie.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Genre from "./pages/Genre";
import MovieDesc0 from "./assets/MovieDesc/BP2";
import MovieDesc1 from "./assets/MovieDesc/AntMan3";
import MovieDesc2 from "./assets/MovieDesc/Avatar2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Index.js" element={<Index />} />
        <Route path="/Genre.js" element={<Genre />} />
        <Route path="/MovieDesc/BP2.js" element={<MovieDesc0 />} />
        <Route path="/MovieDesc/AntMan3.js" element={<MovieDesc1 />} />
        <Route path="/MovieDesc/Avatar2.js" element={<MovieDesc2 />} />
      </Routes>
    </div>
  );
}

export default App;
