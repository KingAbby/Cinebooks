import React from "react";

const Nav = ({ home, searchByText, selectGenre, genre, searchText }) => {
  const handleOnChangeText = (e) => {
    selectGenre(false);
    searchByText(e.target.value);
  };
  const handleOnChangeGenre = (e) => {
    if (searchText !== "") {
      searchByText("");
    }
    selectGenre(e.target.value);
  };
  return (
    <div>
      <ul id="nav">
        <li>
          <a href="/">Home</a>
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
            <li>
              <select
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
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
