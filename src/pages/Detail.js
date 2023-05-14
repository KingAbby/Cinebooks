import "../assets/MovieDesc/Movie.css";
import ANTMANPOT from "../assets/Images/antman.png";
import Nav from "../assets/MovieDesc/Nav";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import ReactPlayer from "react-player/lazy";

const Detail = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);
  const getApi = async () => {
    setLoading(true);
    let newData = {};
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2I1NmU2ZmQzZWY0NDNiM2EyNGQxZmU2ODI0Yzc1NiIsInN1YiI6IjY0NjBhYjc3YTY3MjU0MDBlM2QxYzNmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mF92dZ4Jll99QJNHWJYX4yiFPckV6iqo87gpDowtOAs",
          },
        } // *GET, POST, PUT, DELETE, etc.}
      );
      const data = await response.json();
      const url = `https://movies-tv-shows-database.p.rapidapi.com/?movieid=${data.imdb_id}`;
      const options = {
        method: "GET",
        headers: {
          Type: "get-movie-details",
          "X-RapidAPI-Key":
            "696cfde225msh3a5b5bbd15f2f0bp15f5bbjsn220c86b8f486",
          "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
        },
      };

      const otherResponse = await fetch(url, options);
      const result = await otherResponse.json();
      newData = { ...data, ...result };
      setMovieData(newData);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  React.useEffect(() => {
    getApi();
  }, []);

  if (isLoading) {
    return <>loading</>;
  }
  return (
    <>
      <Nav />
      <div class="title">
        <h2>Movie Information</h2>
      </div>

      <section id="info">
        <div class="movie">
          <img
            src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
            style={{ width: "100%" }}
            alt={movieData.title}
          />
          <h3>{movieData.title}</h3>
          <h5>Movie</h5>
          <h6>{movieData.year}</h6>
        </div>
        <div class="desc">
          <div class="movie-overview">
            {movieData?.youtube_trailer_key && (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${movieData?.youtube_trailer_key}`}
              />
            )}
          </div>
          <h4 style={{ marginTop: "100px" }}>Synopsis</h4>
          <h5>{movieData.overview}</h5>
          <table>
            <tr>
              <td>Director</td>
              <td>
                : {movieData?.directors && movieData?.directors.join(", ")}
              </td>
            </tr>
            <tr>
              <td>Casts</td>
              <td>: {movieData?.stars && movieData?.stars.join(", ")}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                {" "}
                Michelle Pfeiffer, Kathryn Newton, Katy M. O'Brian, Jamie Andrew
                Cutler, David Dastmalchian, Mark Weinman, Tom Clark, Nathan
                Blees, Durassie Kiangangu, Leon Cooke, Ross Mullan, Randall Park
              </td>
            </tr>
          </table>
        </div>
      </section>
      <div class="title">
        <h4>Genre:</h4>
      </div>
      <div class="genre">
        <a href="../Genres/Action.html">Action</a>
        <a href="../Genres/Adventure.html">Adventure</a>
        <a href="../Genres/Comedy.html">Comedy</a>
      </div>
    </>
  );
};

export default Detail;
