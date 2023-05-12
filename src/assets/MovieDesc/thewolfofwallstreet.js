import "../MovieDesc/Movie.css";
import TWOWSPOT from '../Images/twowspot.jpg';

const thewolfofwallstreet = () => {
    return (
        <>
        <div>
        <ul id="nav">
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
            <img src={TWOWSPOT} style={{width:"100%"}} />
            <h3>The Wolf of Wall Street</h3>
            <h5>Movie</h5>
            <h6>2013</h6>
        </div>
        <div class="desc">
        <div class="movie-overview">
              <iframe id="overview" width="800" height="800" src="https://www.youtube.com/embed/iszwuX1AK6A"></iframe>
            </div>
            <h4>Synopsis</h4>
            <h5>Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.</h5>
            <table>
                <tr>
                    <td>Producer</td>
                    <td>: Martin Scorsese, Leonardo DiCaprio, Riza Aziz, Joey McFarland, Emma Tillinger Koskoff</td>
                </tr>
                <tr>
                    <td>Director</td>
                    <td>: Martin Scorsese</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>: Terence Winter, Jordan Belfort</td>
                </tr>
                <tr>
                    <td>Casts</td>
                    <td>: Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey, Kyle Chandler, Rob Reiner,</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Jon Bernthal, Jon Favreau, Jean Dujardin, Joanna Lumley, Cristin Milioti, Christine Ebersole, Shea Whigham, Katarina Cas, P.J. Bryne, Kenneth Choi, Brian Sacca, Henry Zebrowski</td>
                </tr>
            </table>
        </div>
    </section>
    <div class="title">
        <h4>Genre:</h4>
    </div>
    <div class="genre">
        <a href="../Genres/Biography.html">Biography</a>
        <a href="../Genres/Comedy.html">Comedy</a>
        <a href="../Genres/Crime.html">Crime</a>
    </div>
        </>
    );
}

export default thewolfofwallstreet;