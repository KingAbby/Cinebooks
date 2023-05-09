import "../MovieDesc/Movie.css";
import FORDFERRARIPOT from '../Images/fordvferraripot.jpg';

const fordferrari = () => {
    return (
        <>
        <div>
        <ul id="nav">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <li><a href="/">Home</a></li>
            <li><a href="Index.js">Halaman Utama</a></li>
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
            <img src={FORDFERRARIPOT} style={{width:"100%"}} />
            <h3>Ford v Ferrari</h3>
            <h5>Movie</h5>
            <h6>2019</h6>
        </div>
        <div class="desc">
            <div class="movie-overview">
              <iframe id="overview" width="800" height="800" src="https://www.youtube.com/embed/zyYgDtY2AMY"></iframe>
            </div>
            <h4>Synopsis</h4>
            <h5>American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.</h5>
            <table>
                <tr>
                    <td>Producer</td>
                    <td>: James Mangold, Jenno Topping, Peter Chernin, Lucas Foster, Kevin Halloran</td>
                </tr>
                <tr>
                    <td>Director</td>
                    <td>: James Mangold</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>: Jez Butterworth, John-Henry Butterworth, Jason Keller</td>
                </tr>
                <tr>
                    <td>Casts</td>
                    <td>: Matt Damon, Christian Bale, Jon Bernthal, Caitríona Balfe, Josh Lucas, Noah Jupe, Tracy Letts, Remo Girone, </td>
                </tr>
                <tr>
                    <td></td>
                    <td> Ray McKinnon, JJ Feild, Jack McMullen, Corrado Invernizzi, Joe Williamson, Ian Harding, Christopher Darga, Shawn Law, Emil Beheshti, Darrin Prescott</td>
                </tr>
            </table>
        </div>
    </section>
    <div class="title">
        <h4>Genre:</h4>
    </div>
    <div class="genre">
        <a href="../Genres/Action.html">Action</a>
        <a href="../Genres/Biography.html">Biography</a>
        <a href="../Genres/Drama.html">Drama</a>
    </div>
        </>
    );
}

export default fordferrari;