import React from "react";
import Nav from "../assets/MovieDesc/Nav";
import "../style.css";
import { useNavigate } from "react-router-dom";
import BPPOT from "../assets/Images/bppot.jpeg";
import ANTMANPOT from "../assets/Images/antmanpot.png";
import AVATARPOT from "../assets/Images/avatarpot.jpg";
import BTPOT from "../assets/Images/btpot.jpg";
import BATPOT from "../assets/Images/batpot.jpg";
import FASTXPOT from "../assets/Images/fastxpot.jpg";
import NFSPOT from "../assets/Images/nfspot.jpg";
import JWPOT from "../assets/Images/jwpot.jpg";
import FORDFERARRIPOT from "../assets/Images/fordvferraripot.jpg";
import CONJURINGPOT from "../assets/Images/conjuringpot.jpg";
import HUSTLEPOT from "../assets/Images/hustlepot.jpg";
import TWOWSPOT from "../assets/Images/twowspot.jpg";
import THELASTOFUSPOT from "../assets/Images/thelastofuspot.jpg";
import ANTMAN from "../assets/Images/antman.png";
import GETHARD from "../assets/Images/gethard.png";
import MEGAN from "../assets/Images/megan.png";
import SHAZAM from "../assets/Images/shazam.png";

const Index = () => {
  const navigate = useNavigate();
  const [movieData, setMovieData] = React.useState([]);
  const getApi = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'",
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
      setMovieData([...data?.results]);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getApi();
  }, []);

  const handleToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Nav home={true} />

      <section>
        <div className="slideshow-container">
          {/* <!-- Full-width images with number and caption text --> */}
          <div className="mySlides fade">
            <img src={ANTMAN} style={{ width: "100%" }} />
          </div>

          <div className="mySlides fade">
            <img src={GETHARD} style={{ width: "100%" }} />
          </div>

          <div className="mySlides fade">
            <img src={MEGAN} style={{ width: "100%" }} />
          </div>

          <div className="mySlides fade">
            <img src={SHAZAM} style={{ width: "100%" }} />
          </div>

          {/* <!-- Next and previous buttons --> */}
          <div>
            <a className="prev" onclick="plusSlides(-1)">
              &#10094;
            </a>
            <a className="next" onclick="plusSlides(1)">
              &#10095;
            </a>
          </div>
          <br />

          {/* <!-- The dots/circles --> */}
          <div style={{ textAlign: "center" }}>
            <span className="dot" onclick="currentSlide(1)"></span>
            <span className="dot" onclick="currentSlide(2)"></span>
            <span className="dot" onclick="currentSlide(3)"></span>
          </div>
        </div>
      </section>

      <section id="card">
        <h2>Movie Selection</h2>
        <div className="card-body">
          {movieData.map((item, index) => (
            <div className="body" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
              />
              <div className="desc">
                <span>Movie</span>
                <h3>{item.title}</h3>
                <div className="star">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-line"></i>
                  <i className="ri-star-s-line"></i>
                </div>
                <h4 onClick={() => handleToDetail(item.id)}>
                  Movie Information
                </h4>
              </div>
              <div className="youtube-play">
                <a href="youtube.html">
                  <i className="ri-play-circle-line play"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }

  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

export default Index;
