import React, { useState } from "react";
import Nav from "../assets/MovieDesc/Nav";
import "../assets/MovieDesc/AboutUs.css";
import Abi from "../assets/Images/Abi.jpg";
import Fikri from "../assets/Images/Fikri.jpg";
// import Anthonio from "../assets/Images/Anthonio.jpg";
// import Gilbert from "../assets/Images/Gilbert.jpg";

function AboutUs() {
  const [flippedCard, setFlippedCard] = useState(null);

  const toggleFlip = (cardIndex) => {
    setFlippedCard(cardIndex === flippedCard ? null : cardIndex);
  };

  const isCardFlipped = (cardIndex) => {
    return cardIndex === flippedCard;
  };

  return (
    <>
      <Nav />
      <div id="logo2">
        <h2>About Us</h2>
      </div>

      <div id="AboutUs" className="card-container">
        <div
          className={`card ${isCardFlipped(0) ? "flipped" : ""}`}
          onMouseEnter={() => toggleFlip(0)}
          onMouseLeave={() => toggleFlip(0)}
        >
          <div className="card-front">
            <img
              src={Abi}
              className="card-img-top custom-img"
              alt="Abi Andrea Nurpasha"
            />
            <div className="card-body">
              <h5 className="card-title">
                Abi Andrea Nurpasha (00000079207) - Informatika
              </h5>
              <p className="card-text"> Isi Sendiri</p>
              <div className="icons">
                <a href="https://github.com/KingAbby">
                  <i className="ri-github-fill"></i>
                </a>
                <a href="https://www.instagram.com/abiandrea_/">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href="https://open.spotify.com/user/21ctzxad6xictyjhrjqzse5cy?si=fc243f15b8a04cc5">
                  <i className="ri-spotify-fill"></i>
                </a>
              </div>
              <button
                className="btn btn-primary custom-btn"
                onClick={() => toggleFlip(0)}
              >
                {isCardFlipped(0) ? "LESS INFO" : "More Info"}
              </button>
            </div>
          </div>
          <div className="card-back">
            <h3>Isi Deskripsi Sendiri</h3>
            <h5>Informatika</h5>
            <div className="icons">
              <a href="https://github.com/KingAbby">
                <i className="ri-github-fill"></i>
              </a>
              <a href="https://www.instagram.com/abiandrea_/">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="https://open.spotify.com/user/21ctzxad6xictyjhrjqzse5cy?si=fc243f15b8a04cc5">
                <i className="ri-spotify-fill"></i>
              </a>
            </div>
            <button
              className="btn btn-primary custom-btn"
              onClick={() => toggleFlip(0)}
            >
              LESS INFO
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`card ${isCardFlipped(1) ? "flipped" : ""}`}
          onMouseEnter={() => toggleFlip(1)}
          onMouseLeave={() => toggleFlip(1)}
        >
          <div className="card-front">
            <img
              src={Fikri}
              className="card-img-top custom-img"
              alt="Abi Andrea Nurpasha"
            />
            <div className="card-body">
              <h5 className="card-title">
                Fikri Naufal Andrasito (00000079229) - Informatika
              </h5>
              <p className="card-text"> Saya Adalah</p>
              <div className="icons">
                <a href="https://github.com/KingAbby">
                  <i className="ri-github-fill"></i>
                </a>
                <a href="https://www.instagram.com/abiandrea_/">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href="https://open.spotify.com/user/21ctzxad6xictyjhrjqzse5cy?si=fc243f15b8a04cc5">
                  <i className="ri-spotify-fill"></i>
                </a>
              </div>
              <button
                className="btn btn-primary custom-btn"
                onClick={() => toggleFlip(1)}
              >
                {isCardFlipped(1) ? "LESS INFO" : "More Info"}
              </button>
            </div>
          </div>
          <div className="card-back">
            <h3>Isi Deskripsi Sendiri</h3>
            <h5>Informatika</h5>
            <div className="icons">
              <a href="https://github.com/KingAbby">
                <i className="ri-github-fill"></i>
              </a>
              <a href="https://www.instagram.com/abiandrea_/">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="https://open.spotify.com/user/21ctzxad6xictyjhrjqzse5cy?si=fc243f15b8a04cc5">
                <i className="ri-spotify-fill"></i>
              </a>
            </div>
            <button
              className="btn btn-primary custom-btn"
              onClick={() => toggleFlip(1)}
            >
              LESS INFO
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`card ${isCardFlipped(2) ? "flipped" : ""}`}
          onMouseEnter={() => toggleFlip(2)}
          onMouseLeave={() => toggleFlip(2)}
        >
          <div className="card-front">
            <img
              //   src={Abi}
              className="card-img-top custom-img"
              alt="Abi Andrea Nurpasha"
            />
            <div className="card-body">
              <h5 className="card-title">
                Anthonio Raphael Porteuro Bulo (00000079343) - Informatika
              </h5>
              <p className="card-text"> Saya Adalah</p>
              <div className="icons">
                <a href="https://github.com/KingAbby">
                  <i className="ri-github-fill"></i>
                </a>
                <a href="https://www.instagram.com/abiandrea_/">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href="https://open.spotify.com/user/21ctzxad6xictyjhrjqzse5cy?si=fc243f15b8a04cc5">
                  <i className="ri-spotify-fill"></i>
                </a>
              </div>
              <button
                className="btn btn-primary custom-btn"
                onClick={() => toggleFlip(2)}
              >
                {isCardFlipped(2) ? "LESS INFO" : "More Info"}
              </button>
            </div>
          </div>
          <div className="card-back">
            <h3>Isi Deskripsi Sendiri</h3>
            <h5>Informatika</h5>
            <div className="icons">
              <a href="https://github.com/KingAbby">
                <i className="ri-github-fill"></i>
              </a>
              <a href="https://www.instagram.com/abiandrea_/">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="https://open.spotify.com/user/21ctzxad6xictyjhrjqzse5cy?si=fc243f15b8a04cc5">
                <i className="ri-spotify-fill"></i>
              </a>
            </div>
            <button
              className="btn btn-primary custom-btn"
              onClick={() => toggleFlip(2)}
            >
              LESS INFO
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className={`card ${isCardFlipped(3) ? "flipped" : ""}`}
          onMouseEnter={() => toggleFlip(3)}
          onMouseLeave={() => toggleFlip(3)}
        >
          <div className="card-front">
            <img
              //   src={Abi}
              className="card-img-top custom-img"
              alt="Abi Andrea Nurpasha"
            />
            <div className="card-body">
              <h5 className="card-title">
                Gilbert Parluhutan Pakpahan (00000079904) - Informatika
              </h5>
              <p className="card-text"> Saya Adalah</p>
              <div className="icons">
                <a href="https://github.com/KingAbby">
                  <i className="ri-github-fill"></i>
                </a>
                <a href="https://www.instagram.com/abiandrea_/">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href="https://open.spotify.com/user/21ctzxad6xictyjhrjqzse5cy?si=fc243f15b8a04cc5">
                  <i className="ri-spotify-fill"></i>
                </a>
              </div>
              <button
                className="btn btn-primary custom-btn"
                onClick={() => toggleFlip(3)}
              >
                {isCardFlipped(3) ? "LESS INFO" : "More Info"}
              </button>
            </div>
          </div>
          <div className="card-back">
            <h3>Isi Deskripsi Sendiri</h3>
            <h5>Informatika</h5>
            <div className="icons">
              <a href="https://github.com/KingAbby">
                <i className="ri-github-fill"></i>
              </a>
              <a href="https://www.instagram.com/abiandrea_/">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="https://open.spotify.com/user/21ctzxad6xictyjhrjqzse5cy?si=fc243f15b8a04cc5">
                <i className="ri-spotify-fill"></i>
              </a>
            </div>
            <button
              className="btn btn-primary custom-btn"
              onClick={() => toggleFlip(3)}
            >
              LESS INFO
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
