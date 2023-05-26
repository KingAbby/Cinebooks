import React, { useState } from "react";
import Nav from "../assets/MovieDesc/Nav";
import "../assets/MovieDesc/AboutUs.css";
import Abi from "../assets/Images/Abi.jpg";
import Fikri from "../assets/Images/Fikri.jpg";
import Anthonio from "../assets/Images/Anthonio.jpg";
import Gilbert from "../assets/Images/Gilbert.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons";

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

              <p className="card-text">
                <div className="icons">
                  <a className="github-icon" href="https://github.com/KingAbby">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>

                  <a
                    className="instagram-icon"
                    href="https://www.instagram.com/abiandrea_/"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>

                  <a
                    className="spotify-icon"
                    href="https://open.spotify.com/user/21ctzxad6xictyjhrjqzse5cy?si=fc243f15b8a04cc5"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faSpotify} size="lg" />{" "}
                  </a>
                </div>
              </p>

              <button
                className="btn btn-primary custom-btn"
                onClick={() => toggleFlip(0)}
              >
                {isCardFlipped(0) ? "LESS INFO" : "More Info"}
              </button>
            </div>
          </div>
          <div className="card-back">
            <h4>
              Saya memiliki selera film yang cenderung tertarik pada genre
              "Action". Beberapa contoh film yang saya rekomendasikan yaitu
              "John Wick", "Fast X", dan "Avatar". Saya menikmati ketegangan dan
              kegembiraan yang ditawarkan oleh film-film Action ini dan senang
              menjelajahi dunia aksi yang berbeda.
            </h4>
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

              <p className="card-text">
                <div className="icons">
                  <a
                    className="github-icon"
                    href="https://github.com/naufaland"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>

                  <a
                    className="instagram-icon"
                    href="https://www.instagram.com/fikrinaufaland_/"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>

                  <a
                    className="spotify-icon"
                    href="https://open.spotify.com/user/tjfsbertyp0s4wzi6ypbrikui?si=387e79adb596420c"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faSpotify} size="lg" />{" "}
                  </a>
                </div>
              </p>

              <button
                className="btn btn-primary custom-btn"
                onClick={() => toggleFlip(1)}
              >
                {isCardFlipped(1) ? "LESS INFO" : "More Info"}
              </button>
            </div>
          </div>
          <div className="card-back">
            <h4>
              "Ngomongin soal Film, saya biasanya suka dengan Film yang berbau
              action dan adventure. Mungkin 1 Film yang visa di jadiin
              rekomendasi adalah 'Extarction' yang diperanin sama Chris
              Hemsworth. Atau mau yang dicampur sama comedy nya? 'The Big 4' sih
              rekomendasi saya".
            </h4>
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
              src={Anthonio}
              className="card-img-top custom-img"
              alt="Anthonio Raphael Purteuro Bulo"
            />
            <div className="card-body">
              <h5 className="card-title">
                Anthonio Raphael Porteuro Bulo (00000079343) - Informatika
              </h5>

              <p className="card-text">
                <div className="icons">
                  <a
                    className="github-icon"
                    href="https://github.com/AnthonioMasbroo"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>

                  <a
                    className="instagram-icon"
                    href="https://www.instagram.com/fikrinaufaland_/"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>

                  <a
                    className="spotify-icon"
                    href="https://open.spotify.com/user/tjfsbertyp0s4wzi6ypbrikui?si=387e79adb596420c"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faSpotify} size="lg" />{" "}
                  </a>
                </div>
              </p>

              <button
                className="btn btn-primary custom-btn"
                onClick={() => toggleFlip(2)}
              >
                {isCardFlipped(2) ? "LESS INFO" : "More Info"}
              </button>
            </div>
          </div>
          <div className="card-back">
            <h4>
              "Berbeda dari teman-teman saya, saya lebih suka film dengan genre
              action dan comedy. 'Red Notice' adalah salah satu film yang saya
              rekomendasikan untuk kalian, film ini dibintangi oleh Gal Gadot,
              Ryan Reynolds, dan juga Dwayne Johnson"
            </h4>
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
              src={Gilbert}
              className="card-img-top custom-img"
              alt="Gilbert Parluhutan Pakpahan"
            />
            <div className="card-body">
              <h5 className="card-title">
                Gilbert Parluhutan Pakpahan (00000079904) - Informatika
              </h5>

              <p className="card-text">
                <div className="icons">
                  <a className="github-icon" href="https://github.com/Giltp">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>

                  <a
                    className="instagram-icon"
                    href="https://www.instagram.com/giltpp"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>

                  <a
                    className="spotify-icon"
                    href="https://open.spotify.com/user/e72d0ofcsfowu8zf1t3vwqbci"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faSpotify} size="lg" />{" "}
                  </a>
                </div>
              </p>

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
