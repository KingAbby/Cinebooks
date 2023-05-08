import BPPOT from '../assets/Images/bppot.jpeg'
import ANTMANPOT from '../assets/Images/antmanpot.png'
import AVATARPOT from '../assets/Images/avatarpot.jpg'
import BTPOT from '../assets/Images/btpot.jpg'
import BATPOT from '../assets/Images/batpot.jpg'
import FASTXPOT from '../assets/Images/fastxpot.jpg'
import NFSPOT from '../assets/Images/nfspot.jpg'
import JWPOT from '../assets/Images/jwpot.jpg'
import FORDFERARRIPOT from '../assets/Images/fordvferraripot.jpg'
import CONJURINGPOT from '../assets/Images/conjuringpot.jpg'
import HUSTLEPOT from '../assets/Images/hustlepot.jpg'
import TWOWSPOT from '../assets/Images/twowspot.jpg'
import TLOUPOT from '../assets/Images/thelastofuspot.jpg'


const Index = () => {
  return (
    <>
      <div>
        <ul id="nav">
          <li>
            <a href="/">Home</a>
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
            <img src={BPPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/BP2.js">
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
            <img src={ANTMANPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/AntMan3.js">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src={AVATARPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/Avatar2.js">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src={BTPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/BT.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src={BATPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/TheBatman.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src={FASTXPOT} alt="Man Jumping" />
            <div className="desc">
              <span>Movie</span>
              <h3>Fast X</h3>
              <a href="MovieDesc/FastX.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src={NFSPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/NFS.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src={JWPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/JW4.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src={FORDFERARRIPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/fordferrari.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src={CONJURINGPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/conjuring.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src={HUSTLEPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/hustle.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src={TWOWSPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/thewolfofwallstreet.html">
                <h4>Movie Information</h4>
              </a>
            </div>
            <a href="#">
              <i className="ri-play-circle-line play"></i>
            </a>
          </div>
          <div className="body">
            <img src={TLOUPOT} alt="Man Jumping" />
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
              <a href="MovieDesc/thelastofus.html">
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