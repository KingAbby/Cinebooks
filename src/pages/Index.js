import BlackPanther from '../assets/Images/bppot.jpeg'
import AntManIMG from '../assets/Images/antmanpot.png'

const Index = () => {
  return (
    <>
      <div>
        <ul id="nav">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <li>
            <a href="Home.js">Home</a>
          </li>
          <li>
            <a href="Index.js">Halaman Utama</a>
          </li>
          <li>
            <a href="Genre.js">Genre</a>
          </li>
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
        </ul>
      </div>

      <section>
        <div className="slideshow-container">
          {/* <!-- Full-width images with number and caption text --> */}
          <div className="mySlides fade">
            <img src="Images/antman.png" style={{width:"100%"}} />
          </div>

          <div className="mySlides fade">
            <img src="images/gethard.png" style={{width:"100%"}} />
          </div>

          <div className="mySlides fade">
            <img src="images/megan.png" style={{width:"100%"}} />
          </div>

          <div className="mySlides fade">
            <img src="images/shazam.png" style={{width:"100%"}} />
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
          <div style={{textAlign:"center"}}>
            <span className="dot" onclick="currentSlide(1)"></span>
            <span className="dot" onclick="currentSlide(2)"></span>
            <span className="dot" onclick="currentSlide(3)"></span>
          </div>
        </div>
      </section>

      <section id="card">
        <h2>Movie Selection</h2>
        <div className="card-body">
          <div className="body">
            <img src={BlackPanther} alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>Black Panther: Wakanda Forever</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-line"></i>
                <i className="ri-star-s-line"></i>
              </div>
              <a href="assets/Movie Desc/BP2.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <div className="youtube-play">
              <a href="youtube.html">
                <i className="ri-play-circle-line play"></i>
              </a>
            </div>
          </div>
          <div className="body">
            <img src={AntManIMG} alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>Ant-Man and the Wasp: Quantumania</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-s-line"></i>
                <i className="ri-star-s-line"></i>
              </div>
              <a href="Movie Desc/Ant-Man3.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src="Images/avatarpot.jpg" alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>Avatar: The Way of Water</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-s-line"></i>
              </div>
              <a href="Movie Desc/Avatar2.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src="Images/btpot.jpg" alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>Bullet Train</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-s-line"></i>
              </div>
              <a href="Movie Desc/BT.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src="Images/batpot.jpg" alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>The Batman</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-s-line"></i>
              </div>
              <a href="Movie Desc/TheBatman.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src="Images/fastxpot.jpg" alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>Fast X</h3>
              <a href="Movie Desc/FastX.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src="Images/nfspot.jpg" alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>Need for Speed</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-line"></i>
                <i className="ri-star-s-line"></i>
              </div>
              <a href="Movie Desc/NFS.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src="Images/jwpot.jpg" alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>John Wick: Chapter 4</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-s-line"></i>
              </div>
              <a href="Movie Desc/JW4.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src="Images/fordvferraripot.jpg" alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>Ford v Ferrari</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-s-line"></i>
              </div>
              <a href="Movie Desc/fordferrari.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src="Images/conjuringpot.jpg" alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>The Conjuring</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-s-line"></i>
              </div>
              <a href="Movie Desc/conjuring.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src="Images/hustlepot.jpg" alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>Hustle</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
                <i className="ri-star-s-line"></i>
              </div>
              <a href="Movie Desc/hustle.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src="Images/twowspot.jpg" alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>The Wolf of Wall Street</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-s-line"></i>
              </div>
              <a href="Movie Desc/thewolfofwallstreet.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src="Images/thelastofuspot.jpg" alt="Man Jumping" />
            <div className="desc">
              <span>TV Series</span>
              <h3>The Last of Us</h3>
              <div className="star">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>
              <a href="Movie Desc/thelastofus.html">
                <h4>Series Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;