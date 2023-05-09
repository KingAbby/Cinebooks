import "../MovieDesc/Movie.css";
import HUSTLEPOT from '../Images/hustlepot.jpg';

const hustlepot = () => {
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
            <img src={HUSTLEPOT} style={{width:"100%"}} />
            <h3>Hustle</h3>
            <h5>Movie</h5>
            <h6>2022</h6>
        </div>
        <div class="desc">
            <div class="movie-overview">
              <iframe id="overview" width="800" height="800" src="https://www.youtube.com/embed/nM4iy0reaCA"></iframe>
            </div>
            <h4>Synopsis</h4>
            <h5>A basketball scout discovers a phenomenal street ball player while in Spain and sees the prospect as his opportunity to get back into the NBA.</h5>
            <table>
                <tr>
                    <td>Producer</td>
                    <td>: Lebron James, Maverick Carter, Joe Roth, Joseph Vecsey, Jeff Kirschenbaum, Zack Roth, Adam Sandler,</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Allen Covert</td>
                </tr>
                <tr>
                    <td>Director</td>
                    <td>: Jeremiah Zagar</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>: Taylor Materne, Will Fetters</td>
                </tr>
                <tr>
                    <td>Casts</td>
                    <td>: Adam Sandler, Queen Latifah, Juancho Hernangomez, Ben Foster, Kenny Smith, Anthony Edwards,</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Robert Duvall, Jordan Hull, María Botto, Ainhoa Pillet, Raúl Castillo, Heidi Gardner, Jaleel White, Elvin Rodriguez, Moe Wagner, Boban Marjanovic, Michael Foster Jr, Julius Erving</td>
                </tr>
            </table>
        </div>
    </section>
    <div class="title">
        <h4>Genre:</h4>
    </div>
    <div class="genre">
        <a href="../Genres/Comedy.html">Comedy</a>
        <a href="../Genres/Drama.html">Drama</a>
        <a href="../Genres/Sport.html">Sport</a>
    </div>
        </>
    );
}

export default hustlepot;