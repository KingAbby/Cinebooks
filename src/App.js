import "./App.css";
import "./genre.css";
import "./home.css";
import "./keluar.css";
import "./style.css";
import "./assets/MovieDesc/Movie.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/index";
import Genre from "./pages/Genre";
import MovieDesc0 from "./assets/MovieDesc/BP2";
import MovieDesc1 from "./assets/MovieDesc/AntMan3";
import MovieDesc2 from "./assets/MovieDesc/Avatar2";
import MovieDesc3 from "./assets/MovieDesc/BT";
import MovieDesc4 from "./assets/MovieDesc/conjuring";
import MovieDesc5 from "./assets/MovieDesc/FastX";
import MovieDesc6 from "./assets/MovieDesc/fordferrari";
import MovieDesc7 from "./assets/MovieDesc/hustle";
import MovieDesc8 from "./assets/MovieDesc/JW4";
import MovieDesc9 from "./assets/MovieDesc/NFS";
import MovieDesc10 from "./assets/MovieDesc/TheBatman";
import MovieDesc11 from "./assets/MovieDesc/thelastofus";
import MovieDesc12 from "./assets/MovieDesc/thewolfofwallstreet";

function App() {
  return (
    <div className="App">
      <>

      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Index.js" element={<Index />} />
        <Route path="/Genre.js" element={<Genre />} />
        <Route path="/MovieDesc/BP2.js" element={<MovieDesc0 />} />
        <Route path="/MovieDesc/AntMan3.js" element={<MovieDesc1 />} />
        <Route path="/MovieDesc/Avatar2.js" element={<MovieDesc2 />} />
        <Route path="/MovieDesc/BT.js" element={<MovieDesc3 />} />
        <Route path="/MovieDesc/conjuring.js" element={<MovieDesc4 />} />
        <Route path="/MovieDesc/FastX.js" element={<MovieDesc5 />} />
        <Route path="/MovieDesc/fordferrari.js" element={<MovieDesc6 />} />
        <Route path="/MovieDesc/hustle.js" element={<MovieDesc7 />} />
        <Route path="/MovieDesc/JW4.js" element={<MovieDesc8 />} />
        <Route path="/MovieDesc/NFS.js" element={<MovieDesc9 />} />
        <Route path="/MovieDesc/TheBatman.js" element={<MovieDesc10 />} />
        <Route path="/MovieDesc/thelastofus.js" element={<MovieDesc11 />} />
        <Route path="/MovieDesc/thewolfofwallstreet.js" element={<MovieDesc12 />} />
      </Routes>
    </div>
  );
}

export default App;

/* Test */