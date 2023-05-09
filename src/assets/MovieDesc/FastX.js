import "../MovieDesc/Movie.css";
import FASTXPOT from '../Images/fastxpot.jpg';

const FastX = () => {
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
            <img src={FASTXPOT} style={{width:"100%"}} />
            <h3>Fast X</h3>
            <h5>Movie</h5>
            <h6>Coming Soon - May, 19 2023</h6>
        </div>
        <div class="desc">
            <div class="movie-overview">
              <iframe id="overview" width="800" height="800" src="https://www.youtube.com/embed/32RAq6JzY-w"></iframe>
            </div>
            <h4>Synopsis</h4>
            <h5>Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.</h5>
            <table>
                <tr>
                    <td>Producer</td>
                    <td>: Neal H. Moritz, Vin Diesel, Justin Lin, Jeff Kirschenbaum, Samantha Vincent</td>
                </tr>
                <tr>
                    <td>Director</td>
                    <td>: Louis Leterrier</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>: Justin Lin, Dan Mazeau, Gary Scott Thompson</td>
                </tr>
                <tr>
                    <td>Casts</td>
                    <td>: Vin Diesel, Jordana Brewster, Tyrese Gibson, Michelle Rodriguez, Ludacris, Jason Momoa, John Cena, </td>
                </tr>
                <tr>
                    <td></td>
                    <td> Jason Statham, Rita Moreno, Helen Mirren, Brie Larson, Charlize Theron, Alan Ritchson, Leo Abelo Perry, Michael Rooker, Cardi B, Nathalie Emmanuel, Luis Da Silva Jr</td>
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
        <a href="../Genres/Mystery.html">Mystery</a>
    </div>
        </>
    );
}

export default FastX;