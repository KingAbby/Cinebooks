import "../MovieDesc/Movie.css";
import ANTMANPOT from "../Images/antmanpot.png";

const AntMan3 = () => {
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
      <div class="title">
        <h2>Movie Information</h2>
      </div>

      <section id="info">
        <div class="movie">
          <img src={ANTMANPOT} style={{ width: "100%" }} />
          <h3>Ant-Man and the Wasp: Quantumania</h3>
          <h5>Movie</h5>
          <h6>2023</h6>
        </div>
        <div class="desc">
          <div class="movie-overview">
            <iframe
              id="overview"
              width="800"
              height="800"
              src="https://www.youtube.com/embed/ZlNFpri-Y40"
            ></iframe>
          </div>
          <h4>Synopsis</h4>
          <h5>
            Scott Lang and Hope Van Dyne are dragged into the Quantum Realm,
            along with Hope's parents and Scott's daughter Cassie. Together they
            must find a way to escape, but what secrets is Hope's mother hiding?
            And who is the mysterious Kang?
          </h5>
          <table>
            <tr>
              <td>Producer</td>
              <td>: Kevin Fiege</td>
            </tr>
            <tr>
              <td>Director</td>
              <td>: Peyton Reed</td>
            </tr>
            <tr>
              <td>Writer</td>
              <td>: Jeff Loveness, Stan Lee, Larry Lieber</td>
            </tr>
            <tr>
              <td>Casts</td>
              <td>
                : Paul Rudd, Michael Douglas, Jonathan Majors, Bill Murray,
                William Jackson Harper, Evangeline Lilly,{" "}
              </td>
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

export default AntMan3;
