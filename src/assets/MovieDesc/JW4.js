import "../MovieDesc/Movie.css";
import JW4POT from '../Images/jwpot.jpg';

const JW4 = () => {
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
            <img src={JW4POT} style={{width:"100%"}} />
            <h3>John Wick: Chapter 4</h3>
            <h5>Movie</h5>
            <h6>2023</h6>
        </div>
        <div class="desc">
            <div class="movie-overview">
              <iframe id="overview" width="800" height="800" src="https://www.youtube.com/embed/qEVUtrk8_B4"></iframe>
            </div>
            <h4>Synopsis</h4>
            <h5>John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.</h5>
            <table>
                <tr>
                    <td>Producer</td>
                    <td>: John Gatins, Patrick O'Brien, Mark Sourian</td>
                </tr>
                <tr>
                    <td>Director</td>
                    <td>: Chad Stahelski</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>: Shay Hatten, Michael Finch, Derek Kolstad</td>
                </tr>
                <tr>
                    <td>Casts</td>
                    <td>: Keanu Reeves, Laurence Fishburne, George Georgiou, Lance Reddick, Clancy Brown, Ian McShane, Marko Zaror, </td>
                </tr>
                <tr>
                    <td></td>
                    <td> Bill Skarsgård, Donnie Yen, Aimée Kwan, Hiroyuki Sanada, Shamier Anderson, Rina Sawayama, Yoshinori Tashiro, Hiroki Sumi, Daiki Suzuki, Julia Asuka Riedl, Milena Rendón</td>
                </tr>
            </table>
        </div>
    </section>
    <div class="title">
        <h4>Genre:</h4>
    </div>
    <div class="genre">
        <a href="../Genres/Action.html">Action</a>
        <a href="../Genres/Crime.html">Crime</a>
        <a href="../Genres/Thriller.html">Thriller</a>
    </div>
        </>
    );
}

export default JW4;