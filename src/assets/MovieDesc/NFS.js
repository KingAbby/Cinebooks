import "../MovieDesc/Movie.css";
import NFSPOT from '../Images/nfspot.jpg';

const NFS = () => {
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
            <img src={NFSPOT} style={{width:"100%"}} />
            <h3>Need for Speed</h3>
            <h5>Movie</h5>
            <h6>2014</h6>
        </div>
        <div class="desc">
            <div class="movie-overview">
              <iframe id="overview" width="800" height="800" src="https://www.youtube.com/embed/u3wtVI-aJuw"></iframe>
            </div>
            <h4>Synopsis</h4>
            <h5>Fresh from prison, a street racer who was framed by a wealthy business associate joins a cross-country race with revenge in mind. His ex-partner, learning of the plan, places a massive bounty on his head as the race begins.</h5>
            <table>
                <tr>
                    <td>Producer</td>
                    <td>: John Gatins, Patrick O'Brien, Mark Sourian</td>
                </tr>
                <tr>
                    <td>Director</td>
                    <td>: Scott Waugh</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>: George Gatins, John Gatinse</td>
                </tr>
                <tr>
                    <td>Casts</td>
                    <td>: Aaron Paul, Imogen Poots, Dominic Cooper, Kid Cudi, Rami Malek, Ramón Rodríguez, Harrison Gilbertson, </td>
                </tr>
                <tr>
                    <td></td>
                    <td> Dakota Johnson, Stevie Ray Dallimore, Michael Keaton, Alan Pflueger, Brian L. Keaulana, Logan Holladay, Carmela Zumbado, Jalil Jay Lynch, Nick Chinlund, Chad Randall, Buddy Joe Hooker</td>
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
        <a href="../Genres/Thriller.html">Thriller</a>
    </div>
        </>
    );
}

export default NFS;