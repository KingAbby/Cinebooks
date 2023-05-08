import logo from "./logo.svg";
import "./App.css";
import "./genre.css";
import "./home.css";
import "./keluar.css";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Genre from "./pages/Genre";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home.js" element={<Home />} />
        <Route path="/Index.js" element={<Index />} />
        <Route path="/Genre.js" element={<Genre />} />
      </Routes>
    </div>
  );
}

export default App;
