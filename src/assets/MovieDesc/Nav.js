import React from "react";

const Nav = ({ home }) => {
  return (
    <div>
      <ul id="nav">
        <li>
          <a href="/">Home</a>
        </li>
        {home && (
          <div id="searchbar">
            Search: <input type="search" />{" "}
          </div>
        )}
        <li>
          <select>
            <option>Genre</option>
            <option>Action</option>
            <option>Adventure</option>
            <option>Biography</option>
            <option>Comedy</option>
            <option>Crime</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Mystery</option>
            <option>Romance</option>
            <option>Sci-Fi</option>
            <option>Sport</option>
            <option>Thriller</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
