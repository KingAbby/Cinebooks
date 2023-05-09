import "../MovieDesc/Movie.css";
import BATPOT from '../Images/batpot.jpg';

const TheBatman = () => {
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
            <img src={BATPOT} style={{width:"100%"}} />
            <h3>The Batman</h3>
            <h5>Movie</h5>
            <h6>2022</h6>
        </div>
        <div class="desc">
            <div class="movie-overview">
              <iframe id="overview" width="800" height="800" src="https://www.youtube.com/embed/mqqft2x_Aa4"></iframe>
            </div>
            <h4>Synopsis</h4>
            <h5>When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.</h5>
            <table>
                <tr>
                    <td>Producer</td>
                    <td>: Matt Reeves, Dylan Clark</td>
                </tr>
                <tr>
                    <td>Director</td>
                    <td>: Matt Reeves</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>: Matt Reeves, Peter Craig, Bob Kane</td>
                </tr>
                <tr>
                    <td>Casts</td>
                    <td>: Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Collin Farrel, Paul Dano, John Turturro, Andy Serkis, </td>
                </tr>
                <tr>
                    <td></td>
                    <td>Peter Sarsgaard, Barry Keoghan, Jayme Lawson, Gil Perez-Abraham, Peter McDonald, Con O'Neill, Alex Ferns, Rupert Penry-Jones, Kosha Engler, Archie Barnes, Janine Harouni</td>
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
        <a href="../Genres/Drama.html">Drama</a>
        <a href="../Genres/Thriller.html">Thriller</a>
    </div>
        </>
    );
}

export default TheBatman;