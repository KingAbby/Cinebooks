import React, { useRef, useEffect } from "react";
import LOGO from "../Images/LogoName.png";

const Nav = ({ home, searchByText, selectGenre, genre, searchText }) => {
  const handleOnChangeText = (e) => {
    selectGenre(false);
    searchByText(e);
  };

  const genreDropdownRef = useRef(null);

  useEffect(() => {
    if (genreDropdownRef.current) {
      genreDropdownRef.current.focus();
    }
  }, []);
  
  const handleOnChangeGenre = (e) => {
    if (searchText !== "") {
      searchByText("");
    }
    selectGenre(e);
  };

  return (
    <div>
      <ul id="nav">
        <li className="logo">
          <img src={LOGO} style={{ width: "50%" }} alt="Logo" />
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/AboutUs.js">About Us</a>
        </li>
        {home && (
          <>
            <div id="searchbar">
              Search:{" "}
              <input
                type="search"
                onChange={(e) => handleOnChangeText(e.target.value)}
              />{" "}
            </div>
            <div onClick={() => console.log("Movie Selection", genreDropdownRef.current)}>
              <li>
                <select
                  ref={genreDropdownRef}
                  value={genre}
                  onChange={(e) => handleOnChangeGenre(e.target.value)}
                >
                  <option value={false}>Genre</option>
                  <option value={28}>Action</option>
                  <option value={12}>Adventure</option>
                  <option value={35}>Comedy</option>
                  <option value={80}>Crime</option>
                  <option value={18}>Drama</option>
                  <option value={14}>Fantasy</option>
                  <option value={27}>Horror</option>
                  <option value={9648}>Mystery</option>
                  <option value={10749}>Romance</option>
                  <option value={878}>Sci-Fi</option>
                  <option value={53}>Thriller</option>
                </select>
              </li>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
